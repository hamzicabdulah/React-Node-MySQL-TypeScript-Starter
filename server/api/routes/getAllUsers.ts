import { Request, Response } from 'express';
import { connection } from '../../index';
import { MysqlError } from 'mysql';
import { User } from '../../classes/User';
import { IUser } from '../../../client/src/interfaces/general';

export function getAllUsers(req: Request, res: Response) {
    User.getAllUsers()
        .then((users: IUser[]) => res.send(users))
        .catch((err: Error) => {
            throw err;
        });
}