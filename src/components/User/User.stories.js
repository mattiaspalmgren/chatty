import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import User from './User.js';

const eventsFromObject = actions({ onMouseOver: 'hovered' });

const user = {
    name: "Alice",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Donec ligula arcu, mollis at consectetur sit amet, porta gravida" +
    " ligula. Aenean pellentesque lobortis urna."
};

storiesOf('User', module)
  .add('with text', () => <User user={user}></User>)
