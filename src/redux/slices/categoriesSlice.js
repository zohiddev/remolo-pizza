import { createSlice } from "@reduxjs/toolkit";
import { categoriesData } from "../../data/categories";
import { getCategories } from "../actions/categoryActions";

const initialState = {
        activeCategory: 1,
        items: categoriesData,
        loading: false,
        error: '',
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
        },

    },

    extraReducers:{
        [getCategories.fulfilled.type]: (state, action) => {
            state.items = action.payload
            state.loading = false
            state.error = ''
        },
        [getCategories.pending.type]: (state)  => {
            state.loading = true
        }
    }
})

export const {setActiveCategory, setCategories} = categoriesSlice.actions

export default categoriesSlice.reducer