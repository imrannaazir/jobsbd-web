/* eslint-disable @typescript-eslint/ban-ts-comment */
import { baseApi } from "../api";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: (filters) => {
        const params = new URLSearchParams();
        if (Object.keys(filters).length) {
          Object.entries(filters).forEach(([key, value]) => {
            // @ts-ignore
            if (value) params.append(key, value);
          });
        }
        return {
          url: `/job/get-all?${params.toString()}`,
        };
      },
    }),
    applyJob: builder.mutation({
      query: (jobId) => {
        return {
          url: "/applied-jobs/apply",
          method: "POST",
          body: { jobId },
        };
      },
    }),
    getAllAppliedJobs: builder.query({
      query: () => {
        return {
          url: "/applied-jobs/me",
        };
      },
    }),
    toggleInSavedJob: builder.mutation({
      query: (jobId: string) => ({
        url: "/saved-jobs/toggle",
        method: "POST",
        body: { jobId },
      }),
      invalidatesTags: ["savedJobs"],
    }),

    getAllMySavedJobs: builder.query({
      query: () => ({
        url: "/saved-jobs/me/all",
      }),
      providesTags: ["savedJobs"],
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useApplyJobMutation,
  useGetAllAppliedJobsQuery,
  useGetAllMySavedJobsQuery,
  useToggleInSavedJobMutation,
} = jobApi;
