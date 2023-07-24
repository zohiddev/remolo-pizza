import { ProductCard } from "../card/ProductCard";
import {useDispatch, useSelector} from 'react-redux';


  // const {setting} = useSelector((state) => state)
  // const dispatch = useDispatch();


export const ProductsList = ({ productsData }) => {
  return (
    <div className={`products__list `}>
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};
