import * as actions from '../actionTypes';

export const cartReducer = (state = [], action) => {
    const {type, payload} = action
    switch (type) {
        case actions.CART_ADD:
            let isProductExist = state.some(product => product.id === payload.id)

            return isProductExist ? (
                state.map(product => product.id === payload.id ? {...product, quantity: product.quantity + 1} : product)
            ) : (
                [
                    ...state,
                    {
                        ...payload
                    }
                ]
            )

        case actions.CART_REMOVE:
            return state.filter(product => product.id !== payload.id)

        case actions.INCREASE_CART:
            return state.map(product => product.id === payload.id ? {...product, quantity: product.quantity + 1} : product)

        case actions.DECREASE_CART:
            return state.map(product => product.id === payload.id && product.quantity !== 1 ? {...product, quantity: product.quantity - 1} : product)

        case actions.CLEAR_CART:
            return []

        default:
            return state
    }
}