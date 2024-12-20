/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TAppliedStatus } from "@/type/job.types";
import { baseApi } from "../api";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: (params: string) => {
        return {
          url: `/job/get-all?${params}`,
        };
      },
      providesTags: ["job"],
    }),
    applyJob: builder.mutation({
      query: (jobId) => {
        return {
          url: "/applied-jobs/apply",
          method: "POST",
          body: { jobId },
        };
      },
      invalidatesTags: ["job", "appliedJob"],
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

    getAllJobApplicantsOfJob: builder.query({
      query: (jobId: string) => ({
        url: `/applied-jobs/applicants/${jobId}`,
      }),
      providesTags: ["appliedJob"],
    }),
    getJobsCount: builder.query({
      query: () => ({
        url: `/job/count`,
      }),
      providesTags: ["job"],
    }),
    getSingleJobDetails: builder.query({
      query: (jobId: string) => ({
        url: `/job/get-single/${jobId}`,
      }),
      providesTags: ["job"],
    }),
    updateApplyStatus: builder.mutation({
      query: ({
        appliedJobId,
        status,
      }: {
        appliedJobId: string;
        status: TAppliedStatus;
      }) => ({
        url: `/applied-jobs/update-status/${appliedJobId}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["appliedJob"],
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useApplyJobMutation,
  useGetAllAppliedJobsQuery,
  useGetAllMySavedJobsQuery,
  useToggleInSavedJobMutation,
  useGetAllJobApplicantsOfJobQuery,
  useUpdateApplyStatusMutation,
  useGetJobsCountQuery,
  useGetSingleJobDetailsQuery,
} = jobApi;
