import { createSlice } from '@reduxjs/toolkit'
import { loginRequest } from '../actions/authActions'

const localeUser = localStorage.getItem('tokens')

// const initialState = JSON.parse(localeUser)
//   ? JSON.parse(localeUser)
//   : {

//     }

const initialState = {
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  loading: false,
  isAuth: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state[action.payload.key] = action.payload.value
      localStorage.setItem('tokens', JSON.stringify(state))
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload
    },
  },
  extraReducers: {
    [loginRequest.pending.type]: (state, action) => {
      state.loading = true
    },
    [loginRequest.fulfilled.type]: (state, action) => {
      console.log(action, 'tokenssssss')
      state.tokens = {
        accessToken: action.payload.access,
        refreshToken: action.payload.refresh,
      }
      state.loading = false
    },
  },
})

export const { setUser, setAuth } = authSlice.actions

export default authSlice.reducer
