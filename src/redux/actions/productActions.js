import * as actions from '../actionTypes';

export const productAdded = (product) => {
    return {
        type: actions.PRODUCT_ADDED,
        payload: {
            ...product
        }
    }
}

export const productRemoved = (id) => {
    return {
        type: actions.PRODUCT_REMOVED,
        payload: {
            id
        }
    }
}