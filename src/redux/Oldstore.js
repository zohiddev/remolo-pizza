import { render } from "react-dom";
import { categoriesData } from "../data/categories";
import products from '../data/products.json'
import CategoriesReducer from "./reducers/categoriesReducer";
import ProductsReducer from "./reducers/productsReducer";
import CartReducer from "./reducers/cartReducer";

export const store = {
    _state: {
        categories: {
            activeCategory: 'Pizza',
            items: categoriesData,
        },
        products: {
            items: products,
        },

        cart:{
            items: []
        }
    },


    render : () => {
        console.log('hello');
    },

    getState: () => store._state,

    dispatch: (action) => {
        // const {type, payload} = action;
        // if(type === "setActiveCategory") {
        //     store._state.categories.activeCategory = payload.categoryName;
        // }else if(type === "setCart") {
        //     store._state.cart.items = [...store._state.cart.items, payload.product];
        // }else if(type === "deleteCart") {
        //     store._state.cart.items = store._state.cart.items.filter(item => item.id !== payload.id);
        // }
        // else if(type === "removeCart") {
        //     store._state.cart.items = [];
        // }

        store._state.categories = CategoriesReducer(store._state.categories, action);

        store._state.products = ProductsReducer(store._state.products, action);

        store._state.cart = CartReducer(store._state.cart, action);

        store.render();
    },

    


    
    // setActiveCategory: (categoryName) => {
    //     store._state.categories.activeCategory = categoryName;
    //     store.render();

    // },

    // setCart: (product) => {
    //     store._state.cart.items = [...store._state.cart.items, product];
    //     store.render();
    // },

    // deleteCart: (id) => {
    //     store._state.cart.items = store._state.cart.items.filter(item => item.id !==id)
    //     store.render();
    // },

    // removeCart: (product) => {
    //      store._state.cart.items = [...store._state.cart.items, product];
    //       store.render();
    // },

    subscribe: (callback) => {
        store.render = callback;
    }

};