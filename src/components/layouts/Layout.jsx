import { HomePage } from "../../pages/home";
import Categori from "../categori/Categori";
import Karzinka from "../karzinka/Karzinka";
import { Navbar } from "../navbar";

export const Layout = () => {
  return (
    <div className="wrapper">
      <div className="main-layout__row">
        <Navbar />

            <HomePage/>
     </div>
    </div>
  );
};
