import * as actions from './actionTypes';

export const productAdded = (id, img, name, price, discount) => {
    return {
        type: actions.PRODUCT_ADDED,
        payload: {
            id,
            img,
            name,
            price,
            discount
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