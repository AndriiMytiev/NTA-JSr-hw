import React, {useEffect, useState} from 'react';
import styles from "./ProductItem.module.scss"
import Modal from "./Modal";

const ProductItem = ({id, name, price, image, article, color, toggle, isInclude, addToCart}) => {
    const [isFav, setIsFav] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    useEffect(() => {
        setIsFav(isInclude(id))
    }, [isInclude, id])

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
                <button className={styles.addToCart} onClick={() => setShowModal(true)}>Add to cart</button>
                <button className={styles.addToFavorite} onClick={() => toggle(id)}
                        style={{backgroundColor: isFav ? "#f8f805" : "white"}}></button>
            </div>
            {showModal && <Modal closeModal={closeModal}
                                 id={id}
                                 name={name}
                                 color={color}
                                 image={image}
                                 price={price}
                                 addToCart={addToCart}/>}
        </li>
    );
};

export default ProductItem;