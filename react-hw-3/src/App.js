import './App.css';
import Header from "./components/Header/Header";
import {Route, Switch, Redirect} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";

function App() {
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
