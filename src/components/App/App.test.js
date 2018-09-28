import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import state from '../../state.js';

it('render user shallow correctly', () => {
  const tree = shallow(<App state={state} />);
  expect(tree).toMatchSnapshot();
});
