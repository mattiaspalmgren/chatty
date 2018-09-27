import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import InputForm from './InputForm.js';

const eventsFromObject = actions({ onMouseOver: 'hovered' });

storiesOf('InputForm', module)
  .add('inital state', () => <InputForm></InputForm>)
