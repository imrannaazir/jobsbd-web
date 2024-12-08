import { userRole } from "@/constant/constant-variable";
import { baseApi } from "@/redux/api/api";
import { useGetAllNotificationsQuery } from "@/redux/api/notification/notification-api";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import {
  selectNotificationState,
  setUnreadCount,
} from "@/redux/features/notification/notification-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { store } from "@/redux/store";
import { TNotification } from "@/type/notification.types";
import { BellIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { io } from "socket.io-client";

export const NotificationBell: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data, isFetching } = useGetAllNotificationsQuery("");
  const { unreadCount } = useAppSelector(selectNotificationState);
  const user = useAppSelector(selectCurrentUser);
  const redirectPath =
    user?.role === userRole.CANDIDATE ? "" : "/recruiter/notifications";

  const socket = useMemo(
    () =>
      io("http://localhost:5000", {
        withCredentials: true,
      }),
    []
  );

  useEffect(() => {
    socket.on("connect", () => {
      console.log("User connected: ", socket.id);
    });

    if (user!.id) {
      socket.emit("join", user?.id);

      socket.on("newNotification", (data) => {
        console.log(data);
        console.log({ data });
        store.dispatch(baseApi.util.invalidateTags(["notification"]));
      });
    }
  }, [socket, user]);

  useEffect(() => {
    const notifications = (data?.data || []) as TNotification[];
    const unreadNotifications = notifications?.filter(
      (notification) => !notification.isRead
    );
    dispatch(setUnreadCount(unreadNotifications?.length));
  }, [data?.data, dispatch]);

  return (
    <div
      onClick={() => router.push(redirectPath)}
      className="relative cursor-pointer"
    >
      <BellIcon className="h-6 w-6 text-gray-600" />
      {isFetching && (
        <span className="absolute -top-1 -right-1 ">
          <span className="relative  flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        </span>
      )}

      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-xs text-white">
          {unreadCount}
        </span>
      )}
    </div>
  );
};
