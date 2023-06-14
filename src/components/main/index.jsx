import React from 'react'
import search from "../../assets/images/icons/search.svg"
import Products from './Products';
import Main_category from './Main-category';

function Main() {
  return (
    <div className="main">
      <div className="main-row">
        <div className="main__search">
              <img src={search} alt="search__img" />
              <input type="text" placeholder="Busca algo de nuestro menu..." />
          </div>
          <div className="main__title">
              <span className="main__title-text1">Categorias</span>
              <span className="main__title-text2">Elige nuestras deliciosas pizzas </span>
          </div>
          <Main_category/>
        <Products/>
      </div>
    </div>
  )
}

export default Main;