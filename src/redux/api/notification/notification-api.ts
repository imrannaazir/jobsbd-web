/* eslint-disable @typescript-eslint/ban-ts-comment */
import { baseApi } from "../api";

const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query({
      query: () => ({
        url: `/notifications/me/get-all`,
      }),
      providesTags: ["notification"],
    }),
    markNotificationsRead: builder.mutation({
      query: () => ({
        url: `/notifications/mark-as-read`,
        method: "PATCH",
      }),
      invalidatesTags: ["notification"],
    }),
  }),
});

export const { useGetAllNotificationsQuery, useMarkNotificationsReadMutation } =
  notificationApi;
