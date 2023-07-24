import { createSlice } from "@reduxjs/toolkit";

const localeSetting = localStorage.getItem('setting')

const initialState = JSON.parse(localeSetting) ? JSON.parse(localeSetting) : {

    color: '',


}


const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload,
            localStorage.setItem('setting', JSON.stringify(state)) 
        },

    }
})

export const  { setColor} = settingSlice.actions;


export default settingSlice.reducer