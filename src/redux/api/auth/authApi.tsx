import { baseApi } from "../api";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    googleAuth: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/google",
          method: "POST",
          body: data,
        };
      },
    }),
    login: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
    forgotPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body: data,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (data) => {
        console.log("Reset Password Data:", data);
        return {
          url: `/auth/reset-password`,
          method: "POST",
          body: data,
        };
      },
    }),

    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/change-password",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useGoogleAuthMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
