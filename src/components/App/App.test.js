import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('render user shallow correctly', () => {
  const tree = shallow(<App/>);
  expect(tree).toMatchSnapshot();
});
