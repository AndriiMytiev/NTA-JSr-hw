import React from 'react';
import styles from "./Modal.module.scss";

const Modal = ({closeModal, id, name, color, image, price, addToCart}) => {
    return (
        <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modal__container} onClick={e => e.stopPropagation()}>
                <h2>Do you want to add <span>{name} {color}</span> to the cart?</h2>
                <img src={image} alt={name}/>
                <h3>Price: {price}</h3>
                <div className={styles.buttons__box}>
                    <button className={styles.addToCard} onClick={() => {
                        closeModal();
                        addToCart(id);
                    }}>Add to cart
                    </button>

                    <button className={styles.cancel} onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
