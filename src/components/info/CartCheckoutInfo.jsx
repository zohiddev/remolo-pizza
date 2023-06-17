import { formatCurrency } from "..";

export const CartCheckoutInfo = ({ text, price, icon }) => {
  return (
    <div className="cart__checkout-info">
      <p className="text">
        {text} {icon && icon}
      </p>
      <p className="price">{formatCurrency(price)}</p>
    </div>
  );
};
