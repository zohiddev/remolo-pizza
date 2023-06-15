import { Icon } from "../ui/Icon";

export const CategoryCard = ({ id, icon, name, activeCategory }) => {
  return (
    <div className={`category ${id === activeCategory ? "active" : ""}`}>
      <Icon>{icon}</Icon>
      <h4 className="name">{name}</h4>
    </div>
  );
};
