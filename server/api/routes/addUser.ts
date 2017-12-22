import { Request, Response } from 'express';
import { connection } from '../../index';
import { MysqlError } from 'mysql';
import { User } from '../../classes/User';
import { IUser } from '../../../client/src/interfaces/general';

export function addUser(req: Request, res: Response) {
    const user = new User(req.body);
    user.addToDB()
        .then(() => res.send(req.body))
        .catch((err: Error) => {
            throw err;
        });
}