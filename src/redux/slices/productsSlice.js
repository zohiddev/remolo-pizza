import { createSlice } from '@reduxjs/toolkit'
import products from '../../data/products.json'
import { getProducts } from '../actions/categoryActions'
import { addProduct } from '../actions/productsActions'

const initialState = {
  items: [],
  loading: false,
  error: '',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled.type]: (state, action) => {
      state.items = action.payload
      state.loading = false
      state.error = ''
    },
    [getProducts.pending.type]: (state) => {
      state.loading = true
    },
  },
})

export default productsSlice.reducer
