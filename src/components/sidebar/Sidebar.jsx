import { useState } from "react";
import { BurgerIcon } from "../ui/BurgerIcon";
import { Logo } from "../ui/Logo";
import { PagesList } from "../lists/PagesList";
import { pagesData } from "../../data/pages";

export const Sidebar = ({ isOpenState, setIsOpenState }) => {
  const [isOpen, setIsOpen] = useState(isOpenState);
  const [activePage, setActivePage] = useState(1);

  return (
    <div className={`sidebar ${isOpenState ? "open" : ""}`}>
      <div className="sidebar__logo-row">
        <Logo additionalClasses={["sidebar__logo"]} />
        <BurgerIcon clickHandler={() => setIsOpenState(!isOpenState)} />
      </div>
      <PagesList pagesData={pagesData} activePage={activePage} />
    </div>
  );
};
