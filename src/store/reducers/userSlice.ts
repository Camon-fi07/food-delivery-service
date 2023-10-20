import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserDto, UserState } from "utils/types/User";
import { getToken, getUser } from "./UserAsyncActions";
import { AxiosError } from "axios";

const initialState: UserState = {
  data: {
    user: {
      id: "",
      addressId: "",
      birthDate: "",
      email: "",
      fullName: "",
      gender: "",
      password: "",
      phoneNumber: "",
    },
    token: "",
  },
  error: "",
  isAuth: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: () => {
      return Object.assign(initialState);
    },
  },
  extraReducers: {
    [getUser.pending.type]: (state) => {
      state.error = "";
      state.isLoading = true;
    },
    [getUser.fulfilled.type]: (state, action: PayloadAction<UserDto>) => {
      state.data.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
    },
    [getUser.rejected.type]: (state, action: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = action.payload.message;
      console.log(action.payload);
    },
    [getToken.pending.type]: (state) => {
      state.error = "";
      state.isLoading = true;
    },
    [getToken.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.data.token = action.payload;
      state.isLoading = false;
    },
    [getToken.rejected.type]: (state, action: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});
export default userSlice.reducer;
