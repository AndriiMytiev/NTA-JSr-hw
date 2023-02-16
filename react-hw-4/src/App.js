import './App.css';
import {useEffect} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header/Header";
import ProductsPage from "./pages/ProductsPage";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";
import data from './constants/products.json'
import {fetchProdData} from './store/ProductsSlice'
import {fetchFavData} from './store/FavoritesSlice'
import {fetchCartData} from './store/CartSlice'

function App() {
    const favorites = useSelector(state => state.favorites.favorites);
    const inCart = useSelector(state => state.cart.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProdData(data));

        if (JSON.parse(localStorage.getItem("favorites"))) {
            dispatch(fetchFavData(JSON.parse(localStorage.getItem("favorites"))))
        }

        if (JSON.parse(localStorage.getItem("in cart"))) {
            dispatch(fetchCartData(JSON.parse(localStorage.getItem("in cart"))))
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
        localStorage.setItem("in cart", JSON.stringify(inCart));
    }, [favorites, inCart])

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path='/' exact>
                    <ProductsPage/>
                </Route>

                <Route path='/favorites'>
                    <FavoritesPage/>
                </Route>

                <Route path='/cart'>
                    <CartPage/>
                </Route>

                <Route path='*'>
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
