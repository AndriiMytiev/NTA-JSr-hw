import React from 'react';
import styles from "./Modal.module.scss";
import {setShowModal} from "../../store/ModalSlice";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../store/CartSlice";

const Modal = ({addModal}) => {
    const product = useSelector(state => state.modal.modalElement);
    const dispatch = useDispatch();

    return (
        <div className={styles.modal} onClick={() => dispatch(setShowModal(false))}>
            <div className={styles.modal__container} onClick={e => e.stopPropagation()}>
                <h2>Do you want to {addModal ? 'add ' : 'remove '}
                    <span>{product.name} {product.color}</span> {addModal ? 'to' : 'from'} the cart?</h2>
                <img src={product.image} alt={product.name}/>
                <h3>Price: {product.price}</h3>
                <div className={styles.buttons__box}>
                    <button className={styles.addToCard} onClick={() => {
                        dispatch(setShowModal(false))
                        addModal ? dispatch(addToCart(product)) : dispatch(removeFromCart(product.id));
                    }}>{addModal ? 'Add to cart' : 'Remove'}
                    </button>
                    <button className={styles.cancel} onClick={() => dispatch(setShowModal(false))}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;