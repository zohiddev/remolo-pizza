import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../form/Input";
import { BurgerIcon } from "../ui/BurgerIcon";
import { Icon } from "../ui/Icon";
import { navbarToggled } from "..";
import searchIconSvg from "/src/assets/images/icons/search-icon.svg";
import closeIconSvg from "/src/assets/images/icons/close-icon.svg";

const SearchIcon = ({ onClick }) => {
  return (
    <Icon onClick={onClick}>
      <img src={searchIconSvg} alt="search icon" />
    </Icon>
  );
};

export const Header = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className={`header ${isInputOpen ? "input-open" : ""}`} id="header">
      <div className="search-input__wrapper">
        <Input
          icon={<SearchIcon />}
          placeholder="Busca algo de nuestro menu..."
          additionalClasses={["search"]}
        />
        <Icon
          additionalClasses={["close-icon"]}
          onClick={() => setIsInputOpen(false)}
        >
          <img src={closeIconSvg} alt="close icon" />
        </Icon>
      </div>
      <div className="header__mobile" id="header__mobile">
        <BurgerIcon onClick={() => dispatch(navbarToggled())} />
        <SearchIcon onClick={() => setIsInputOpen(true)} />
      </div>
    </div>
  );
};
