import { ProductCardMini } from "../card/ProductCardMini";

export const CartProductsList = ({ cartProductsData }) => {
  return (
    <div className="cart-products__list">
      {cartProductsData.map((product, i) => (
        <ProductCardMini
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};
