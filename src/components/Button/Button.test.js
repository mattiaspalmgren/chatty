import React from "react";
import { shallow } from 'enzyme';
import Button from "./Button.js";

test("Button changes class when hovered", () => {
    const component = shallow(<Button/>);
    expect(component).toMatchSnapshot();
})