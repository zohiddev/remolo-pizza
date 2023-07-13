import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    isNavbarOpen: false,
    isCartOpen: false,
    activeCategory: 1,
    isCheckout: false,
    alert: false
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        toggleAside: (state) => {
            state.isNavbarOpen = !state.isNavbarOpen
        },
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen
        },
        setActiveCategory: (state, { payload }) => {
            state.activeCategory = payload
        },
        setIsCheckout: (state) => {
            state.isCheckout = true
            console.log(state.isCheckout)
        },
        removeIsCheckout: (state) => {
            state.isCheckout = false
        },
        setAlert: (state) => {
            state.alert = true
        },
        removeAlert: (state) => {
            state.alert = false
        }
    }
})

export const { toggleNavbar, toggleCart, setActiveCategory, setIsCheckout, removeIsCheckout, setAlert, removeAlert } = layoutSlice.actions;

export default layoutSlice.reducer