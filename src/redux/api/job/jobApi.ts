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
  }),
});

export const { useGetAllJobsQuery, useApplyJobMutation, useGetAllAppliedJobsQuery } = jobApi;
