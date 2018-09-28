import React from 'react';
import { storiesOf } from '@storybook/react';

import User from './User.js';

const dummyUser = {
    id: "id",
    name: "Alice",
    email: "alice@chatter.com",
    subscriptions: ["channel1", "channel2"]
}

storiesOf('User', module)
  .add('with user', () => <User user={dummyUser}></User>)
