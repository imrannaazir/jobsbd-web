import { baseApi } from "../api";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: (filters) => {
        const params = new URLSearchParams();
        if (Object.keys(filters).length) {
          Object.entries(filters).forEach(([key, value]) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore

            if (value) params.append(key, value);
          });
        }
        return {
          url: `/job/get-all?${params.toString()}`,
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
  useToggleInSavedJobMutation,
  useGetAllMySavedJobsQuery,
} = jobApi;
