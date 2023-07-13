import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'name',
    address: '',
    phone: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { key, payload }) => {
            state[key] = payload
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer