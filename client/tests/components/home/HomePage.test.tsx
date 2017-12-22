import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, ReactWrapper } from 'enzyme';
import { HomePage } from '../../../src/components/home/HomePage';
import { usersActions } from '../../../src/actions/usersActions';
import { users } from '../../constants';
import { IUser } from '../../../src/interfaces/general';
import { IHomePageProps } from '../../../src/interfaces/HomePage';

const render = (users: IUser[]): ReactWrapper => {
    const props: IHomePageProps = { users, actions: usersActions };
    return mount<IHomePageProps>(<HomePage {...props} />);
}

describe('HomePage', () => {
    it('should always render a div containing an h1 and HomeForm', () => {
        const wrapper: ReactWrapper = render(users);
        expect(wrapper.find('h1')).to.have.length(1);
        expect(wrapper.find('form')).to.have.length(1);
    });

    it('should render UsersList when users prop is a non-empty array', () => {
        const wrapper: ReactWrapper = render(users);
        expect(wrapper.find('table')).to.have.length(1);
    });

    it('should not render UsersList when users prop is an empty array', () => {
        const wrapper: ReactWrapper = render([]);
        expect(wrapper.find('table')).to.have.length(0);
    });
});