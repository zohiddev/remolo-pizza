import { createSlice } from '@reduxjs/toolkit'
import { login } from '../actions'
import { deleteLocalStorage, updateLocalStorage } from '../../utils'

const localStorageKey = 'tokens'
const localState = localStorage.getItem(localStorageKey)

const initialState = localState ? JSON.parse(localState) : {
    tokens: {
        accessToken: '',
        refreshToken: ''
    },
    isAuthenticated: false,
    isLoading: false,
    isError: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTokens: (state, { payload }) => {
            state.tokens = payload
            updateLocalStorage(localStorageKey, state)
        },
        setAuthenticated: (state, { payload }) => {
            state.isAuthenticated = payload
            updateLocalStorage(localStorageKey, state)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, { payload }) => {
            const { status, data } = payload
            if (status === 200) {
                state.tokens = data
                state.isAuthenticated = true
                state.isError = false
                updateLocalStorage(localStorageKey, state)
            } else {
                state.isAuthenticated = false
                state.isError = true
                deleteLocalStorage(localStorageKey)
            }
            state.isLoading = false
        }),
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(login.rejected, (state) => {
            state.isError = true
        })
    }
})

export const {
    setTokens,
    setAuthenticated
} = authSlice.actions

export default authSlice.reducer