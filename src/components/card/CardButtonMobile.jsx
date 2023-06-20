import { CartButton } from "../ui/CartButton";
import { Icon } from "../ui/Icon";

export const CardButtonMobile = ({ onClick }) => {
  return (
    <div className="cart-button__wrapper">
      <CartButton
        onClick={onClick}
        itemsQuantity={4}
        totalPrice={1550}
        icon={
          <Icon>
            <img src="/src/assets/images/icons/cart-icon.svg" alt="cart icon" />
          </Icon>
        }
      />
    </div>
  );
};
