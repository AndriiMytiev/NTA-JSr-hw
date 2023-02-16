import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
        showModal: false,
        modalElement: {}
    },
    reducers: {
        setShowModal: (state, action) => {
            state.showModal = action.payload;
        },
        setModalElement: (state, action) => {
            state.modalElement = action.payload
        }
    }
})

export default modalSlice.reducer;
export const {setShowModal, setModalElement} = modalSlice.actions;