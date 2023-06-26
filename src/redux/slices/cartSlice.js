import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: {
        items: []
    }
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, { payload }) => {
            let isCart = state.items.some((item) => item.id === payload.product.id);

            state.items = isCart

                ? state.items.map((item) => item.id === payload.product.id ? ({ ...item, qty: item.qty + 1 }) : item) : [...state.item, { ...payload.product, qty: 1 }]

        },
        deleteCart: (state, { payload }) => {
            state.items = state.items.filter((item) => item.id !== payload.id);
        },
        increaseQty: (state, { payload }) =>{
            state.items = state.items.map((item) => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item);

        },
        decreaseQty: (state, { payload }) =>{
            state.items = state.items.map((item) => item.id === payload.id ? { ...item, qty: item.qty === 1 ? 1 : item.qty - 1 } : item);
        },
    }
})
export default cartSlice.reducer

export const {setCart, dele, decreaseQty,increaseQty} = cartSlice.actions