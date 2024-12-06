import { baseApi } from "../api";

const resumeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addResume: builder.mutation({
      query: (data) => ({
        url: "/resumes/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["resume"],
    }),
    updateResumeStatus: builder.mutation({
      query: (resumeId) => ({
        url: `/resumes/mark-as-default/${resumeId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["resume"],
    }),
    getAllResume: builder.query({
      query: () => {
        return {
          url: "/resumes/me/all",
        };
      },
      providesTags: ["resume"],
    }),
  }),
});

export const {
  useAddResumeMutation,
  useGetAllResumeQuery,
  useUpdateResumeStatusMutation,
} = resumeApi;
