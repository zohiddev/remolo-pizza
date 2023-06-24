import { categoriesData } from "../data/categories";
import products from '../data/products.json'
import CartReducer from "./reducers/cardReducer";
import CategoriesReducer from "./reducers/categoriesReducer";
import ProductsReducer from "./reducers/productsReducer";


export const store = {

    __state: {
        categories: {
            activeCategory: 'Pizza',
            items: categoriesData,
        },
        products: {
            items: products,
        },
        cart: {
            items: []
        }
    },

    getState: () => store.__state,

    dispatch: (action) => {

        store.__state.categories = CategoriesReducer(store.__state.categories, action)

        store.__state.products = ProductsReducer(store.__state.products, action)

        store.__state.cart = CartReducer(store.__state.cart, action)

        store.render()
    },

    subscribe: (callback) => {
        store.render = callback
    },
}
