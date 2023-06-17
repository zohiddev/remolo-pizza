import { useState } from "react";
import { Input } from "../form/Input";
import { BurgerIcon } from "../ui/BurgerIcon";
import { Icon } from "../ui/Icon";
import { Sidebar } from "../sidebar/Sidebar";
import searchIconSvg from "/src/assets/images/icons/search-icon.svg";
import closeIconSvg from "/src/assets/images/icons/close-icon.svg";

const SearchIcon = ({ clickHandler }) => {
  return (
    <Icon clickHandler={clickHandler}>
      <img src={searchIconSvg} alt="search icon" />
    </Icon>
  );
};

export const Header = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [inputIsOpen, setInputIsOpen] = useState(false);

  return (
    <>
      <Sidebar isOpenState={navbarIsOpen} setIsOpenState={setNavbarIsOpen} />
      <div className={`header ${inputIsOpen ? "input-open" : ""}`} id="header">
        <div className="search-input__wrapper">
          <Input
            icon={<SearchIcon />}
            placeholder="Busca algo de nuestro menu..."
            additionalClasses={["search"]}
          />
          <Icon
            additionalClasses={["close-icon"]}
            clickHandler={() => setInputIsOpen(false)}
          >
            <img src={closeIconSvg} alt="close icon" />
          </Icon>
        </div>
        <div className="header__mobile" id="header__mobile">
          <BurgerIcon clickHandler={() => setNavbarIsOpen(true)} />
          <SearchIcon clickHandler={() => setInputIsOpen(true)} />
        </div>
      </div>
    </>
  );
};
