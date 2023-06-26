import { Icon } from "../ui/Icon";
import { activeCartAc } from "../../redux/reducers/actions/cartActions";
import { useDispatch } from "react-redux";
import { setActiveCategory } from "../../redux/slices/categoriesSlice";

export const CategoryCard = ({ data, activeCategory }) => {
  const { icon, name, } = data
  const { dispatch } = useDispatch()
  const handleCategoryChange = (name) => {
    dispatch(setActiveCategory(name))
  }



  return (
    <button className={`category ${data.name === activeCategory ? "active" : ""}`}
      onClick={() => handleCategoryChange(data.name)}
    >
      <Icon additionalClasses={["category__icon"]}>{icon}</Icon>
      <h4 className="category__name">{name}</h4>
    </button>
  );
};
