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
    deleteNotificationById: builder.mutation({
      query: (notificationId: string) => ({
        url: `/notifications/delete/${notificationId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["notification"],
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useMarkNotificationsReadMutation,
  useDeleteNotificationByIdMutation,
} = notificationApi;
