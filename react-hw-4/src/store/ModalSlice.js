import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
        showModal: false,
        modalId: 0,
    },
    reducers: {
        toggleModal: (state) => {
            state.showModal = !state.showModal;
        },
        setModalId: (state, action) => {
            state.modalId = action.payload;
        }
    }
})

export default modalSlice.reducer;
export const {toggleModal, setModalId} = modalSlice.actions;
