import { categoriesData } from "../data/categories";
import products from "../data/products.json"
import CartReducers from "./reducers/cardReducers";
import CategoriesReducers from "./reducers/categoriesReducers";
import ProductReducers from "./reducers/productReducers";


export const store = {
    _state: {
        categories: {
            activeCategory: "Pizza",
            items: categoriesData,
        },
        products: {
            items: products
        },
        cart: {
            items: [],
        },
    },

    render: () => { console.log('hello') },

    getState: () => store._state,

    dispatch: (action) => {
        store._state.categories = CategoriesReducers(store._state.categories,action)
        store._state.products = ProductReducers(store._state.products, action)
        store._state.cart = CartReducers(store._state.cart, action)
        store.render()
    },

    subscribe: (collback) => {
        store.render = collback
    }
}