import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";

const user = {
    id: "id",
    name: "Alice",
    email: "alice@chatter.com",
    subscriptions: ["channel1", "channel2"]
}

ReactDOM.render(<App user={user} />, document.getElementById("root"));