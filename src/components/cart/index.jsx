import { Icon } from "../ui/Icon";
import { CartProductsList } from "../lists/CartProductsList";
import { CartCheckout } from "../actions/CartCheckout";
import deleteIconSvg from "/src/assets/images/icons/delete-icon.svg";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

export const Cart = () => {
  const delivery = 100;
  const total = 1650;
  const { getState } = useContext(StoreContext)
  const { cart } = getState()
  const cartProductsData = cart.items
  return (
    <div className="cart">
      <h2 className="cart__title">Mi orden</h2>
      <div className="cart__action-row">
        <div className="text__wrapper">
          <p className="cart__description">Listado del pedido</p>
          <p className="cart__quantity">{cartProductsData?.length} items</p>
        </div>
        <Icon>
          <img src={deleteIconSvg} alt="delete icon" />
        </Icon>
      </div>
      <CartProductsList cartProductsData={cartProductsData} />
      <CartCheckout delivery={delivery} total={total} />
    </div>
  );
};
