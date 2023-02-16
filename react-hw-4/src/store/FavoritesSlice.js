import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favoritesSlice',
    initialState: {
        favorites: []
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const inFav = state.favorites.find((item) => item.id === action.payload.id);

            if (inFav) {
                state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id);
            } else {
                state.favorites = state.favorites.concat(action.payload);
            }
        },
        fetchFavData: (state, action) => {
            state.favorites = action.payload;
        }
    }
})

export default favoritesSlice.reducer;
export const {toggleFavorite, fetchFavData} = favoritesSlice.actions;