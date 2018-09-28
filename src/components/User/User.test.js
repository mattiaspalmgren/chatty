import React from 'react';
import { shallow } from 'enzyme';
import User from './User.js';

import state from '../../state.js';

it('render user shallow correctly', () => {
  const component = shallow(<User user={state.users[0]} />);
  expect(component).toMatchSnapshot();
});