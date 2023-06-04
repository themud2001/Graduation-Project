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
            verifyToken: builder.query({
                query: token => {
                    return {
                        url: "/verify-token",
                        method: "GET",
                        headers: { "Authorization": `Bearer ${token}` }
                    };
                }
            })
        }
    }
});

export const {
    useSignInMutation,
    useSignUpMutation,
    useVerifyTokenQuery
} = authApi;
export { authApi };