import React from 'react';

import style from "./Button.css";

const getText = (props) => {
    const { text, error, loading } = props;
    if (error) {
        return 'Error';
    } else if (loading) {
        return 'Loading...';
    }
    return text;
};

const getStyle = (props) => {
    const { error, loading } = props;
    const errorStyle = error ? style.error : '';
    const loadingStyle = loading ? style.loading : '';
    return `${style.Button} ${errorStyle} ${loadingStyle}`;
};

const Button = (props) => {
    return (
        <button className={getStyle(props)}>
            {getText(props)}
        </button>
    );
};

export default Button;