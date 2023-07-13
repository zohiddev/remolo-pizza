import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  Icon,
  CartProductsList,
  CartCheckout,
  CartCheckoutData,
} from "../../components";
import { clearCart } from "../../redux/slices/cartSlice";
import deleteIconSvg from "/src/assets/images/icons/delete-icon.svg";
import emptyImg from "/src/assets/images/empty.png";
import { settings } from "../../helpers/settings";
import { CartCheckoutDataWrapper } from "../../components/lists/CartCheckoutDataWrapper";
import {
  setAlert,
  setIsCheckout,
  removeIsCheckout,
} from "../../redux/slices/layoutSlice";
import { Alert } from "../../components/ui/Alert";

export const Cart = () => {
  const [checkout, setCheckout] = useState({
    delivery: 100,
    total: 0,
  });
  const { cart, user, layout } = useSelector((state) => state);

  useEffect(() => {
    setCheckout({
      ...checkout,
      total:
        cart.items
          .map((product) => product.price * product.quantity)
          .reduce((x, y) => x + y, 0) + checkout.delivery,
    });
  }, [cart.items]);

  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2 className="cart__title">Mi orden</h2>
      {layout.isCheckout ? (
        <CartCheckoutDataWrapper />
      ) : (
        <>
          <div className="cart__action-row">
            <div className="text__wrapper">
              <p className="cart__description">Listado del pedido</p>
              <p className="cart__quantity">{cart.items.length} items</p>
            </div>
            <Icon onClick={() => dispatch(clearCart())}>
              <img src={deleteIconSvg} alt="delete icon" />
            </Icon>
          </div>
          {cart.items.length !== 0 ? (
            <>
              <CartProductsList products={cart.items} />
            </>
          ) : (
            <div className="img cart__img">
              <img src={emptyImg} alt="empty cart" />
            </div>
          )}
        </>
      )}
      {cart.items.length !== 0 && (
        <CartCheckout
          delivery={checkout.delivery}
          total={checkout.total}
          onClick={() =>
            layout.isCheckout
              ? (dispatch(setAlert()),
                dispatch(removeIsCheckout()),
                dispatch(clearCart()))
              : dispatch(setIsCheckout())
          }
        />
      )}
    </div>
  );
};
