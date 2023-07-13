import { Icon } from "../ui/Icon";
import { useDispatch } from "react-redux";
import parse from "html-react-parser";
import { useLocation } from "react-router-dom";

export const PageCard = ({ page, activePage }) => {
  const { icon, name, url } = page;

  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <a href={url}>
      <button className={`page ${location.pathname === url ? "active" : ""}`}>
        <Icon additionalClasses={["page__icon"]}>{parse(icon)}</Icon>
        <h4 className="page__text">{name}</h4>
      </button>
    </a>
  );
};
