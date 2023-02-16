import React, {useEffect, useState} from 'react';
import styles from "./ProductItem.module.scss"
import Modal from "../Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setShowModal, setModalElement} from "../../store/ModalSlice";
import {toggleFavorite} from "../../store/FavoritesSlice";

const ProductItem = ({product, isCartPage}) => {
    const [isFav, setIsFav] = useState(false);

    const favorites = useSelector(state => state.favorites.favorites);
    const showModal = useSelector(state => state.modal.showModal);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(product)
        setIsFav(favorites.find((item) => item.id === product.id))
    }, [favorites, product.id])

    return (
        <li id={product.id} className={styles.productItem}>
            <div className={styles.productItem__image}>
                <img src={product.image} alt={product.name}/>
            </div>
            <div className={styles.productItem__container}>
                <h3>{product.name}</h3>
                <h3>{product.color}</h3>
                <h4>{product.price}</h4>
                <h5>{product.article}</h5>
                {!isCartPage &&
                    <div>
                        <button className={styles.addToCart} onClick={() => {
                            dispatch(setShowModal(true));
                            dispatch(setModalElement(product));
                        }}>
                            Add to cart
                        </button>
                        <button className={styles.addToFavorite} onClick={() => dispatch(toggleFavorite(product))}
                                style={{backgroundColor: isFav ? "#f8f805" : "white"}}></button>
                    </div>
                }
                {isCartPage &&
                    <button className={styles.deleteFromCart} onClick={() => {
                        dispatch(setShowModal(true));
                        dispatch(setModalElement(product));
                    }}>X</button>
                }

            </div>
            {showModal && <Modal addModal={!isCartPage}/>}
        </li>
    );
};

export default ProductItem;