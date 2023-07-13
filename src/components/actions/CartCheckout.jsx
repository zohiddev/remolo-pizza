import { CartCheckoutInfo, Button } from "..";

export const CartCheckout = ({ delivery, total, icon, onClick }) => {
  return (
    <div className="cart__checkout" onClick={onClick}>
      <CartCheckoutInfo text="Envio" price={delivery} icon={icon} />
      <CartCheckoutInfo text="Items totales" price={total} />
      <Button
        text="Ir al checkout"
        additionalClasses={["button--primary cart__button"]}
      />
    </div>
  );
};
