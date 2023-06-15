import { formatCurrency } from "..";

export const CartButton = ({ itemsQuantity, totalPrice, icon }) => {
  return (
    <button className="button cart-button">
      <span className="text__wrapper">
        <p className="items-quantity cart-button__text">
          {itemsQuantity} items
        </p>
        <p className="total-price cart-button__text">
          {formatCurrency(totalPrice)}
        </p>
      </span>
      {icon && icon}
    </button>
  );
};
