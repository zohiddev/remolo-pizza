import React from 'react'

function MainCategory({store, activeCategory}) {
  const {categories} = store.getState();
  const handleCategoryChange = () => {
    store.setActiveCategory(categories.name);
    console.log(categories);
  }
  return (
    <div className="main__category">
      {
        categories.items.map(item => {
          return (
            <button onClick={(handleCategoryChange)} className="main__category-item active" key={item.id}>
              {item.icon}
              <span className="main__category-text">{item.name}</span>
            </button>
          )
        })
      }
    </div>
  )
}

export default MainCategory;