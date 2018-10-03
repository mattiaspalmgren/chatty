import React, { Component } from 'react';
import Button from '../Button/Button.js';

import type from '../../types/index.js';
import style from './InputForm.css';

const InputForm = ({ inputForm }) => (
    <form className={style.form} onSubmit={inputForm.onSubmit}>
        <h2 className={style.title}>{inputForm.title}</h2>
        {
            inputForm.fields.map(field => (
                <input key={field} className={style.field} type="text" name={field} placeholder={field}/>
            ))
        }
        <Button text="Submit"></Button>
    </form>
);

InputForm.propType = {
    inputForm: type.InputForm
};

export default InputForm;