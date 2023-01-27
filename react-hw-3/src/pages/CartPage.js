import React, {useContext, useEffect, useState} from 'react';
import {ProductsContext} from "../context/context";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductItem from "../components/ProductItem/ProductItem";

const CartPage = () => {
    const [productsInCart, setProductsInCart] = useState([]);

    const context = useContext(ProductsContext);

    useEffect(() => {
        setProductsInCart(context.products.filter((prod) => context.inCart.includes(prod.id)))
    }, [context])

    return (
        <div>
            <ProductsList>
                {productsInCart.map(product =>
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        article={product.article}
                        color={product.color}
                        isCartPage={true}
                    />)}
            </ProductsList>
        </div>
    );
};

export default CartPage;