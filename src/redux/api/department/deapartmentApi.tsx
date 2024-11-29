import { baseApi } from "../api";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDepartment: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/department",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateDepartmentMutation } = authApi;
