import React, { Component} from "react";
import { hot } from "react-hot-loader";

import style from "./App.css";
import User from "../User/User.js";

class App extends Component{
  render(){
    return(
      <div className={style.App}>
        <h1>Chatty</h1>
        <User/>
      </div>
    );
  }
}

export default hot(module)(App);
