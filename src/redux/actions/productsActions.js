import { createAsyncThunk } from '@reduxjs/toolkit'
import Axios from '../../api'
import { productsAddUrl, productsEditUrl } from '../../utils/urls'

// export const addProduct = createAsyncThunk(
//   'products/add',
//   async (data, thunkApi) => {
//     try {
//       const response = await Axios.put(productsAddUrl, data)
//       console.log(response)
//       return response.data
//     } catch (error) {
//       return error
//     }
//   }
// )

export const addProduct = async (data) => {
  try {
    const response = await Axios.put(productsAddUrl, data)
    return response.data
  } catch (error) {
    return error
  }
}

export const editProduct = async (data, id) => {
    try {
      const response = await Axios.put(productsEditUrl(id), data)
      return response.data
    } catch (error) {
      return error
    }
  }
