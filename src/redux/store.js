import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice'
import cartSlice from './slices/cartSlice'
import categoriesSlice from './slices/categoriesSlice'

const reducer = combineReducers({
    categories: categoriesSlice,
    products: productsSlice,
    cart: cartSlice,
})

const store = configureStore({reducer}, applyMiddleware(thunk))

export default store