import { Icon } from "../ui/Icon";
import { CartProductsList } from "../lists/CartProductsList";
import { CartCheckout } from "../actions/CartCheckout";
import deleteIconSvg from "/src/assets/images/icons/delete-icon.svg";
import {useDispatch, useSelector} from 'react-redux'
import { removeCart } from "../../redux/slices/cartSlice";
import OrederCard from "../card/OrederCard";
import { useState } from "react";

export const CartProducts = ({ product }) => {


  
  const dispatch = useDispatch();
  
  const {cart}  = useSelector(state => state);
  const cartProductsData = cart.items;
  const total = 0;

  const handleRemoveCartChange = () => {
    dispatch(removeCart({product}));
  }

  return (
    <div className="cart">
      <h2 className="cart__title">Mi orden</h2>
      <div className="cart__action-row">
        <div className="text__wrapper">
          <p className="cart__description">Listado del pedido</p>
          <p className="cart__quantity">{cartProductsData?.length} items</p>
        </div>
        <Icon clickHandler={handleRemoveCartChange}>
          <img src={deleteIconSvg} alt="delete icon" />
        </Icon>
      </div>
      <CartProductsList cartProductsData={cartProductsData}  />
      
      
      <CartCheckout  cartProductsData={cartProductsData}   total={total} />
    </div>
  );
};
