import React from "react";
import gridStyle from "../../common/grid.css";
import style from "./App.css";
import UserForm from "../../containers/UserForm";
import UserList from "../../containers/UserList";
import ChannelList from "../../containers/ChannelList";
import ChannelForm from "../../containers/ChannelForm";

const App = () => (
    <div className={style.App}>
      <h1>Chatty</h1>
      <div className={gridStyle.gridColumns}>
        <div>
            <UserForm/>
            <UserList/>
        </div>
        <div>
            <ChannelForm/>
            <ChannelList/>
        </div>
      </div>
    </div>
);

export default App;