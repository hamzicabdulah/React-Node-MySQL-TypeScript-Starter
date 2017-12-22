import { expect } from 'chai';
import { AnyAction } from 'redux';
import { user, users } from '../constants';
import { ADD_USER, GET_ALL_USERS } from '../../src/actions/actionTypes';
import { usersActions } from '../../src/actions/usersActions';

describe('Users Actions', () => {
    describe('addUserSuccess', () => {
        it('should create an ADD_USER action', () => {
            const expectedAction: AnyAction = {
                user,
                type: ADD_USER
            };

            const action: AnyAction = usersActions.addUserSuccess(user);

            expect(action).to.deep.equal(expectedAction);
        });
    });

    describe('getAllUsersSuccess', () => {
        it('should create a GET_ALL_USERS action', () => {
            const expectedAction: AnyAction = {
                users,
                type: GET_ALL_USERS
            };

            const action: AnyAction = usersActions.getAllUsersSuccess(users);

            expect(action).to.deep.equal(expectedAction);
        });
    });
});