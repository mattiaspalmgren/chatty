import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App/App.js";
import state from "./state.js";

ReactDOM.render(<App state={state}/>, document.getElementById("root"));