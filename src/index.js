import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";

const user = {
    id: "id",
    name: "Alice",
    email: "alice@chatter.com",
    subscriptions: ["channel1", "channel2"]
}

const channel = {
    id: "id",
    name: "Official",
    subscribers: ["user1", "user2"]
}

ReactDOM.render(<App user={user} channel={channel} />, document.getElementById("root"));