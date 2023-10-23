import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { basket } from "utils/consts/apiUrls";

export const getCart = createAsyncThunk("getCart", async (token: string, thunkAPI) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(basket, config);
    return response.data;
  } catch (err) {
    const error = err as Error;
    return thunkAPI.rejectWithValue(error.message);
  }
});
