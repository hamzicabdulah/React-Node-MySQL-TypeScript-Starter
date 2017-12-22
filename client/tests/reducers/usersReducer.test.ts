import { expect } from 'chai';
import { AnyAction } from 'redux';
import { usersActions } from '../../src/actions/usersActions';
import { usersReducer } from '../../src/reducers/usersReducer';
import { users, user1, user2, user } from '../constants';

describe('Users Reducer', () => {
    it('should add action users to state when passed action type GET_ALL_USERS', () => {
        const action: AnyAction = usersActions.getAllUsersSuccess(users);

        const newState = usersReducer([], action);

        expect(newState.length).to.equal(2);
        expect(newState[0]).to.deep.equal(user1);
        expect(newState[1]).to.deep.equal(user2);
    });

    it('should add new user when passed action type ADD_USER', () => {
        const action: AnyAction = usersActions.addUserSuccess(user);

        const newState = usersReducer(users, action);

        expect(newState.length).to.equal(3);
        expect(newState[0]).to.deep.equal(user1);
        expect(newState[1]).to.deep.equal(user2);
        expect(newState[2]).to.deep.equal(user);
    });
});