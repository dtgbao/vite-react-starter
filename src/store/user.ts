import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./";
import { authApi } from "../services/auth";

// Define a type for the slice state
interface UserState {
   token?: string;
}

// Define the initial state using that type
const initialState: UserState = {};

export const userSlice = createSlice({
   name: "user",
   // `createSlice` will infer the state type from the `initialState` argument
   initialState,
   reducers: {
      setUser: (state, action: PayloadAction<UserState>) => {
         state.token = action.payload.token;
      },
   },
   extraReducers: (builder) => {
      builder
         .addMatcher(authApi.endpoints.login.matchPending, (state, action) => {
            console.log("pending", { state, action });
         })
         .addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, action) => {
               console.log("fulfilled", { state, action });
            }
         )
         .addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
            console.log("rejected", { state, action });
         });
   },
});

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.token;

export default userSlice.reducer;
