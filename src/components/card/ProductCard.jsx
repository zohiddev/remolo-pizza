import { useContext } from "react";
import { formatCurrency, getAbsolutePrice } from "..";
import { StoreContext } from "../../context/storeContext";
import { setCartAc } from "../../redux/reducers/actions/cartActions";
import { Icon } from "../ui/Icon";

export const ProductCard = ({ product, store }) => {

  const { image, name, price, discount } = product

  const { dispatch } = useContext(StoreContext)

  const handleCartButton = () => {

    dispatch(setCartAc({ product }))

  }

  return (
    <div className="product-card">
      <div className="product-card__img img">
        <img src={image} alt={name} />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">
          {formatCurrency(discount ? getAbsolutePrice(price, discount) : price)}
        </p>
        <Icon clickHandler={handleCartButton} additionalClasses={["product-card__icon add-to-cart"]}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.28571 11.5714V6.28571M6.28571 6.28571V1M6.28571 6.28571H11.5714M6.28571 6.28571H1"
              stroke="#AEAEAE"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Icon>
      </div>
    </div>
  );
};
