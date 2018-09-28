import React from "react";

import types from "../../types/index.js";
import style from "./User.css";

const User = ({ user }) => {
    return (
        <div className={style.User}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
};

User.propTypes = {
    user: types.UserType.isRequired
};

export default User;