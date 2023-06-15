import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";
import { CartProductsList } from "../lists/CartProductsList";
import { CartCheckoutInfo } from "../info/CartCheckoutInfo";

export const Cart = ({ cartProductsData }) => {
  const order = 100;
  const total = 1650;

  return (
    <div className="cart">
      <h2 className="cart__title">Mi orden</h2>
      <div className="cart__action-row">
        <div className="text__wrapper">
          <p className="cart__description">Listado del pedido</p>
          <p className="cart__quantity">{cartProductsData?.length} items</p>
        </div>
        <Icon>
          <img
            src="/src/assets/images/icons/delete-icon.svg"
            alt="delete icon"
          />
        </Icon>
      </div>
      <CartProductsList cartProductsData={cartProductsData} />
      <div className="cart__checkout">
        <CartCheckoutInfo text="Envio" price={order} />
        <CartCheckoutInfo text="Items totales" price={total} />
        <Button
          text="Ir al checkout"
          additionalClasses={["button--primary cart__button"]}
        />
      </div>
    </div>
  );
};
