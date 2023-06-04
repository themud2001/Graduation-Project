import { createSlice } from "@reduxjs/toolkit";

import { authApi } from "../apis/authApi";

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
    token
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, action) => {
                localStorage.setItem("token", action.payload.token);
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.email = action.payload.email;
                state.phoneNumber = action.payload.phoneNumber;
                state.token = action.payload.token;
            });
    }
});

export const authSliceName = authSlice.name;
export const authReducer = authSlice.reducer;