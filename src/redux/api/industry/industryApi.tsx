import { baseApi } from "../api";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createIndustry: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/industry/create-industry",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateIndustryMutation } = authApi;
