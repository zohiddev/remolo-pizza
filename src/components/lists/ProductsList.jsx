import { ProductCard } from "../card/ProductCard";

export const ProductsList = ({ productsData }) => {
  return (
    <div className="products__list">
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          discount={product.discount}
        />
      ))}
    </div>
  );
};
