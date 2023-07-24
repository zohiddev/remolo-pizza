import { createAsyncThunk } from "@reduxjs/toolkit"
import Axios from "../../api";
import { login } from "../../utils/urls";



export const loginRequest = createAsyncThunk('user/login',
    async (data, thunkApi) => {
    try {
        const response = await Axios.post(login, data)
        return response.data
    } catch (error) {
        return error
    }
    // await Axios.post(login, data)
    // .then(function(response){
    //     return response.data
    // }).catch(function(error){

    // })
});