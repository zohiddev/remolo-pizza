import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Axios from '../../api'
import { categoriesListUrl, productsListUrl } from '../../utils/urls'

export const getCategories = createAsyncThunk(
  'categories/getAllCategories',
  async (_, thunkApi) => {
    const response = await Axios.get(categoriesListUrl)

    return response.data
  }
)

export const getProducts = createAsyncThunk(
  'products/getAllProducts',
  async (_, thunkApi) => {
    const response = await Axios.get(productsListUrl)

    return response.data
  }
)

