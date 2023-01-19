import React from 'react';
import style from "./Button.module.scss"
const Button = ({backgroundColor, text, onClick}) => {
    return (
        <button className={style.open_modal} style={{
            backgroundColor: backgroundColor,
        }} onClick={onClick}>{text}</button>
    );
};

export default Button;