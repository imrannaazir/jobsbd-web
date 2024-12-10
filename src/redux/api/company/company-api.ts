import { TBasicCompanyDetailsValues } from "@/schemas/profile-form-schema";
import { baseApi } from "../api";

const candidateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyCompany: builder.query({
      query: () => ({
        url: "/companies/me",
      }),
      providesTags: ["company"],
    }),
    updateCompany: builder.mutation({
      query: (data: TBasicCompanyDetailsValues) => ({
        url: "/companies/update",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["company"],
    }),
    // getAllCompanies
  }),
});

export const { useGetMyCompanyQuery, useUpdateCompanyMutation } = candidateApi;
