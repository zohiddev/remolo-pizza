import { Icon } from "../ui/Icon";
import { useSelector, useDispatch } from "react-redux";
import { CartCheckout } from "../actions/CartCheckout";
import { CartProductsList } from "../lists/CartProductsList";
import { useEffect, useState } from "react";
import deleteIconSvg from "/src/assets/images/icons/delete-icon.svg";
import emptyImg from "/src/assets/images/empty.png";

export const Cart = () => {
  const [checkout, setCheckout] = useState({
    delivery: 100,
    total: 0,
  });
  const products = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <h2 className="cart__title">Mi orden</h2>
      <div className="cart__action-row">
        <div className="text__wrapper">
          <p className="cart__description">Listado del pedido</p>
          <p className="cart__quantity">{products.length} items</p>
        </div>
        <Icon>
          <img src={deleteIconSvg} alt="delete icon" />
        </Icon>
      </div>
      {products.length !== 0 ? (
        <>
          <CartProductsList products={products} />
          <CartCheckout delivery={checkout.delivery} total={checkout.total} />
        </>
      ) : (
        <div className="img cart__img">
          <img src={emptyImg} alt="empty cart" />
        </div>
      )}
    </div>
  );
};
