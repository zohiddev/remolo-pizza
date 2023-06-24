import { Layout } from "./components";
import { Cart } from "./components/cart";
import { StoreContext } from "./context/storeContext";
import { HomePage } from "./pages/home";
import { useContext, useState } from "react";

function App() {
  const [categories, setCategories] = useState([])
  return (
    <>
      <Layout />
      <div id="main-content__row">
        <HomePage  />
        <Cart  />
      </div>
    </>
  );
}

export default App;
