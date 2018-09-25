import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";

const user = {
    name: "Alice",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Donec ligula arcu, mollis at consectetur sit amet, porta gravida" +
    " ligula. Aenean pellentesque lobortis urna."
};

ReactDOM.render(<App user={user} />, document.getElementById("root"));