import React from 'react'
import { Basketcon, Pizza_1 } from '../../assets'
import './Basket.css'
import Pizza from'../../assets/Images/Pizza1.jpg'


function Basket() {
  return (
    <div className="basket">
      <div className="basket__row">
        <p className="basket__title">MI Order</p>
        <div className="basket__delete">
          <p className="basket__text">  Listado del pedido</p>
          <Basketcon/>
        </div>
        <div className="basket__cards">
          <div className="basket__card">
              <img className="basket__img" src={Pizza} />
            
            <div className="basket__titles">
              <div className="basket__card-name">
                Cepita naranja 1L</div>
            <div className="basket__card-price">$ 170.00</div>
            </div>

          </div>
          <div className="basket__card">
          <img className="basket__img" src={Pizza} />
            
            <div className="basket__titles">
              <div className="basket__card-name">
                Cepita naranja 1L</div>
            <div className="basket__card-price">$ 170.00</div>
            </div>

          </div>
          <div className="basket__card">
            <img className="basket__img" src={Pizza} />
            
            <div className="basket__titles">
              <div className="basket__card-name">
                Cepita naranja 1L</div>
            <div className="basket__card-price">$ 170.00</div>
            </div>

          </div>  
        </div>
      </div>
    </div>
  )
}

export default Basket