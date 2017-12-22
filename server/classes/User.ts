import { connection } from '../index';
import { MysqlError } from 'mysql';

export class User {
    name: string;
    github: string;

    constructor({ name, github }) {
        this.name = name;
        this.github = github;
    }

    static getAllUsers() {
        const cmd = 'SELECT * FROM users';
        return new Promise((resolve, reject) => {
            connection.query(cmd, (err: MysqlError, users) => {
                if (err) return reject(err);
                resolve(users);
            });
        });
    }

    addToDB() {
        const cmd = `INSERT INTO users (name, github) VALUES ('${this.name}', '${this.github}')`;
        return new Promise((resolve, reject) => {
            connection.query(cmd, (err: MysqlError, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }
}