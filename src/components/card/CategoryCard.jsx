
import { setActiveCategory } from "../../redux/slices/categoriesSlice";
import {useDispatch, useSelector} from 'react-redux';
import { IconInnerHtml } from "../ui/IconInnerHtml";

export const CategoryCard = ({ data, activeCategory }) => {
  const {setting} = useSelector((state) => state)
  const { icon, name } = data;
  const dispatch = useDispatch();

  const handleCategoryChange = (name) => {
    dispatch(setActiveCategory(name) );  
  };
  return (
    <button 
      className={`category ${data.id === activeCategory ? "active " + setting.color : ""}`}
      onClick={() => handleCategoryChange(data.id)}
    >
      <IconInnerHtml additionalClasses={["category__icon"]} type="innerHtml">{icon}</IconInnerHtml>
      <h4 className="category__name">{name}</h4>
    </button>
  );
};
