import React from 'react';
import { storiesOf } from '@storybook/react';
import List from "./List";

const items = [
    {
        id: "id",
        title: "alice",
        fields: ["alice@chatter.com", "engineer"]
    },
    {
        id: "id",
        title: "bob",
        fields: ["bob@chatter.com", "tester"]
    }
];

storiesOf('List', module)
    .add('empty', () => <List items={[]}></List>)
    .add('with items', () => <List items={items}></List>);
