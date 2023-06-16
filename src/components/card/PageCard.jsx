import { Icon } from "../ui/Icon";

export const PageCard = ({ id, icon, name, url, activePage }) => {
  return (
    <a href={url}>
      <li className={`page ${id === activePage ? "active" : ""}`}>
        <Icon additionalClasses={["page__icon"]}>{icon}</Icon>
        <h4 className="page__text">{name}</h4>
      </li>
    </a>
  );
};
