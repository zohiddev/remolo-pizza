import React from 'react'

function    Products({product}) {
  return (
    <div className="main__products">
        {
            product.map(item => {
                return (
                    <div className="main__product" key={item.id}>
                        <img src={item.img} alt="product__img" />
                        <div className="main__product-detail">
                            <div className="main__product-col">
                                <span className="main__product-name">{item.name}</span>
                                <span className="main__product-price">$ {item.price}.00</span>
                            </div>
                            <button className="main__product-btn">+</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products;