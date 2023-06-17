import { CartCheckoutInfo } from "../info/CartCheckoutInfo";
import { Button } from "../ui/Button";

export const CartCheckout = ({ delivery, total, icon }) => {
  return (
    <div className="cart__checkout">
      <CartCheckoutInfo text="Envio" price={delivery} icon={icon} />
      <CartCheckoutInfo text="Items totales" price={total} />
      <Button
        text="Ir al checkout"
        additionalClasses={["button--primary cart__button"]}
      />
    </div>
  );
};
