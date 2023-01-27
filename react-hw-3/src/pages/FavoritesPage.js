import React, {useContext, useEffect, useState} from 'react';
import {ProductsContext} from "../context/context";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductItem from "../components/ProductItem/ProductItem";

const FavoritesPage = () => {
    const [favProducts, setFavProducts] = useState([]);

    const context = useContext(ProductsContext);

    useEffect(() => {
        setFavProducts(context.products.filter((prod) => context.favorites.includes(prod.id)))
    }, [context])

    return (
        <div>
            <ProductsList>
                {favProducts.map(product =>
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

export default FavoritesPage;