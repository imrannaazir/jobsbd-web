import { baseApi } from "../api";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    googleAuth: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/google",
          method: "POST",
          body: data,
        };
      },
    }),
    login: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useGoogleAuthMutation } =
  authApi;
