import React from 'react';
import styles from './ProductsList.module.scss';

const ProductsList = ({children}) => {
    return (
        <div className={styles.productList}>
            <ul>
                {children}
            </ul>
        </div>
    );
};

export default ProductsList;