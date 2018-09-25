import React, { Component } from 'react';

import style from "./Button.css";

class Button extends Component {
    constructor() {
        super();
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
            class: style.Button
        }
    }

    onMouseEnter() {
        this.setState({class: style.hovered})
    }

    onMouseLeave() {
        this.setState({class: style.Button})
    }

    render() {
        return (
            <button
                className={this.state.class}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >Send</button>
        );
    }
}

export default Button;