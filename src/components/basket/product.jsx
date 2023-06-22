import React from 'react'
import { basket_products } from '../../helpers/basket_products';
import remove from "../../assets/images/icons/remove.svg"
import { store } from '../../redux/store';
import { delCartAc } from '../../redux/actions/cartAction';
function Product({products}) {
    // const {id, name, price, image, quantity } = product
    // const handleCartItemDel = (id) => {
    //     store.dispatch(delCartAc({id}))
    // }
  return (
    <div className="basket__products-items">
        {
            products.map(item => {
                return (
                    <div className="basket__products-item" key={item.id}>
                        <img src={item.img} className="basket__products-item-img" alt="basket__product" />
                        <div className="basket__products-item-text">
                            <div className="basket__products-item-span">
                                <span className="basket__products-item-name">{item.name}</span>
                                <span className="basket__products-item-price">$ {item.price}</span>
                            </div>
                            <div className="basket__products-item-quantity">
                                <button>-</button>
                                <span>{item.quantity}</span>
                                <button>+</button>
                            </div>
                        </div>
                        <img src={remove} className="basket__products-item-remove"/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product