import { formatCurrency } from "..";



export const CartCheckoutInfo = ({ text, price }) => {
  return (
    <div className="cart__checkout-info">
      <p className="text">
        {text} 
      </p>
      <p className="price">{formatCurrency(price)}</p>
    </div>
  );
};
