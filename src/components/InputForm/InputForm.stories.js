import React from 'react';
import { storiesOf } from '@storybook/react';

import InputForm from './InputForm.js';

const dummyInputFormUser = {
  title: "Add user",
  fields: ["name", "email"],
  onSubmit: () => console.log("submit")
}

const dummyInputFormChannel = {
  title: "Add channel",
  fields: ["name"],
  onSubmit: () => console.log("submit")
}

storiesOf('InputForm', module)
  .add('user input', () => <InputForm inputForm={dummyInputFormUser}></InputForm>)
  .add('channel input', () => <InputForm inputForm={dummyInputFormChannel}></InputForm>)
