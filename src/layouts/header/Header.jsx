import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Input, BurgerIcon, Icon } from "../../components";
import { toggleNavbar } from "../../redux/slices/layoutSlice";
import { debounce } from "lodash";
import closeIconSvg from "/src/assets/images/icons/close-icon.svg";
import searchIconSvg from "/src/assets/images/icons/search-icon.svg";

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
        <BurgerIcon onClick={() => dispatch(toggleNavbar())} />
        <SearchIcon onClick={() => setIsInputOpen(true)} />
      </div>
    </div>
  );
};
