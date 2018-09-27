import React, { Component } from 'react';
import Button from '../Button/Button.js';

import style from './InputForm.css';

class InputForm extends Component {
    render() {
        return (
            <div>
                <form className={style.form}>
                    <input className={style.field} type="text" name="name" placeholder="name"></input>
                    <input className={style.field} type="text" name="email" placeholder="email"></input>
                    <Button text="Submit"></Button>
                </form>
            </div>
        );
    }
}

export default InputForm;