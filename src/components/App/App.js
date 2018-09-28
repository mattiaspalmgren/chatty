import React from "react";
import { hot } from "react-hot-loader";

import style from "./App.css";
import gridStyle from "../../common/grid.css";
import InputForm from "../InputForm/InputForm.js";

const App = ({ user }) => (
    <div className={`${style.App} ${gridStyle.grid}`}>
      <InputForm />
      <InputForm />
    </div>
);

export default hot(module)(App);
