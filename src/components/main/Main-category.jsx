import React from 'react'

function Main_category({store, activeCategory}) {
  const {categories} = store.getState();
  const handleCategoryChange = () => {
    store.setActiveCategory(categories.name);
  }
  return (
    <div className="main__category">
      {
        categories.items.map(item => {
          return (
            <button onClick={(handleCategoryChange)} className={`main__category-item ${item.id === activeCategory ? "active" : ""}`} key={item.id}>
              <img src={item.icon} alt="category__icon" />
              <span className="main__category-text">{item.name}</span>
            </button>
          )
        })
      }
    </div>
  )
}

export default Main_category;