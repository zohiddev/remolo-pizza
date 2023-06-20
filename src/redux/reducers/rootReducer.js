import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { layoutReducer } from './layoutReducer';
import { categoryReducer } from './categoryReducer';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
    products: productReducer,
    categories: categoryReducer,
    layout: layoutReducer,
    cart: cartReducer
})