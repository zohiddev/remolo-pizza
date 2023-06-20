import { ProductCardMini } from "../card/ProductCardMini";

export const CartProductsList = ({ products }) => {
  return (
    <div className="cart-products__list">
      {products.map((product) => (
        <ProductCardMini key={product.id} product={product} />
      ))}
    </div>
  );
};
