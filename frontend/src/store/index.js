import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import {
    authApi,
    useSignInMutation,
    useSignUpMutation,
    useVerifyTokenQuery
} from "./apis/authApi";
import { authSliceName, signOut, authReducer } from "./slices/authSlice";

const store = configureStore({
    reducer: {
        [authSliceName]: authReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware()
            .concat(authApi.middleware);
    }
});

setupListeners(store.dispatch);

export {
    store,
    useSignInMutation,
    useSignUpMutation,
    useVerifyTokenQuery,
    signOut
};