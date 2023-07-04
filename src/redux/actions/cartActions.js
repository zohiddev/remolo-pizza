export const SET_CART = "setCart";
export const DELETE_CART = "deleteCart";
export const INCREASE_QTY = "increase_qty";
export const DECREASE_QTY = "decrease_qty";

export const setCartAC = (payload) => ({ type: SET_CART, payload });
export const deleteCartAC = (payload) => ({ type: DELETE_CART, payload });
export const increaseQtyAC = (payload) => ({ type: INCREASE_QTY, payload });
export const decreaseQtyAC = (payload) => ({ type: DECREASE_QTY, payload });
