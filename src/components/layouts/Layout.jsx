import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home";
import { Somsa } from "../../pages/Somsa/Somsa";
import { Napitka } from "../../pages/Napitka/Napitka";
import { Disert } from "../../pages/Disert/Disert";


export const Layout = () => {
  return (
    <div className="wrapper">
      <div className="main-layout__row">
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Somsa" element={<Somsa />}/>
            <Route path="/Napitka" element={<Napitka />}/>
            <Route path="/Disert" element={<Disert />}/>
        </Routes>
      </div>
    </div>
  );
};
