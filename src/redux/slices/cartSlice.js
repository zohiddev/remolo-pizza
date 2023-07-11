import { createSlice } from '@reduxjs/toolkit'

const localeCart = JSON.parse(localStorage.getItem('cart'))
console.log(localeCart)
const initialState = {
  items: localeCart ? localeCart : [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    setCart: (state, { payload }) => {
      let isCart = state.items.some((item) => item.id === payload.product.id)
      state.items = isCart
        ? state.items.map((item) =>
          item.id === payload.product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
        : [...state.items, { ...payload.product, qty: 1 }]
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload
    },

    deleteCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id)
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    increaseQty: (state, { payload }) => {
      state.items = state.items.map((item) =>
        item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
      )
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    decreaseQty: (state, { payload }) => {
      state.items = state.items.map((item) =>
        item.id === payload.id
          ? { ...item, qty: item.qty === 1 ? 1 : item.qty - 1 }
          : item
      )
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
  },
})

export const { setCart, deleteCart, decreaseQty, increaseQty } =
  cartSlice.actions

export default cartSlice.reducer
