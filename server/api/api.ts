import { addUser } from './routes/addUser';
import { getAllUsers } from './routes/getAllUsers';
import { Application } from 'express';

export function api(app: Application) {
    app.post('/api/addUser', addUser);
    app.get('/api/getAllUsers', getAllUsers);
}