import { Layout } from "./components";
import { Cart } from "./components/cart";
import { HomePage } from "./pages/home";
import productsCartData from "./data/productsCart.json";

function App() {
  return (
    <>
      <Layout />
      <HomePage />
      <Cart products={productsCartData} />
    </>
  );
}

export default App;
