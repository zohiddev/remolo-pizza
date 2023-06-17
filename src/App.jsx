import { Layout } from "./components";
import { Cart } from "./components/cart";
import { HomePage } from "./pages/home";
import cartProductsData from "./data/productsCart.json";

function App() {
  return (
    <>
      <Layout />
      <div id="main-content__row">
        <HomePage />
        <Cart cartProductsData={cartProductsData} />
      </div>
    </>
  );
}

export default App;
