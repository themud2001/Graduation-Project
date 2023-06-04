import { createSlice } from "@reduxjs/toolkit";

import { authApi } from "../apis/authApi";

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;

const authSlice = createSlice({
    name: "auth",
    initialState: {
        email: null,
        token
    },
    extraReducers: builder => {
        builder
            .addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, action) => {
                localStorage.setItem("token", action.payload.token);
                state.email = action.payload.email;
                state.token = action.payload.token;
            });
    }
});

export const authSliceName = authSlice.name;
export const authReducer = authSlice.reducer;