import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/categoriesSlice'
import productsSlice from './slices/productsSlice'
import cartSlice from './slices/cartSlice'

const reducer = combineReducers({
    categories: categoriesSlice,
    products: productsSlice,
    cart: cartSlice,
})

const store = configureStore({reducer}, applyMiddleware(thunk))

export default store