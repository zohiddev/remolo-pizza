import React from 'react'
const initialState = {
    cart: {
        items: []
    }
}

import { DECREASE_QTY, DELETE__CART, INCREASE_QTY, SET__CART } from './actions/cartActions'

function CartReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {

        case SET__CART:
            let isCart = state.items.some((item) => item.id === payload.product.id);

            state.items = isCart

                ? state.items.map((item) => item.id === payload.product.id ? ({ ...item, qty: item.qty + 1 }) : item) : [...state.item, { ...payload.product, qty: 1 }]

            return state

        case DELETE__CART:
            state.items = state.items.filter((item) => item.id !== payload.id);
            return state

        default:
            return state

        case INCREASE_QTY:
            state.items = state.items.map((item) => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item);
            return state
        case DECREASE_QTY:
            state.items = state.items.map((item) => item.id === payload.id ? { ...item, qty: item.qty === 1 ? 1 : item.qty - 1 } : item);
            return state



    }
}

export default CartReducer