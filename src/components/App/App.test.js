import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

it('render user shallow correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App/>);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
