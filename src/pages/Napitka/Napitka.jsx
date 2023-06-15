import React from "react";
import MenuIcon from '../../icons/MenuIcon'
import SearchIcon from '../../icons/SearchIcon'
import PizzaIconTwo from '../../icons/PizzaIconTwo'
import SomsaIcon from '../../icons/SomsaIcon'
import NapitkaIconTwo from '../../icons/NapitkaIconTwo'
import DisertIcon from '../../icons/DisertIcon'
import PhotoOne from '../../img/Rectangle 19 (7).png'
import PhotoTwo from '../../img/Rectangle 19 (8).png'
import PhotoThree from '../../img/Rectangle 19 (9).png'
import PhotoFour from '../../img/Rectangle 19 (10).png'
import PhotoFive from '../../img/Rectangle 19 (11).png'
import KorzinkaIcon from "../../icons/KorzinkaIcon";

export const Napitka = () => {
  const routes = [
    {
      id: 1,
      img: PhotoOne,
      aboute: "Cerveza 437ml",
      price: "$ 105.00"
    },
    {
      id: 2,
      img: PhotoTwo,
      aboute: "Agua 500ml",
      price: "$ 95.00"
    },
    {
      id: 3,
      img: PhotoThree,
      aboute: "Coca-Cola 500ml",
      price: "$ 120.00"
    },
    {
      id: 4,
      img: PhotoFour,
      aboute: "Pepsi 500ml",
      price: "$ 100.00"
    },
    {
      id: 5,
      img: PhotoFive,
      aboute: "Cepita naranja 1L",
      price: "$ 170.00"
    },
  ]
  return (
    <div className="navbar">
      <div className="navbar__header">
        <MenuIcon />
        <SearchIcon />
      </div>
      <div className="title">
        <h1 className="title__h1">Bebidas</h1>
        <p className="title__p">Elige nuestras bebidas refrescantes </p>
      </div>
      <div className="box__menu">
        <a href="/"><div className="box__icon"><PizzaIconTwo /></div></a>
        <a href="/Somsa"><div className="box__icon"><SomsaIcon /></div></a>
        <a href="/Napitka"><div className="box__icon__napitka"><NapitkaIconTwo /></div></a>
        <a href="/Disert"><div className="box__icon"><DisertIcon /></div></a>
      </div>
      <div className="box__card">
        {routes.map((item => (
          <div key={item.id} className="card">
            <img src={item.img} width="156px" height="157px" />
            <div className="card__title">
              <h1 className="card__aboute">{item.aboute}</h1>
              <h1 className="card__price" style={{ color: "#50C2E7" }}>{item.price}</h1>
            </div>
            <div className="box__order">
              <div className="order" style={{ background: "#fff", color: "black" }}>+</div>
            </div>
          </div>
        )))}
        <div className="korzinka__napitka">
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