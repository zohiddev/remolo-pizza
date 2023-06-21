import { HomePage } from "./pages/home";
import { Navbar } from "./layouts/navbar/Navbar";
import { Cart } from "./layouts/cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <div id="main-content__row">
        <HomePage />
        <Cart />
      </div>
    </>
  );
}

export default App;
