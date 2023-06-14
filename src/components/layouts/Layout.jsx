import Basket from "../basket";
import Navbar from "../sidebar/index";

export const Layout = () => {
  return (
    <div className="wrapper">
      <div className="main-layout__row">
        <Navbar/>
        <Basket/>
      </div>
    </div>
  );
};
