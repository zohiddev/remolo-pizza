import React from "react";
import MenuIcon from '../../icons/MenuIcon'
import SearchIcon from '../../icons/SearchIcon'
import PizzaIcon from '../../icons/PizzaIcon'
import SomsaIcon from '../../icons/SomsaIcon'
import NapitkaIcon from '../../icons/NapitkaIcon'
import DisertIcon from '../../icons/DisertIcon'
import PhotoOne from '../../img/Rectangle 19.png'
import PhotoTwo from '../../img/Rectangle 19 (1).png'
import PhotoThree from '../../img/Rectangle 19 (2).png'
import PhotoFour from '../../img/Rectangle 19 (3).png'
import KorzinkaIcon from '../../icons/KorzinkaIcon'

export const HomePage = () => {
  const routes = [
    {
      id: 1,
      img: PhotoOne,
      aboute: "Pizza muzzarella",
      price: "$ 1200.00"
    },
    {
      id: 2,
      img: PhotoTwo,
      aboute: "Pizza pepperoni",
      price: "$ 1100.00"
    },
    {
      id: 3,
      img: PhotoThree,
      aboute: "Pizza napolitana",
      price: "$ 1050.oo"
    },
    {
        id: 4,
        img: PhotoFour,
        aboute: "Pizza napolitana",
        price: "$ 1050.oo"
      },
  ]
  return (
    <div className="navbar">
      <div className="navbar__header">
        <MenuIcon />
        <SearchIcon />
      </div>
      <div className="title">
        <h1 className="title__h1">Empanadas</h1>
        <p className="title__p">Elige nuestras deliciosas empanadas </p>
      </div>
      <div className="box__menu">
        <a href="/"><div className="box__icon__pizza"><PizzaIcon /></div></a>
        <a href="/Somsa"><div className="box__icon"><SomsaIcon /></div></a>
        <a href="/Napitka"><div className="box__icon"><NapitkaIcon /></div></a>
        <a href="/Disert"><div className="box__icon"><DisertIcon /></div></a>
      </div>
      <div className="box__card">
        {routes.map((item => (
          <div key={item.id} className="card">
            <img src={item.img} width="156px" height="157px" />
            <div className="card__title">
              <h1 className="card__aboute">{item.aboute}</h1>
              <h1 className="card__price">{item.price}</h1>
            </div>
            <div className="box__order">
              <div className="order">+</div>
            </div>
          </div>
        )))}
        <div className="korzinka__pizza">
          <div className="korzinka__title">
            <h3>4 Items</h3>
            <h3>$ 1550.00</h3>
          </div>
          <KorzinkaIcon />
        </div>
      </div>
    </div>
  );
};
