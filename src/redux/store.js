import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import layoutSlice from './slices/layoutSlice';
import categorySlice from './slices/categorySlice';
import cartSlice from './slices/cartSlice';
import userSlice from "./slices/userSlice";
import authSlice from './slices/authSlice'

const store = configureStore({
    reducer: {
        products: productSlice,
        layout: layoutSlice,
        category: categorySlice,
        cart: cartSlice,
        user: userSlice,
        auth: authSlice
    }
})

export default store;