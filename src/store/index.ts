import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import userReducer from "./user";
import { api } from "../services/api";

export const store = configureStore({
   devTools: import.meta.env.MODE === "development",
   reducer: {
      [api.reducerPath]: api.reducer,
      user: userReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user: UserState,etc}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
