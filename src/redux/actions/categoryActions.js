import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Axios from '../../api'
import { categoriesListUrl, login, productsListUrl } from '../../utils/urls'

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

export const loginRequest = createAsyncThunk(
  'user/login',
  async (_, thunkApi) => {
    const response = await axios.post(
      'https://pizzaremolo.pythonanywhere.com/admin/auth/user/',
      { username: 'admin', password: 'admin' }
    )

    console.log(response)
  }
)
