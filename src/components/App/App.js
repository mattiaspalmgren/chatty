import React from "react";
import { hot } from "react-hot-loader";

import style from "./App.css";
import gridStyle from "../../common/grid.css";

import InputForm from "../InputForm/InputForm.js";
import Header from "../Header/Header.js";
import User from "../User/User.js";
import Channel from "../Channel/Channel.js";

const App = ({ state: { channels, users, channelInputForm, userInputForm }}) => (
    <div className={style.App}>
      <Header />
      <div className={gridStyle.gridColumns}>
        <div>
          <InputForm inputForm={userInputForm} />
          {
            users.map(user => (
              <User key={user.id} user={user}></User>
            ))
          }
        </div>
        <div>
          <InputForm inputForm={channelInputForm} />
          {
            channels.map(channel => (
              <Channel key={channel.id} channel={channel}></Channel>
            ))
          }
        </div>
      </div>
    </div>
);

export default hot(module)(App);
