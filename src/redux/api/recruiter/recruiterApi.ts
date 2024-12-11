import { baseApi } from "../api";

const recruiterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createJobPost: builder.mutation({
      query: (data) => ({
        url: "/job/create-job",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["companyJobs"],
    }),
  }),
});

export const { useCreateJobPostMutation } = recruiterApi;
