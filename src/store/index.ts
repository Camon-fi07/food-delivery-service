import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducers/user/userSlice";
import cartReducer from "./reducers/cart/cartSlice";

const persistConfig = {
  key: "user",
  version: 1,
  storage,
};

const userPersistedReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({ userReducer: userPersistedReducer, cartReducer: cartReducer });

export const setupStore = () => configureStore({ reducer: rootReducer, devTools: true });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
