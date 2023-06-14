import formatCurrency from "..";

export const CartButton = ({ itemsQuantity, totalPrice, icon }) => {
  return (
    <button className="button cart__button">
      <span className="text__wrapper">
        <p className="items-quantity cart__button__text">
          {itemsQuantity} items
        </p>
        <p className="total-price cart__button__text">
          {formatCurrency(totalPrice)}
        </p>
      </span>
      {icon && icon}
    </button>
  );
};
