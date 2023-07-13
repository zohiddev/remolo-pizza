import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    items: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories: (state, { payload }) => {
            state.items = payload
        },
        removeCategory: (state, { payload }) => {
            state.items = state.items.filter(item => item.id !== payload)
        }
    }
})

export const { setCategories, removeCategory } = categorySlice.actions;

export default categorySlice.reducer