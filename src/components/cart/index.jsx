import { useSelector} from 'react-redux'
import { CartProductsList } from "../lists/CartProductsList";
import { useState } from "react";
import OrederCard from "../card/OrederCard";


export const Cart = () => {
  const  [ isChekout, setIsChekout] = useState(false)
  const {cart}  = useSelector(state => state);
  const cartProductsData = cart.items;
  return (
    <div className="cart">
      <h2 className="cart__title">Mi orden</h2>
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
      {/* <CartCheckout   total={total} /> */}
    </div>
    
  );
};
