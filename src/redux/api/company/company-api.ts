import { baseApi } from "../api";

const candidateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyCompany: builder.query({
      query: () => ({
        url: "/companies/me",
      }),
      providesTags: ["company"],
    }),
    getCompanyById: builder.query({
      query: (companyId: string) => ({
        url: `/companies/get-single/${companyId}`,
      }),
      providesTags: ["company"],
    }),
    updateCompany: builder.mutation({
      query: (data) => ({
        url: "/companies/update",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["company"],
    }),

    toggleCompanyFollow: builder.mutation({
      query: (companyId: string) => ({
        url: `/followed-companies/follow`,
        method: "POST",
        body: {
          companyId,
        },
      }),
      invalidatesTags: ["followedCompany"],
    }),
    getAllMyFollowedCompany: builder.query({
      query: () => ({
        url: "/followed-companies/me/all",
      }),
      providesTags: ["followedCompany"],
    }),
  }),
});

export const {
  useGetMyCompanyQuery,
  useUpdateCompanyMutation,
  useGetCompanyByIdQuery,
  useToggleCompanyFollowMutation,
  useGetAllMyFollowedCompanyQuery,
} = candidateApi;
