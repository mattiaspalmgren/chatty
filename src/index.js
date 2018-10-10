import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import users from "./reducers/userReducer.js"
import channels from "./reducers/channelReducer.js"
import apiMiddleware from "./middleware/apiMiddleware";
import loggingMiddleware from "./middleware/loggingMiddleware";
import App from "./components/App/App.js";

const reducer = combineReducers({
    users,
    channels
});
const store = createStore(
    reducer,
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