import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserDto, UserState } from "utils/types/User";

const initialState: UserState = {
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
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<UserDto>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logOut: (state) => {
      state.user = Object.assign(initialState.user);
      state.isAuth = false;
    },
  },
});
export default userSlice.reducer;
