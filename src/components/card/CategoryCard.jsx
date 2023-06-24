import { Icon } from "../ui/Icon";
import { store } from "../../redux/store";
import { activeCartAc } from "../../redux/reducers/actions/cartActions";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

export const CategoryCard = ({ data, activeCategory }) => {
  const { id, icon, name, } = data
  const dispatch = useContext(StoreContext)
  
  const handleCategoryChange = (categoryName) => {

    dispatch(activeCartAc({ categoryName }))
  }



  return (
    <button className={`category ${data.name === activeCategory ? "active" : ""}`}
      onClick={() => handleCategoryChange(name)}
    >
      <Icon additionalClasses={["category__icon"]}>{icon}</Icon>
      <h4 className="category__name">{name}</h4>
    </button>
  );
};
