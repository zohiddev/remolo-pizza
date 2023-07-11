import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../api";
import { login } from "../../utils/urls";

export const loginRequest = createAsyncThunk(
  'user/login',
  async (data, thunkApi) => {
    const response = await Axios.post(login, data)
    return response.data

  })