import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userProfile } from "utils/consts/apiUrls";
import { Authorization, UserDto } from "utils/types/User";
import { getCart } from "../cart/cartAsyncActions";

export const getUser = createAsyncThunk("getUser", async (token: string, thunkAPI) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(userProfile, config);
    thunkAPI.dispatch(getCart(token));
    return response.data;
  } catch (err) {
    const error = err as Error;
    throw error;
  }
});

export const getToken = createAsyncThunk(
  "getToken",
  async (data: { path: string; value: UserDto | Authorization }, thunkAPI) => {
    try {
      const response = await axios.post(data.path, data.value);
      thunkAPI.dispatch(getUser(response.data.token));
      return response.data.token;
    } catch (err) {
      const error = err as Error;
      throw error;
    }
  },
);
