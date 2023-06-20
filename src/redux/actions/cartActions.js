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