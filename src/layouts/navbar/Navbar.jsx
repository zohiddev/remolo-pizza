import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BurgerIcon,
  Logo,
  PagesList,
  navbarToggled,
  getApiUrl,
  Loading,
} from "..";
import axios from "axios";

export const Navbar = () => {
  const [pages, setPages] = useState([]);
  const [loadingPages, setLoadinPages] = useState(false);
  const isNavbarOpen = useSelector((state) => state.layout.isNavbarOpen);
  const activePage = useSelector((state) => state.layout.activePage);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoadinPages(true);
    axios
      .get(getApiUrl("page/all/"))
      .then((response) => {
        setPages(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoadinPages(false));
  }, []);

  return (
    <div className={`navbar ${isNavbarOpen ? "open" : ""}`}>
      <div className="navbar__logo-row">
        <Logo additionalClasses={["navbar__logo"]} />
        <BurgerIcon onClick={() => dispatch(navbarToggled())} />
      </div>
      {loadingPages ? (
        <Loading />
      ) : (
        <PagesList pages={pages} activePage={activePage} />
      )}
    </div>
  );
};
