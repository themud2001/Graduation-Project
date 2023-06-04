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

const addToStore = (state, action) => {
    localStorage.setItem("token", action.payload.token);
    state.firstName = action.payload.firstName;
    state.lastName = action.payload.lastName;
    state.email = action.payload.email;
    state.phoneNumber = action.payload.phoneNumber;
    state.token = action.payload.token;
};

const removeFromStore = (state) => {
    localStorage.removeItem("token");
    state.firstName = null;
    state.lastName = null;
    state.email = null;
    state.phoneNumber = null;
    state.token = null;
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signOut: state => {
            removeFromStore(state);
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, action) => {
                addToStore(state, action);
            })
            .addMatcher(authApi.endpoints.verifyToken.matchFulfilled, (state, action) => {
                addToStore(state, action);
            })
            .addMatcher(authApi.endpoints.verifyToken.matchRejected, (state) => {
                removeFromStore(state);
            });
    }
});

export const authSliceName = authSlice.name;
export const { signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;