import { ProductCardMini } from "../card/ProductCardMini";

export const CartProductsList = ({ cartProductsData, store }) => {
  return (
    <div className="cart-products__list">
      {cartProductsData.map((product, i) => (
        <ProductCardMini key={i} product={product} store={store}/>
      ))}
    </div>
  );
};
