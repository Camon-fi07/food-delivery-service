import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
const rootReducer = combineReducers({ userReducer });

export const setupStore = () => configureStore({ reducer: rootReducer, devTools: true });
