import React, { Component } from 'react';
import Button from '../Button/Button.js';

import type from '../../types/index.js';
import style from './InputForm.css';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit(this.state);
        e.target.reset();

    }

    render() {
        const { title, fields } = this.props;
        return (
            <form className={style.form} onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <h2 className={style.title}>{title}</h2>
                {
                    fields.map(field =>
                        <input key={field} className={style.field} type="text" name={field} placeholder={field}/>
                    )
                }
                <Button text="Submit"></Button>
            </form>
        );
    }
}

InputForm.propType = {
    inputForm: type.InputForm
};

export default InputForm;