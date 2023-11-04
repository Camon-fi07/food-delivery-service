import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserDto, UserState } from "utils/types/User";
import { getToken, getUser } from "./UserAsyncActions";

const initialState: UserState = {
  data: {
    user: {
      id: "",
      address: "",
      birthDate: "",
      email: "",
      fullName: "",
      gender: "",
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
    clear: () => {
      return Object.assign(initialState);
    },
    deleteError: (state) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.error = "";
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<UserDto>) => {
        state.data.user = action.payload;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "";
        state.data = initialState.data;
        state.isAuth = false;
      })
      .addCase(getToken.pending, (state) => {
        state.error = "";
        state.isLoading = true;
      })
      .addCase(getToken.fulfilled, (state, action: PayloadAction<string>) => {
        state.data.token = action.payload;
        state.isLoading = false;
      })
      .addCase(getToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "";
      });
  },
});
export default userSlice.reducer;
