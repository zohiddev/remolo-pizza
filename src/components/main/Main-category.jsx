import React from 'react'
import { categories } from '../../helpers/categories';

function Main_category() {
  return (
    <div className="main__category">
      {
        categories.map(item => {
          return (
            <div className="main__category-item" key={item.id}>
              <img src={item.icon} alt="category__icon" />
              <span className="main__category-text">{item.name}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Main_category;