import React from 'react';
import styles from "./Modal.module.scss";

const Modal = ({closeModal, header, text, closeButton, actions}) => {
    return (
        <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modal__container} onClick={e => e.stopPropagation()}>
                <h1 className={styles.header}>{header}</h1>
                <p className={styles.text}>{text}</p>
                {closeButton && <button className={styles.close_button} onClick={closeModal}>X</button>}
                {actions}
            </div>
        </div>
    );
};

export default Modal;