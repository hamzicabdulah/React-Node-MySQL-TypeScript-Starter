import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from '../../../src/components/header/Header';

describe('Header', () => {
    it('should render a list with two links', () => {
        const wrapper: ShallowWrapper = shallow(<Header />);
        expect(wrapper.find('ul')).to.have.length(1);
        expect(wrapper.find('li')).to.have.length(2);
    });
});