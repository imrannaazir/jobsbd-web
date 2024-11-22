import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API,
    prepareHeaders: (headers) => {
      
      // Retrieve the token using your custom hook
      const token = localStorage.getItem("token");
      // Set headers
      headers.set("Content-Type", "application/json");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
//   tagTypes: ["bike", "booking", "user", "coupon"],
});