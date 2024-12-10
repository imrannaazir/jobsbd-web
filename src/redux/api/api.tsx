/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import Swal from "sweetalert2";
import { logout, setUser } from "../features/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_API,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    Swal.fire({
      title: "Error",
      // @ts-ignore
      text: result.error.data.message,
    });
  }
  if (result?.error?.status === 403) {
    Swal.fire({
      title: "Error",
      // @ts-ignore
      text: result.error.data.message,
    });
  }
  if (result?.error?.status === 401) {
    //* Send Refresh

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/refresh-token`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user; // @ts-ignore

      api.dispatch(
        setUser({
          user,
          token: data.data.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: [
    "candidate",
    "education",
    "skill",
    "experience",
    "project",
    "certificate",
    "department",
    "industry",
    "recruiter",
    "savedJobs",
    "resume",
    "language",
    "company",
    "followedCompany",
  ],
});
