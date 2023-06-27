import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/categoryActions";

const initialState = {
    items: [],
    loading: false,
    error: ''
}
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    exstraReducers: {
        [getProducts.fulfilled.type]: (state, action) => {
            state.items = action.payload
            state.loading = false
            state.error = ''
        },
        [getProducts.pending.type]: (state) => {
            state.loading = true
        }
    }
})
export default productsSlice.reducer