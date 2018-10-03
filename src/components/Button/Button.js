import React, { Component } from 'react';

import style from "./Button.css";

const Button = ({ text, error }) => {
    const styleClass = error ? style.error : style.Button;
    return (
        <button className={styleClass}>
        {text}
        </button>
    );
}

export default Button;