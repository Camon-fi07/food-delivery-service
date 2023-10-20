import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userProfile } from "utils/consts/apiUrls";

export const getUser = createAsyncThunk("getUser", async (token: string, thunkAPI) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(userProfile, config);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const getToken = createAsyncThunk("getToken", async (data: { path: string; value: unknown }, thunkAPI) => {
  try {
    const response = await axios.post(data.path, data.value);
    thunkAPI.dispatch(getUser(response.data.token));
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
