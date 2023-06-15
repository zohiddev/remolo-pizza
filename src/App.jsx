import { Layout } from "./components";
import { Cart } from "./components/cart";
import { HomePage } from "./pages/home";
import cartProductsData from "./data/productsCart.json";

function App() {
  return (
    <>
      <Layout />
      <HomePage />
      <Cart cartProductsData={cartProductsData} />
    </>
  );
}

export default App;
