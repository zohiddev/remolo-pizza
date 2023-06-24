export const SET__CART = 'setcart'
export const DELETE__CART = 'deletecart'
export const ACTIVE__CART = 'setActiveCategory'
export const INCREASE_QTY = 'increase_qty'
export const DECREASE_QTY = 'decrease_qty'


export const setCartAc = (payload) => ({ type: SET__CART, payload })
export const deleteCartAc = (payload) => ({ type: DELETE__CART, payload })
export const activeCartAc = (payload) => ({ type: ACTIVE__CART, payload })
export const increaseQtyAc = (payload) => ({ type: INCREASE_QTY, payload })
export const decreaseQtyAc = (payload) => ({ type: DECREASE_QTY, payload })
