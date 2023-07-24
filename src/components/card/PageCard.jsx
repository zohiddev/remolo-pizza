import { Link } from "react-router-dom";
import { Icon } from "../ui/Icon";
import { useSelector } from "react-redux";

export const PageCard = ({ id, icon, name, url, activePage }) => {
  const {setting} = useSelector((state) => state);
  return (
        <Link to={url}>
          <li className={`page ${url === activePage ? "active " + setting.color  : ""}`}>
          <Icon additionalClasses={["page__icon"]}>{icon}</Icon>
          <h4 className="page__text">{name}</h4>
          </li>
        </Link>
            
   
  );
};
