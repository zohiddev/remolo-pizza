import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.items = payload
        },
        removeProduct: (state, { payload }) => {
            state.items = state.items.filter(item => item.id !== payload)
        }
    }
})

export const { setProducts, removeProduct } = productSlice.actions;

export default productSlice.reducer