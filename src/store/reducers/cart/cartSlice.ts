import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DishBasketDto } from "utils/types/Dish";
import { CartState } from "utils/types/CartInfo";
import { getCart } from "./cartAsyncActions";

const initialState: CartState = {
  dishes: [],
  isLoading: false,
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<DishBasketDto>) => {
      state.dishes.push(action.payload);
    },
  },
  extraReducers: {
    [getCart.pending.type]: (state) => {
      state.error = "";
      state.isLoading = true;
    },
    [getCart.fulfilled.type]: (state, action: PayloadAction<DishBasketDto[]>) => {
      state.dishes = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    [getCart.rejected.type]: (state) => {
      state.isLoading = false;
      state.dishes = [];
      state.error = "Не удалось загрузить корзину, обновите страницу";
    },
  },
});

export default cartSlice.reducer;
