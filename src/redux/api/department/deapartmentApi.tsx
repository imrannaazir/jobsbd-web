import { baseApi } from "../api";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDepartment: builder.mutation({
      query: (data) => {
        return {
          url: "/department/create-department",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["department"],
    }),
    deleteDepartment: builder.mutation({
      query: (departmentId) => ({
        url: `/department/${departmentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["department"],
    }),
    getDepartment: builder.query({
      query: () => {
        return {
          url: "/department",
        };
      },
      providesTags: ["department"],
    }),
  }),
});

export const {
  useCreateDepartmentMutation,
  useDeleteDepartmentMutation,
  useGetDepartmentQuery,
} = departmentApi;
