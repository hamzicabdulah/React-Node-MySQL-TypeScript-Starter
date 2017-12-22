import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import { AboutPage } from '../../../src/components/about/AboutPage';

describe('AboutPage', () => {
    it('should render a div with an h1 and a p tag', () => {
        const wrapper: ShallowWrapper = shallow(<AboutPage />);
        expect(wrapper.find('div')).to.have.length(1);
        expect(wrapper.find('h1')).to.have.length(1);
        expect(wrapper.find('h1').text()).to.equal('About');
        expect(wrapper.find('p')).to.have.length(1);
    });
});