import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.js';

describe('Form', () => {
    const FormProps = {
        title: 'Test',
        fields: ['Test1', 'Test1'],
        submitText: 'text',
        onSubmit: jest.fn()
    };
    it('should match its snapshot', () => {
        const component = shallow(<Form {...FormProps}/>);
        expect(component).toMatchSnapshot();
    });
    it('should submit', () => {
        const component = shallow(<Form {...FormProps}/>);
        const preventDefault = jest.fn();
        const reset = jest.fn();
        component.find('form').simulate('submit', { preventDefault, target: { reset: reset } });
        expect(FormProps.onSubmit).toBeCalled();
        expect(preventDefault).toBeCalled();
        expect(reset).toBeCalled();
    });
});
