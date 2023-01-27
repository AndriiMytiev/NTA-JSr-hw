import {createContext, useEffect, useState} from "react";
import data from "../local-json/products.json"

export const ProductsContext = createContext({
    products: [],
    favorites: [],
    inCart: [],

    toggleFavorite: (fav) => {
    },
    addToCart: (prod) => {
    },
    removeFromCart: (prod) => {
    }
});

const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [inCart, setInCart] = useState([]);

    useEffect(() => {
        setProducts(data);

        if (JSON.parse(localStorage.getItem("favorites"))) {
            setFavorites(JSON.parse(localStorage.getItem("favorites")))
        }

        if (JSON.parse(localStorage.getItem("in cart"))) {
            setInCart(JSON.parse(localStorage.getItem("in cart")))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
        localStorage.setItem("in cart", JSON.stringify(inCart));
    }, [favorites, inCart])

    const addToFav = fav => setFavorites(prev => prev.concat(fav));

    const removeFromFav = fav => setFavorites(prev => prev.filter((item) => item !== fav));

    const toggleFavorite = fav => favorites.includes(fav) ? removeFromFav(fav) : addToFav(fav);

    const addToCart = prod => setInCart(prev => prev.concat(prod));

    const removeFromCart = prod => setInCart(prev => prev.filter((item) => item !== prod));

    return (
        <ProductsContext.Provider
            value={{products, favorites, inCart, toggleFavorite, addToCart, removeFromCart}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;