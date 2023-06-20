import { Icon } from "../ui/Icon";
import { useDispatch } from "react-redux";
import { setActiveCategory } from "..";
import parse from "html-react-parser";

export const CategoryCard = ({ category, activeCategory }) => {
  const { id, icon, name } = category;

  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setActiveCategory(id))}
      className={`category ${id === activeCategory ? "active" : ""}`}
    >
      <Icon additionalClasses={["category__icon"]}>{parse(icon)}</Icon>
      <h4 className="category__name">{name}</h4>
    </button>
  );
};
