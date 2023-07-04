import { createSlice } from '@reduxjs/toolkit'
import { getCategories } from '../actions/categoryActions'

const initialState = {
  activeCategory: 1,
  items: [],
  loading: false,
  error: '',
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    },
  },
  extraReducers: {
    [getCategories.fulfilled.type]: (state, action) => {
      state.items = action.payload
      state.loading = false
    },
    [getCategories.pending.type]: (state) => {
      state.loading = true
    },
  },
})

export const { setActiveCategory, setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
