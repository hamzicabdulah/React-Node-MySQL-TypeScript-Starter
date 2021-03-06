import * as express from 'express';
import { Application, Request, Response } from 'express';
import { resolve } from 'path';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import { api } from './api/api';
import { createConnection, MysqlError, Connection } from 'mysql';

export const app: Application = express();
dotenv.config({
    path: __dirname + '/../.env'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

api(app);
app.use(express.static(resolve(__dirname, '../client/public')));
app.get('*', (req: Request, res: Response) => {
    res.sendFile(resolve(__dirname, '../client/public/index.html'));
});

export const connection: Connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
});

connection.connect((err: MysqlError) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

const port = process.env.PORT || 3000;
if (!module.parent) {
    app.listen(port, (err: Error) => {
        if (err) throw err;
        else console.log('Listening on port ' + port);
    });
}