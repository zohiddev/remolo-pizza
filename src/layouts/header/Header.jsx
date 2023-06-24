import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, BurgerIcon, Icon, navbarToggled } from "..";
import { debounce } from "lodash";
import searchIconSvg from "/src/assets/images/icons/search-icon.svg";
import closeIconSvg from "/src/assets/images/icons/close-icon.svg";
import { useEffect } from "react";

const SearchIcon = ({ onClick }) => {
  return (
    <Icon onClick={onClick}>
      <img src={searchIconSvg} alt="search icon" />
    </Icon>
  );
};

export const Header = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(query);
  }, [query]);

  const onChangeHandler = (e) => {
    debounce(function () {
      console.log(e.target.value);
    });
  };

  return (
    <div className={`header ${isInputOpen ? "input-open" : ""}`} id="header">
      <div className="search-input__wrapper">
        <Input
          icon={<SearchIcon />}
          placeholder="Busca algo de nuestro menu..."
          additionalClasses={["search"]}
          onChange={(e) => onChangeHandler(e)}
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
