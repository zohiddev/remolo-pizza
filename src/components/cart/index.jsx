import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";
import { ProductCardMini } from "../card/ProductCardMini";
import { formatCurrency } from "..";

export const Cart = ({ products }) => {
  const order = 100;
  const total = 1650;

  return (
    <div className="cart">
      <h2 className="cart__title">Mi orden</h2>
      <div className="cart__action-row">
        <div className="text__wrapper">
          <p className="cart__description">Listado del pedido</p>
          <p className="cart__quantity">{products.length} items</p>
        </div>
        <Icon>
          <img
            src="/src/assets/images/icons/delete-icon.svg"
            alt="delete icon"
          />
        </Icon>
      </div>
      <div className="products__wrapper">
        {products.map((product) => (
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
      <div className="cart__checkout">
        <div className="cart__checkout-info order">
          <p className="text">Envio</p>
          <p className="price">{formatCurrency(order)}</p>
        </div>
        <div className="cart__checkout-info total">
          <p className="text">Items totales</p>
          <p className="price">{formatCurrency(total)}</p>
        </div>
        <Button
          text="Ir al checkout"
          additionalClasses={["button--primary cart__button"]}
        />
      </div>
    </div>
  );
};
