import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import Button from './Button.js';

const eventsFromObject = actions({ onMouseOver: 'hovered' });

storiesOf('Button', module)
  .add('with text', () => <Button text={"Hello"}></Button>)
