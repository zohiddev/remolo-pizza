import { useState } from "react";
import { Icon } from "../ui/Icon";
import { pagesCategories } from "../../data/pagesCategories";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className={`navbar ${isOpen ? "" : "close"}`}>
      <div className="navbar__logo-row">
        <a href="/" className="navbar__logo img">
          <img className="logo" src="/src/assets/images/logo.svg" alt="logo" />
          <img
            className="logo-text"
            src="/src/assets/images/logo-text.svg"
            alt="logo-text"
          />
        </a>
        <Icon additionalClasses={["burger-menu"]} onClick={clickHandler}>
          <span className="line-one line"></span>
          <span className="line-two line"></span>
          <span className="line-three line"></span>
        </Icon>
      </div>
      <ul className="navbar__pages">
        {pagesCategories.map((pageCategory) => (
          <li
            className={`navbar__page ${pageCategory.id === 1 ? "active" : ""}`}
            key={pageCategory.id}
          >
            <Icon additionalClasses={["navbar__icon"]}>
              {pageCategory.icon}
            </Icon>
            <h4 className="navbar__text">{pageCategory.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
