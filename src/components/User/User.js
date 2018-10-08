import React from "react";

import { UserType } from "../../types/UserType.js";
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
    user: UserType.isRequired
};

export default User;