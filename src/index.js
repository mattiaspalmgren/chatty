import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import users from "./reducers/userReducer.js"
import apiMiddleware from "./middleware/apiMiddleware";
import loggingMiddleware from "./middleware/loggingMiddleware";
import App from "./components/App/App.js";

const store = createStore(
    users,
    applyMiddleware(
        apiMiddleware,
        loggingMiddleware
    )
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
     document.getElementById("root")
);