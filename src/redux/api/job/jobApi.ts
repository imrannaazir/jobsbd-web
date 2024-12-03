import { baseApi } from "../api";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: (filters) => {
        const params = new URLSearchParams();
        if (Object.keys(filters).length) {
          Object.entries(filters).forEach(([key, value]) => {
            if (value) params.append(key, value);
          });
        }
        return {
          url: `/job/get-all?${params.toString()}`,
        };
      },
    }),
  }),
});

export const { useGetAllJobsQuery } = jobApi;
