import React, { Component } from 'react';

import style from "./Button.css";

class Button extends Component {
    render() {
        const { text } = this.props;
        const styleClass = this.props.error ? style.error : style.Button;
        return (
            <button className={styleClass}>
            {text}
            </button>
        );
    }
}

export default Button;