import { Layout } from "./components";
import { Cart } from "./components/cart";
import { HomePage } from "./pages/home";
import cartProductsData from "./data/productsCart.json";
import { faker } from "@faker-js/faker"
import { useEffect, useState } from "react";
import axios from "axios"

function App({ store }) {
  const [categories, setCategories] = useState([])
  const { cart } = store.getState()

  return (
    <>
      <Layout />
      <div id="main-content__row">
        <HomePage store={store}/>
        <Cart store={store} cartProductsData={cart.items} />
      </div>
    </>
  );
}

export default App;
