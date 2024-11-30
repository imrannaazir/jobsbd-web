import { baseApi } from "../api";

const industryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createIndustry: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("token");
        return {
          url: "/industry/create-industry",
          method: "POST",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useCreateIndustryMutation } = industryApi;
