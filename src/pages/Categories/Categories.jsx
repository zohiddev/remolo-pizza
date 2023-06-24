import React from 'react'
import './Categories.css'
import { Pizza_1 } from '../../assets'

function Categories() {
  return (
    <div className="categories">
      <div className="categories__row">
        <input type="text" className="categories__search" placeholder='Busca algo de nuestro menu...' />

        <p className="categories__title">Categorias</p>
        <p className="categories__text">Elige nuestras deliciosas pizzas </p>

        <div className="categories__products">

          <div className="categories__card">

          <img src={Pizza_1} className='categories__card-img'/>

            <div className="categories__titles">

              <p className="categories__card-title">Pizza muzzarella</p>
              <p className="categories__price">$ 1200.00</p>

            <button className="categories__add">+ </button>
            </div>
          </div>
          <div className="categories__card">

          <img src={Pizza_1} className='categories__card-img'/>

            <div className="categories__titles">

              <p className="categories__card-title">Pizza muzzarella</p>
              <p className="categories__price">$ 1200.00</p>

            <button className="categories__add">+ </button>
            </div>
          </div>
          <div className="categories__card">

          <img src={Pizza_1} className='categories__card-img'/>

            <div className="categories__titles">

              <p className="categories__card-title">Pizza muzzarella</p>
              <p className="categories__price">$ 1200.00</p>

            <button className="categories__add">+ </button>
            </div>
          </div>
          <div className="categories__card">

          <img src={Pizza_1} className='categories__card-img'/>

            <div className="categories__titles">

              <p className="categories__card-title">Pizza muzzarella</p>
              <p className="categories__price">$ 1200.00</p>

            <button className="categories__add">+ </button>
            </div>
          </div>

          
        </div>

        
        </div>
    </div>
  )
}

export default Categories