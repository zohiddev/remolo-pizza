import axios from "axios"

import { createAsyncThunk } from "@reduxjs/toolkit"
import Axios from "../../api";
import { categoriesAddUrl, categoriesEditUrl, categoriesListUrl, categoriesDeleteUrl, productsListUrl } from "../../utils/urls";


// export const getCategories = async (dispatch) => {  
//     try {
//         const response = await axios.get('https://pizzaremolo.pythonanywhere.com/api/category/all')
        
//         dispatch(setCategories(response.data))
//     } catch (error) {
        
//     }
// }


export const getCategories = createAsyncThunk('categories/getAllCategories', async (_, thunkApi) => {
    const response = await Axios.get(categoriesListUrl)


    return response.data
});

export const getProducts = createAsyncThunk('products/getAllProducts', async (_, thunkApi) => {
    const response = await Axios.get(productsListUrl)


    return response.data
});

export const addCategory = async (data) => {
    try {
        const response = await Axios.put(categoriesAddUrl, data)
        return response.data
    } catch (error) {
        return error
    }
}


export const editCategory = async (data, id) => {
    try {
        const response = await Axios.put(categoriesEditUrl(id), data)
        return response.data
    } catch (error) {
        return error
    }
}


export const deleteCategory = async (id) => {
    try {
        const response = await Axios.delete(categoriesDeleteUrl(id))
        return response.status
    } catch (error) {
        return error
    }
}



