import { useDispatch } from "react-redux";
import parse from "html-react-parser";
import { Icon } from "..";
import { setActiveCategory } from "../../redux/slices/layoutSlice";

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
