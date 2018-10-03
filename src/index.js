import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App/App.js";
import { users } from "./reducers/index.js"

const store = createStore(users);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
     document.getElementById("root")
);