import React, {useContext, useEffect, useState} from 'react';
import ProductsList from "../components/ProductsList/ProductsList";
import {ProductsContext} from "../context/context";
import ProductItem from "../components/ProductItem/ProductItem";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    const context = useContext(ProductsContext);

    useEffect(() => {
        setProducts(context.products);
    }, [context.products])

    return (
        <div>
            <ProductsList>
                {products.map(product =>
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        article={product.article}
                        color={product.color}
                    />)}
            </ProductsList>
        </div>
    );
};

export default ProductsPage;