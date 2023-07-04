import { categoriesData } from "../data/categories";
import products from "../data/products.json";
import CartReducer from "./reducers/cartReducer";
import CategoriesReducer from "./reducers/catgoriesReducer";
import ProductsReducer from "./reducers/productsReducer";

export const store = {
  _state: {
    categories: {
      activeCategory: "Pizza",
      items: categoriesData,
    },
    products: {
      items: products,
    },
    cart: {
      items: [],
    },
  },

  render: () => {
    console.log("hello");
  },

  getState: () => store._state,

  dispatch: (action) => {
    store._state.categories = CategoriesReducer(
      store._state.categories,
      action
    );
    store._state.products = ProductsReducer (store._state.products, action);
    store._state.cart = CartReducer(store._state.cart, action);

    store.render();
  },
  subscribe: (callback) => {
    store.render = callback;
  },
};
