import React, {useContext} from 'react';
import styles from "./Modal.module.scss";
import {ProductsContext} from "../../context/context";

const Modal = ({closeModal, id, name, color, image, price, addModal}) => {
    const context = useContext(ProductsContext);

    return (
        <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modal__container} onClick={e => e.stopPropagation()}>
                <h2>Do you want to {addModal ? 'add ' : 'remove '}
                    <span>{name} {color}</span> {addModal ? 'to' : 'from'} the cart?</h2>
                <img src={image} alt={name}/>
                <h3>Price: {price}</h3>
                <div className={styles.buttons__box}>
                    <button className={styles.addToCard} onClick={() => {
                        closeModal();
                        addModal ? context.addToCart(id) : context.removeFromCart(id);
                    }}>{addModal ? 'Add to cart' : 'Remove'}
                    </button>
                    <button className={styles.cancel} onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;