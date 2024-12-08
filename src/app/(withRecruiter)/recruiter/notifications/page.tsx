"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCreatedAt } from "@/lib/utils";
import { baseApi } from "@/redux/api/api";
import { useGetAllNotificationsQuery } from "@/redux/api/notification/notification-api";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { store } from "@/redux/store";
import { TNotification } from "@/type/notification.types";
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Loader,
  Trash2,
} from "lucide-react";
import { useEffect, useMemo } from "react";
import { io } from "socket.io-client";

const NotificationPage = () => {
  const { data, isFetching } = useGetAllNotificationsQuery("");
  const notifications = (data?.data || []) as TNotification[];
  const user = useAppSelector(selectCurrentUser);
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
        console.log({ data });
        store.dispatch(baseApi.util.invalidateTags(["notification"]));
      });
    }
  }, [socket, user]);
  return (
    <main className="relative z-20">
      <div className="w-full min-h-screen flex items-center justify-center">
        {isFetching ? (
          <Loader />
        ) : (
          <div className=" w-full bg-background rounded-md mx-auto p-4 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Notifications</h1>
              <div className="flex gap-2">
                <Button variant="outline">EARLIER</Button>
                <Button variant="default">RECENT</Button>
              </div>
            </div>

            <div className="space-y-4">
              {notifications.map((notification) => (
                <Card key={notification.id} className="bg-blue-50/50">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Building2 className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-semibold text-gray-900">
                        {notification.title}
                      </h2>
                      <p className="text-gray-600 mt-1">
                        {notification.message}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-gray-500 text-sm whitespace-nowrap">
                        {formatCreatedAt(notification?.createdAt)}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Trash2 className="h-5 w-5" />
                        <span className="sr-only">Delete notification</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
              <Button variant="default">1</Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          </div>
        )}{" "}
      </div>
    </main>
  );
};

export default NotificationPage;
