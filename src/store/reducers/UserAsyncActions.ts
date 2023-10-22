import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userProfile } from "utils/consts/apiUrls";
import { Authorization, UserDto } from "utils/types/User";

export const getUser = createAsyncThunk("getUser", async (token: string, thunkAPI) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(userProfile, config);
    return response.data;
  } catch (err) {
    const error = err as Error;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getToken = createAsyncThunk(
  "getToken",
  async (data: { path: string; value: UserDto | Authorization }, thunkAPI) => {
    try {
      const response = await axios.post(data.path, data.value);
      thunkAPI.dispatch(getUser(response.data.token));
      return response.data;
    } catch (err) {
      const error = err as Error;
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
