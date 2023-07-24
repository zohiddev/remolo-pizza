import {combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './slices/categoriesSlice';
import productsSlice from './slices/productsSlice';
import cartSlice from './slices/cartSlice';
import userSlice from './slices/userSlice';
import settingSlice from './slices/settingSlice';
import authSlice from './slices/authSlice';

const reducer = combineReducers({
    categories: categoriesSlice,
    products: productsSlice,
    cart: cartSlice,
    user: userSlice,
    setting: settingSlice,
    auth: authSlice,
});

const store = configureStore({reducer});


export  default store;