import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const inCart = state.cart.find((item) => item.id === action.payload.id);
            if (!inCart) {
                state.cart.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        fetchCartData: (state, action) => {
            state.cart = action.payload;
        }
    }
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart, fetchCartData} = cartSlice.actions;