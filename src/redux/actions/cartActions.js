import * as actions from '../actionTypes';

export const cartAdd = (product) => {
    return {
        type: actions.CART_ADD,
        payload: {
            ...product,
            quantity: 1
        }
    }
}

export const cartRemove = (id) => {
    return {
        type: actions.CART_REMOVE,
        payload: {
            id
        }
    }
}

export const increaseCart = (id) => {
    return {
        type: actions.INCREASE_CART,
        payload: {
            id
        }
    }
}

export const decreaseCart = (id) => {
    return {
        type: actions.DECREASE_CART,
        payload: {
            id
        }
    }
}

export const clearCart = () => {
    return {
        type: actions.CLEAR_CART
    }
}