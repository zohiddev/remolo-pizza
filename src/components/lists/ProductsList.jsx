import { ProductCard } from "../card/ProductCard";

export const ProductsList = ({ productsData }) => {
  return (
    <div className="products__list">
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};
