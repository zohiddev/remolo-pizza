import { combineReducers, createStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice'
import cartSlice from './slices/cartSlice'
import categoriesSlice from './slices/categoriesSlice'

const reducers = combineReducers({
    categories: categoriesSlice,
    products: productsSlice,
    cart: cartSlice,
})

const store = createStore(reducers)

export default store