import {
  removeCart,
  increaseCart,
  decreaseCart,
} from "../../redux/slices/cartSlice";
import { formatCurrency, getAbsolutePrice } from "../../helpers";
import { useDispatch } from "react-redux";
import { Icon } from "../ui/Icon";
import { Quantity } from "../ui/Quantity";

const closeIconSvg = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.292492 0.305288C0.479831 0.117817 0.733884 0.0125018 0.998781 0.0125018C1.26368 0.0125018 1.51773 0.117817 1.70507 0.305288L5.99375 4.59829L10.2824 0.305288C10.3746 0.209778 10.4848 0.133596 10.6067 0.0811869C10.7286 0.0287779 10.8597 0.00119157 10.9923 3.77571e-05C11.125 -0.00111606 11.2565 0.0241854 11.3793 0.0744663C11.5021 0.124747 11.6136 0.199 11.7074 0.292893C11.8012 0.386786 11.8754 0.498438 11.9256 0.621334C11.9758 0.744231 12.0011 0.87591 12 1.00869C11.9988 1.14147 11.9713 1.27269 11.9189 1.39469C11.8665 1.5167 11.7904 1.62704 11.695 1.71929L7.40633 6.01229L11.695 10.3053C11.877 10.4939 11.9777 10.7465 11.9754 11.0087C11.9731 11.2709 11.8681 11.5217 11.6828 11.7071C11.4976 11.8925 11.2471 11.9977 10.9851 12C10.7232 12.0022 10.4709 11.9014 10.2824 11.7193L5.99375 7.42629L1.70507 11.7193C1.51666 11.9014 1.26431 12.0022 1.00238 12C0.740443 11.9977 0.489883 11.8925 0.304661 11.7071C0.11944 11.5217 0.0143761 11.2709 0.0121 11.0087C0.00982384 10.7465 0.110517 10.4939 0.292492 10.3053L4.58118 6.01229L0.292492 1.71929C0.10521 1.53176 0 1.27745 0 1.01229C0 0.747124 0.10521 0.492816 0.292492 0.305288Z"
      fill="#616161"
    />
  </svg>
);

export const ProductCardMini = ({ product }) => {
  const { id, image, name, price, discount, quantity } = product;

  const dispatch = useDispatch();

  return (
    <div className="product-card--mini">
      <div className="product-card--mini__img img">
        <img src={image} alt={name} />
      </div>
      <div className="product-card--mini__content">
        <div className="product-card--mini__text-wrapper">
          <h3 className="product-card--mini__name">{name}</h3>
          <p className="product-card--mini__price">
            {formatCurrency(
              (discount ? getAbsolutePrice(price, discount) : price) * quantity
            )}
          </p>
        </div>
        <Quantity
          quantity={quantity}
          increase={() => dispatch(increaseCart(id))}
          decrease={() =>
            quantity !== 1
              ? dispatch(decreaseCart(id))
              : dispatch(removeCart(id))
          }
        />
        <Icon
          onClick={() => dispatch(removeCart(id))}
          additionalClasses={["product-card--mini__icon close-icon"]}
        >
          {closeIconSvg}
        </Icon>
      </div>
    </div>
  );
};
