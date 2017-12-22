import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import { HomeForm } from '../../../src/components/home/HomeForm';
import { user } from '../../constants';
import { IHomeFormProps } from '../../../src/interfaces/HomeForm';

let props: IHomeFormProps;
let wrapper: ShallowWrapper<IHomeFormProps>;
let form: any, submitButton: any;

describe('HomeForm', () => {
    beforeEach(() => {
        props = {
            user,
            loading: false,
            onFormSubmit: () => { },
            onInputChange: () => { }
        };
        wrapper = shallow<IHomeFormProps>(<HomeForm {...props} />);
        form = wrapper.find('form');
        submitButton = wrapper.find('[type="submit"]');
    });

    it('should render form with input elements', () => {
        const inputContainer = wrapper.find('.inputContainer');

        expect(form).to.have.length(1);
        expect(inputContainer).to.have.length(2);
        expect(submitButton).to.have.length(1);
    });

    it('should use passed props appropriately', () => {
        const nameInput = wrapper.find('[name="name"]');
        const githubInput = wrapper.find('[name="github"]');
        
        expect(form.props().onSubmit).to.equal(props.onFormSubmit);
        expect(nameInput.props().onChange).to.equal(props.onInputChange);
        expect(nameInput.props().value).to.equal(props.user.name);
        expect(githubInput.props().value).to.equal(props.user.github);
        expect(submitButton.props().disabled).to.equal(props.loading);
    });
});