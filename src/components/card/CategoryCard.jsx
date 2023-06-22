import { setActiveCategotyAC } from "../../redux/actions/cartActions";
import { Icon } from "../ui/Icon";

export const CategoryCard = ({ data, activeCategory, store }) => {
  const { id, icon, name } = data

  const handleCategoryChange = () => {
    store.dispatch(setActiveCategotyAC({categoryName: name}))
  }

  return (
    <button className={`category ${data.name === activeCategory ? "active" : ""}`} onClick={handleCategoryChange}>
      <Icon additionalClasses={["category__icon"]}>{icon}</Icon>
      <h4 className="category__name">{name}</h4>
    </button>
  );
};
