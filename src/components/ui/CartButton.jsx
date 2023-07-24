
import { useEffect } from "react";
import { formatCurrency } from "..";


export const CartButton = ({ itemsQuantity, totalPrice, icon, }) => {


  useEffect(() => {
      const backdropstt = document.querySelector('.cart-mobile')
      const backdropttt = document.querySelector('.cart-button')
      backdropttt.addEventListener('click', function() {
        backdropstt.classList.add('active')
      })
  })
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
