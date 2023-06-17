import { useState } from "react";
import { BurgerIcon } from "../ui/BurgerIcon";
import { Logo } from "../ui/Logo";
import { PagesList } from "../lists/PagesList";
import { pagesData } from "../../data/pages";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar__logo-row">
        <Logo additionalClasses={["navbar__logo"]} />
        <BurgerIcon clickHandler={() => setIsOpen(!isOpen)} />
      </div>
      <PagesList pagesData={pagesData} activePage={activePage} />
    </div>
  );
};
