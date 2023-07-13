import { useState } from "react";

export const CartCheckoutData = ({ title, data, type }) => {
  const [value, setValue] = useState(data);

  return (
    <div className="cart-checkout-data">
      <h2 className="title">{title}</h2>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // placeholder={title}
      />
    </div>
  );
};
