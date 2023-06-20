import * as actions from '../actionTypes';

export const layoutReducerState = {
    isNavbarOpen: false,
    isCartOpen: false,
    activeCategory: 1,
    activePage: 'Inicio'
}

export const layoutReducer = (state = layoutReducerState, action) => {
  switch (action.type) {
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
            activeCategory: action.payload.id
        }

    case actions.SET_ACTIVE_PAGE:
        return {
            ...state,
            activePage: action.payload.name
        }

    default:
        return state
  }
}