import { Icon } from "../ui/Icon";

export const CategoryCard = ({ id, icon, name, activeCategory }) => {
  return (
    <div className={`category ${id === activeCategory ? "active" : ""}`}>
      <Icon additionalClasses={["category__icon"]}>{icon}</Icon>
      <h4 className="category__name">{name}</h4>
    </div>
  );
};
