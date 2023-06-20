import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BurgerIcon } from "../ui/BurgerIcon";
import { Logo } from "../ui/Logo";
import { PagesList } from "../lists/PagesList";
import { navbarToggled, getApiUrl } from "..";
import axios from "axios";

export const Navbar = () => {
  const [pages, setPages] = useState([]);
  const isNavbarOpen = useSelector((state) => state.layout.isNavbarOpen);
  const activePage = useSelector((state) => state.layout.activePage);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(getApiUrl("page/all/"))
      .then((response) => {
        setPages(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={`navbar ${isNavbarOpen ? "open" : ""}`}>
      <div className="navbar__logo-row">
        <Logo additionalClasses={["navbar__logo"]} />
        <BurgerIcon onClick={() => dispatch(navbarToggled())} />
      </div>
      <PagesList pages={pages} activePage={activePage} />
    </div>
  );
};
