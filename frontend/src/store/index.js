import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import {
    authApi,
    useSignInMutation,
    useSignInWaterMutation,
    useSignUpMutation
} from "./apis/authApi";

const store = configureStore({
    reducer: {
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
    useSignInWaterMutation,
    useSignUpMutation
};