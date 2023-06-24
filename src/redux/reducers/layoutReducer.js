import * as actions from '../actionTypes';

export const initialState = {
    isNavbarOpen: false,
    isCartOpen: false,
    activeCategory: 1,
    activePage: 'Inicio'
}

export const layoutReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case actions.NAVBAR_TOGGLED:
            return {
                ...state,
                isNavbarOpen: !state.isNavbarOpen
            }

        case actions.CART_TOGGLED:
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            }

        case actions.SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: payload.id
            }

        case actions.SET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: payload.name
            }

        default:
            return state
    }
}