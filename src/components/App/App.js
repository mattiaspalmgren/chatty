import React from "react";
import { hot } from "react-hot-loader";

import style from "./App.css";
import User from "../User/User.js";

const App = ({ user }) => (
    <div className={style.App}>
      <h1>Chatty</h1>
      <User user={user}/>
    </div>
);

export default hot(module)(App);
