import { Layout } from "./components";
import { ProductCard } from "./components/card/ProductCard";
import { ProductCardMini } from "./components/card/ProductCardMini";
import productsData from "./data/products.json";
import productsCartData from "./data/productsCart.json";
import { Button } from "./components/ui/Button";
import { Navbar } from "./components/navbar";
import { Cart } from "./components/cart";
import { HomePage } from "./pages/home";

function App() {
  return (
    <>
      {/* <ProductCard
        id={productsData[0].id}
        image={productsData[0].image}
        name={productsData[0].name}
        price={productsData[0].price}
        discount={productsData[0].discount}
      />
      <Button text={"Ir al checkout"} additionalClasses={["button--primary"]} /> */}
      {/* <ProductCardMini
        id={productsCartData[0].id}
        image={productsCartData[0].image}
        name={productsCartData[0].name}
        price={productsCartData[0].price}
        discount={productsCartData[0].discount}
        quantity={1}
      /> */}
      <Layout />
      <HomePage />
      <Cart products={productsCartData} />
    </>
  );
}

export default App;
