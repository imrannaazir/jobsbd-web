/* eslint-disable @typescript-eslint/ban-ts-comment */
import { baseApi } from "../api";

const followedCompanyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFollowedCompany: builder.query({
      query: () => {
        return {
          url: `/followed-companies/me/all`,
        };
      },
    }),
    
  }),
});

export const { useGetAllFollowedCompanyQuery } =
  followedCompanyApi;
