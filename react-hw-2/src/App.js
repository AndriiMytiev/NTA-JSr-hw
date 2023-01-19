import './App.css';
import {useEffect, useState} from "react";
import data from "./local-json/products.json"
import ProductsList from "./components/ProductsList";
import ProductItem from "./components/ProductItem";

function App() {
    const [products, setProducts] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [inCart, setInCart] = useState([]);

    useEffect(() => {
        setProducts(data);

        if(JSON.parse(localStorage.getItem("favorites")) !== null) {
            setFavorites(JSON.parse(localStorage.getItem("favorites")))
        }

        if(JSON.parse(localStorage.getItem("in cart")) !== null) {
            setInCart(JSON.parse(localStorage.getItem("in cart")))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
        localStorage.setItem("in cart", JSON.stringify(inCart));
    }, [favorites, inCart])

    const addToCart = prod => setInCart(prev => prev.concat(prod));

    const addToFav = fav => setFavorites(prev => prev.concat(fav));

    const removeFromFav = fav => setFavorites(prev => prev.filter((item) => item !== fav));

    const toggle = fav => favorites.includes(fav) ? removeFromFav(fav) : addToFav(fav);

    const isInclude = id => favorites.includes(id);

    return (
        <div className="App">
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
                        toggle={toggle}
                        isInclude={isInclude}
                        addToCart={addToCart}
                    />)}
            </ProductsList>
        </div>
    );
}

export default App;
