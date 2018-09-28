import React from 'react';
import { storiesOf } from '@storybook/react';

import Channel from './Channel.js';

const dummyChannel = {
    id: "id",
    name: "Official",
    subscribers: ["user1", "user2"]
}

storiesOf('Channel', module)
  .add('with channel', () => <Channel channel={dummyChannel}></Channel>)