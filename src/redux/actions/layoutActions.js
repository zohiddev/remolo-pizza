import * as actions from '../actionTypes';

export const navbarToggled = () => {
    return {
        type: actions.NAVBAR_TOGGLED
    }
}

export const cartToggled = () => {
    return {
        type: actions.CART_TOGGLED
    }
}

export const setActiveCategory = (id) => {
    return {
        type: actions.SET_ACTIVE_CATEGORY,
        payload: {
            id
        }
    }
}

export const setActivePage = (name) => {
    return {
        type: actions.SET_ACTIVE_PAGE,
        payload: {
            name
        }
    }
}