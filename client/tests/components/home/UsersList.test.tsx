import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import { UsersList } from '../../../src/components/home/UsersList';
import { users } from '../../constants';
import { IUsersListProps } from '../../../src/interfaces/UsersList';

let props: IUsersListProps;
let wrapper: ShallowWrapper<IUsersListProps>;

describe('HomeForm', () => {
    beforeEach(() => {
        props = { users };
        wrapper = shallow<IUsersListProps>(<UsersList {...props} />);
    });

    it('should render table with head and body', () => {
        expect(wrapper.find('table')).to.have.length(1);
        expect(wrapper.find('thead')).to.have.length(1);
        expect(wrapper.find('tbody')).to.have.length(1);
    });

    it('should render table rows for all users passed in props', () => {
        const usersRows = wrapper.find('tbody tr');
        expect(usersRows).to.have.length(props.users.length);
        expect(usersRows.at(0).childAt(0).text()).to.equal(props.users[0].name);
        expect(usersRows.at(0).childAt(1).text()).to.equal(props.users[0].github);
    });
});