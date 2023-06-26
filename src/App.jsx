import { Layout } from "./components";
import { Cart } from "./components/cart";
import { HomePage } from "./pages/home";

function App() {
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
