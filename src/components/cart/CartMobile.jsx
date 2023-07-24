import { Icon } from "../ui/Icon";
import { CartProductsList } from "../lists/CartProductsList";
import deleteIconSvg from "/src/assets/images/icons/delete-icon.svg";
import deliveryIconSvg from "/src/assets/images/icons/delivery-icon.svg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrederCard from "../card/OrederCard";


// import {setCartM} from '../'

export const CartMobile = () => {

  const  [ isChekout, setIsChekout] = useState(false)
  const  [ isChek, setIsChek] = useState(false) 
  const {cart}  = useSelector(state => state);
  const dispatch = useDispatch()
  const cartProductsData = cart.items;

  useEffect(() => {
    const backdropstt = document.querySelector('.cart-mobile')
    const backdroptttt = document.querySelector('.cart-mobile_btn')
    backdroptttt.addEventListener('click', function() {
      backdropstt.classList.remove('active')
    })
  })

  return  (
    <div className={"cart-mobile"}>
      <button className="cart-mobile_btn">X</button>
      {
        isChekout ? <OrederCard setIsChekout={setIsChekout} /> : <CartProductsList cartProductsData={cartProductsData}  />
      } 
      <div className="cart-chek__btn">
        <button className='chek_btn' onClick={() => {cart.items.length > 0 ? setIsChekout(true) : ''}}>
          <h1>{
            isChekout ? 'Generar recibo' : 'Ir al checkout'
            }</h1>
        </button>
      </div>
    </div>
  );
  
};
