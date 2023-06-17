import * as actions from './actionTypes';

export const productReducer = (state = [], action) => {
    switch (action.type) {
        case actions.PRODUCT_ADDED:
            return [
                ...state,
                {
                    ...action.payload
                }
            ]

        case actions.PRODUCT_REMOVED:
            return state.filter(product => product.id !== action.payload.id)

        default:
            return state
    }
}