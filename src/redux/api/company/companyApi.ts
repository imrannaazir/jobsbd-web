import { baseApi } from "../api";

const companyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCompanies: builder.query({
      query: (filterString: string) => ({
        url: `/companies/all?${filterString}`,
        method: "GET",
      }),
      providesTags: ["company"],
    }),
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

export const {useGetAllCompaniesQuery, useGetCompanyJobsQuery, useDeleteCompanyJobMutation } =
  companyApi;
