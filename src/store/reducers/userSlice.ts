import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserInfo } from "utils/types/User";

const initialState: User = {
  addressId: "",
  birthDate: "",
  email: "",
  fullName: "",
  gender: "",
  password: "",
  phoneNumber: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.phoneNumber = action.payload.phoneNumber;
      state.password = action.payload.password;
      state.addressId = action.payload.addressId;
      state.gender = action.payload.gender;
      state.birthDate = action.payload.birthDate;
    },
  },
});
export default userSlice.reducer;
