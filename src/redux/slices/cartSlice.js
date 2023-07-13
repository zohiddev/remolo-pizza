import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, { payload }) => {
            let isProductExist = state.items.some(product => product.id === payload.id)

            state.items = isProductExist ? (
                state.items.map(product => product.id === payload.id ? {...product, quantity: product.quantity + 1} : product)
            ) : (
                [
                    ...state.items,
                    {
                        ...payload,
                        quantity: 1
                    }
                ]
            )
        },
        removeCart: (state, { payload }) => {
            state.items = state.items.filter(product => product.id !== payload)
        },
        increaseCart: (state, { payload }) => {
            state.items = state.items.map(product => product.id === payload ? {...product, quantity: product.quantity + 1} : product)
        },
        decreaseCart: (state, { payload }) => {
            state.items = state.items.map(product => product.id === payload ? {...product, quantity: product.quantity - 1} : product)
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { setCart, removeCart, increaseCart, decreaseCart, clearCart } = cartSlice.actions

export default cartSlice.reducer