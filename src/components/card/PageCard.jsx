import { Icon } from "../ui/Icon";
import { useDispatch } from "react-redux";
import { setActivePage } from "..";
import parse from "html-react-parser";

export const PageCard = ({ page, activePage }) => {
  const { icon, name, url } = page;

  const dispatch = useDispatch();

  return (
    <a href={url}>
      <button
        onClick={() => dispatch(setActivePage(name))}
        className={`page ${name === activePage ? "active" : ""}`}
      >
        <Icon additionalClasses={["page__icon"]}>{parse(icon)}</Icon>
        <h4 className="page__text">{name}</h4>
      </button>
    </a>
  );
};
