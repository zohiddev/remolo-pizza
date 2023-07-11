import { applyMiddleware, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/categoriesSlice'
import productsSlice from './slices/productsSlice'
import cartSlice from './slices/cartSlice'
import userSlice from './slices/userSlice'
import settingsSlice from './slices/settingsSlice'
import authSlice from './slices/authSlice'

const reducer = combineReducers({
  categories: categoriesSlice,
  products: productsSlice,
  cart: cartSlice,
  user: userSlice,
  settings: settingsSlice,
  auth: authSlice,

})

const store = configureStore({ reducer })

export default store
