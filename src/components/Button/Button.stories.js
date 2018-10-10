import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button.js';

storiesOf('Button', module)
  .add('with text', () => <Button text={"Hello"}></Button>)
  .add('with error', () => <Button error={true} text={"Error"}></Button>)
  .add('loading', () => <Button loading={true} text={"Loading..."}></Button>);
