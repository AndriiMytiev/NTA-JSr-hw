import React, {useContext, useEffect, useState} from 'react';
import styles from "./ProductItem.module.scss"
import {ProductsContext} from "../../context/context";
import Modal from "../Modal/Modal";

const ProductItem = ({id, name, price, image, article, color, isCartPage}) => {
    const [isFav, setIsFav] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const context = useContext(ProductsContext);

    const closeModal = () => setShowModal(false);

    useEffect(() => {
        setIsFav(context.favorites.includes(id))
    }, [context, id])

    return (
        <li id={id} className={styles.productItem}>
            <div className={styles.productItem__image}>
                <img src={image} alt={name}/>
            </div>
            <div className={styles.productItem__container}>
                <h3>{name}</h3>
                <h3>{color}</h3>
                <h4>{price}</h4>
                <h5>{article}</h5>
                {!isCartPage &&
                    <div>
                        <button className={styles.addToCart} onClick={() => setShowModal(true)}>Add to cart</button>
                        <button className={styles.addToFavorite} onClick={() => context.toggleFavorite(id)}
                                style={{backgroundColor: isFav ? "#f8f805" : "white"}}></button>
                    </div>
                }
                {isCartPage &&
                    <button className={styles.deleteFromCart} onClick={() => setShowModal(true)}>X</button>
                }

            </div>
            {showModal && <Modal closeModal={closeModal}
                                 id={id}
                                 name={name}
                                 color={color}
                                 image={image}
                                 price={price}
                                 addModal={!isCartPage}
            />}
        </li>
    );
};

export default ProductItem;