import { Icon, clearCart, CartCheckout, CartProductsList } from "..";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import deleteIconSvg from "/src/assets/images/icons/delete-icon.svg";
import emptyImg from "/src/assets/images/empty.png";

export const Cart = () => {
  const [checkout, setCheckout] = useState({
    delivery: 100,
    total: 0,
  });
  const products = useSelector((state) => state.cart);

  useEffect(() => {
    setCheckout({
      ...checkout,
      total:
        products
          .map((product) => product.price * product.quantity)
          .reduce((x, y) => x + y, 0) + checkout.delivery,
    });
  }, [products]);

  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="cart-text__wrapper">
        <h2 className="cart__title">Mi orden</h2>
        <div className="cart__action-row">
          <div className="text__wrapper">
            <p className="cart__description">Listado del pedido</p>
            <p className="cart__quantity">{products.length} items</p>
          </div>
          <Icon onClick={() => dispatch(clearCart())}>
            <img src={deleteIconSvg} alt="delete icon" />
          </Icon>
        </div>
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
