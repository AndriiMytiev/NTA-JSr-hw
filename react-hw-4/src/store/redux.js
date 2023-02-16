import {configureStore} from "@reduxjs/toolkit";
import ProductsSLice from "./ProductsSlice";
import FavoritesSlice from './FavoritesSlice';
import CartSlice from './CartSlice';
import ModalSlice from './ModalSlice'


export const store = configureStore({
    reducer: {
        products: ProductsSLice,
        favorites: FavoritesSlice,
        cart: CartSlice,
        modal: ModalSlice
    }
});
