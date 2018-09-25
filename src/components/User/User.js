import React from "react";

import Button from "../Button/Button.js";
import style from "./User.css";

const User = ({ user }) => (
    <div className={style.User}>
        <h2>{user.name}</h2>
        <p>{user.text}</p>
        <Button/>
    </div>
);

export default User;