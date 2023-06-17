import { ProductCardMini } from "../card/ProductCardMini";

export const CartProductsList = ({ cartProductsData }) => {
  return (
    <div className="cart-products__list">
      {cartProductsData.map((product) => (
        <ProductCardMini
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          discount={product.discount}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};
