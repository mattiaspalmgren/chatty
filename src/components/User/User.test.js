import React from 'react';
import { shallow } from 'enzyme';
import User from './User.js';

it('render user shallow correctly', () => {
  const user = {
    name: "Alice",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Donec ligula arcu, mollis at consectetur sit amet, porta gravida" +
    " ligula. Aenean pellentesque lobortis urna."
  };
  const component = shallow(<User user={user} />);
  expect(component).toMatchSnapshot();
});