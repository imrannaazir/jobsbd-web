import { baseApi } from "../api";

const companyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCompanyJobs: builder.query({
      query: () => ({
        url: "/job/me/all",
        method: "GET",
      }),
      providesTags: ["company"],
    }),
    deleteCompanyJob: builder.mutation({
      query: ({ jobId }) => ({
        url: `/job/${jobId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["company"],
    }),
  }),
});

export const { useGetCompanyJobsQuery, useDeleteCompanyJobMutation } =
  companyApi;
