import { render } from "react-dom";
import { categoriesData } from "../data/categories";
import products from "../data/products.json"

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
        const { type, payload } = action;
        if (type = "setActiveCategory") {
            store._state.categories.activeCategory = payload.categoryName;
        } else if (type = "setCart") {
            store._state.cart.items = [...store._state.cart.items, payload.product]
        } else if (type = "deleteCart") {
            store._state.cart.items = store._state.cart.items.filter(
                (item) => item.id !== payload.id
            )
        }
    },

    // setActiveCategory: (categoryName) => {
    //     store._state.categories.activeCategory = categoryName;
    //     store.render()
    // },

    // setCart: (product) => {
    //     store._state.cart.items = [...store._state.cart.items, product]
    //     store.render()
    // },

    // deleteCart: (id) => {
    //     store._state.cart.items = store._state.cart.items.filter(
    //         (item) => item.id !== id
    //     )
    //     store.render()
    // },

    subscribe: (collback) => {
        store.render = collback
    }
}