import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: 'red',
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload
    },
  },
})

export const { setColor } = settingsSlice.actions

export default settingsSlice.reducer
