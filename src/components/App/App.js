import React from "react";
import { hot } from "react-hot-loader";

import gridStyle from "../../common/grid.css";
import style from "./App.css";

import Header from "../Header/Header.js";
import UserContainer from "../../containers/UserContainer";

const App = () => (
    <div className={style.App}>
      <Header/>
      <div className={gridStyle.gridColumns}>
        <UserContainer/>
      </div>
    </div>
)

export default hot(module)(App);