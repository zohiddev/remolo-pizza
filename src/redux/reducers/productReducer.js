import * as actions from '../actionTypes';

export const productReducer = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case actions.PRODUCT_ADDED:
            return [
                ...state,
                {
                    ...payload
                }
            ]

        case actions.PRODUCT_REMOVED:
            return state.filter(product => product.id !== payload.id)

        default:
            return state
    }
}