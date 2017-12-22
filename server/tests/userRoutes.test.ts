import * as chai from 'chai';
import { expect } from 'chai';
import chaiHttp = require('chai-http');
import { app, connection } from '../index';
import { user } from '../../client/tests/constants';
import { MysqlError } from 'mysql';

chai.use(chaiHttp);
const server = app.listen(undefined); // This sets up a temporary server just for testing purposes

describe('Api Requests', () => {
    describe('GET /api/getAllUsers', () => {
        it('should return all the users in the database', (done) => {
            chai.request(server)
                .get('/api/getAllUsers')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    describe('POST /api/addUser', () => {
        before((done) => {
            // Remove the user that is going to be added before adding them to the database
            const cmd = `DELETE FROM users WHERE name = '${user.name}' AND github = '${user.github}'`;
            connection.query(cmd, (err: MysqlError) => {
                if (err) throw err;
                done();
            });
        });

        it('should add a new user in the database', (done) => {
            chai.request(server)
                .post('/api/addUser')
                .send(user)
                .end((err, res) => {
                    const body = res.body
                    expect(res.status).to.equal(200);
                    expect(body).to.be.an('object');
                    expect(body).to.have.property('name').equal(user.name);
                    expect(body).to.have.property('github').equal(user.github);
                    done();
                });
        });
    });
});