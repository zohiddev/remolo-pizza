import { Icon } from "../ui/Icon";
import { CartProductsList } from "../lists/CartProductsList";
import { CartCheckout } from "../actions/CartCheckout";
import deleteIconSvg from "/src/assets/images/icons/delete-icon.svg";
import deliveryIconSvg from "/src/assets/images/icons/delivery-icon.svg";

export const CartMobile = ({ cartProductsData }) => {
  const delivery = 100;
  const total = 1650;

  return (
    <div className="cart-mobile">
      <div className="cart__modal"></div>
      <h2 className="cart-mobile__title">Mi orden</h2>
      <div className="cart-mobile__action-row">
        <div className="text__wrapper">
          <p className="cart-mobile__description">Listado del pedido</p>
          <p className="cart-mobile__quantity">
            {cartProductsData?.length} items
          </p>
        </div>
        <Icon>
          <img src={deleteIconSvg} alt="delete icon" />
        </Icon>
      </div>
      <CartProductsList cartProductsData={cartProductsData} />
      <CartCheckout
        delivery={delivery}
        total={total}
        icon={
          <Icon>
            <img src={deliveryIconSvg} alt="delivery icon" />
          </Icon>
        }
      />
    </div>
  );
};
