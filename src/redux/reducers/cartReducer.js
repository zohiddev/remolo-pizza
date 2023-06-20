import * as actions from '../actionTypes';

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case actions.CART_ADD:
            let isProductExist = false;

            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.payload.id) {
                    state[i].quantity++;
                    isProductExist = true;
                    break;
                }
            }

            return isProductExist ? state : [
                ...state,
                {
                    ...action.payload
                }
            ]



        case actions.CART_REMOVE:
            return state.filter(product => product.id !== action.payload.id)

        case actions.INCREASE_CART:
            return state.forEach()

        default:
            return state
    }
}