import { useContext } from "react";
import { Icon } from "../ui/Icon";
import {useDispatch} from 'react-redux';
import { setCart } from "../../redux/slices/cartSlice";
import { getAbsolutePrice } from "../../helpers/getAbsolutePrice";
import { formatCurrency } from "../../helpers/formatCurrency";

export const ProductCard = ({ product }) => {

  const { image, name, price, discount} = product;
  const dispatch = useDispatch();

  const handleCardButton = () => {
    dispatch(setCart({product}));
  }

  return (
    <div className="product-card">
      <div className="product-card__img img">
        <img className="im" src={image} alt={name} />
      </div>
      <div className="product-card__content ">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">
          {formatCurrency(discount ? getAbsolutePrice(price, discount) : price)}
        </p>

        <button className="product-card__icon add-to-cart" onClick={handleCardButton}>
          
        <Icon >
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
        </button>

      </div>
    </div>
  );
};
