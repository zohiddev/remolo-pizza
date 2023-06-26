import { createSlice } from "@reduxjs/toolkit";
import { categoriesData } from "../../data/categories";
const initialState ={
 activeCategory: 'Pizza',
 items: categoriesData,   
}


const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setActiveCategory: (state, action) =>{
            state.activeCategory = action.payload 
        }
    }
})
export default categoriesSlice.reducer
export const {setActiveCategory} = categoriesSlice.actions