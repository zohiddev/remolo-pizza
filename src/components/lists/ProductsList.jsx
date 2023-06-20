import { ProductCard } from "../card/ProductCard";

export const ProductsList = ({ productsData, store }) => {
  return (
    <div className="products__list">
      {productsData.map((product) => (
        <ProductCard key={product.id}product={product} store={store}/>
      ))}
    </div>
  );
};
