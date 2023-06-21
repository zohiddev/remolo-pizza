import { ProductSkeleton } from "../loading/ProductSkeleton";

export const ProductsSkeletonList = ({ count = 3 }) => {
  const countArr = [];
  if (count < 3) {
    count = 3;
  }
  for (let i = 0; i < count; i++) {
    countArr.push(i);
  }

  return (
    <div className="products__list">
      {countArr.map((index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};
