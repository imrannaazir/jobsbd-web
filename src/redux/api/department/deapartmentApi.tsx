import { baseApi } from "../api";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDepartment: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("token");
        console.log(data);
        return {
          url: "/department/create-department",
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

export const { useCreateDepartmentMutation } = departmentApi;
