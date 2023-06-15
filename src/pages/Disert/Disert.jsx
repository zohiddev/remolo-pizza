import React from "react";
import MenuIcon from '../../icons/MenuIcon'
import SearchIcon from '../../icons/SearchIcon'
import PizzaIconTwo from '../../icons/PizzaIconTwo'
import SomsaIcon from '../../icons/SomsaIcon'
import NapitkaIcon from '../../icons/NapitkaIcon'
import DisertIconTwo from '../../icons/DisertIconTwo'
import PhotoOne from '../../img/Rectangle 19 (12).png'
import PhotoTwo from '../../img/Rectangle 19 (13).png'
import PhotoThree from '../../img/Rectangle 19 (14).png'
import PhotoFour from '../../img/Rectangle 19 (15).png'
import KorzinkaIcon from "../../icons/KorzinkaIcon";

export const Disert = () => {
  const routes = [
    {
      id: 1,
      img: PhotoOne,
      aboute: "Almendrado",
      price: "$ 350.00"
    },
    {
      id: 2,
      img: PhotoTwo,
      aboute: "Bombones",
      price: "$ 500.00"
    },
    {
      id: 3,
      img: PhotoThree,
      aboute: "Chocotorta",
      price: "$ 720.00"
    },
    {
      id: 4,
      img: PhotoFour,
      aboute: "Helado",
      price: "$ 400.00"
    },

  ]
  return (
    <div className="navbar">
      <div className="navbar__header">
        <MenuIcon />
        <SearchIcon />
      </div>
      <div className="title">
        <h1 className="title__h1">Postres</h1>
        <p className="title__p">Elige nuestros postres exquisitos </p>
      </div>
      <div className="box__menu">
        <a href="/"><div className="box__icon"><PizzaIconTwo /></div></a>
        <a href="/Somsa"><div className="box__icon"><SomsaIcon /></div></a>
        <a href="/Napitka"><div className="box__icon"><NapitkaIcon /></div></a>
        <a href="/Disert"><div className="box__icon__disert"><DisertIconTwo /></div></a>
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
              <div className="order" style={{ background: "#fff", color: "black" }}>+</div>
            </div>
          </div>
        )))}
        <div className="korzinka__disert">
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
