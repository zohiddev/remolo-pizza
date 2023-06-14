import Basket from "../basket";
import Main from "../main";
import Navbar from "../sidebar/index";

export const Layout = () => {
  return (
    <div className="wrapper">
      <div className="main-layout__row">
        <Navbar/>
        <Main/>
        <Basket/>
      </div>
    </div>
  );
};
