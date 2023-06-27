import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../actions/categoryActions";

const initialState = {
    activeCategory: 1,
    items: [],
    loading: false,
    erroe: ''
}


const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        },
        setcategories: (state, action) => {
            state.items = action.payload
        },
        extraReduser: {
            [getCategories.fulfilled.type]: (state, action) => {
                state.items = action.payload
                state.loading = false
            },
            [getCategories.pending.type]: (state) => {
                state.loading = true
            },
        },
    }
})
export default categoriesSlice.reducer
export const { setActiveCategory, setcategories } = categoriesSlice.actions