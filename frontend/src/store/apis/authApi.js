import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BACKEND_AUTH_URL
    }),
    endpoints: builder => {
        return {
            signIn: builder.mutation({
                query: formData => {
                    return {
                        url: "/signin",
                        method: "POST",
                        body: formData
                    }
                }
            }),
            signUp: builder.mutation({
                query: formData => {
                    return {
                        url: "/signup",
                        method: "POST",
                        body: formData
                    }
                }
            }),
        }
    }
});

export const {
    useSignInMutation,
    useSignUpMutation
} = authApi;
export { authApi };