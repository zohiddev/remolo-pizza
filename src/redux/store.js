import { categories } from "../helpers/categories";
import { products } from "../helpers/products";

export const store  = {
    _state: {
        categories: {
            activeCategory: "Pizza",
            items: categories
        },
        product: {
            items: products
        }
    },
    render: () => {
        console.log("Hello");
    },
    
    getState: () => store._state,
    setActiveCategory: (categoryName) => {
        store._state.categories.activeCategory = categoryName;
        store.render()
    },
    subscribe: (callback) => {
        store.render = callback
    }
}