"use client";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/ui/empty";
import NotificationCard from "@/components/ui/notification-card.tsx";
import NotificationLoader from "@/components/ui/notification-loader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  useGetAllNotificationsQuery,
  useMarkNotificationsReadMutation,
} from "@/redux/api/notification/notification-api";
import { useAppDispatch } from "@/redux/hooks";
import { TNotification } from "@/type/notification.types";
import { ReactNode, useEffect } from "react";

const NotificationPageContent = () => {
  const dispatch = useAppDispatch();
  const { data, isFetching, isError } = useGetAllNotificationsQuery("");
  const [markNotificationsRead, { isLoading }] =
    useMarkNotificationsReadMutation();
  const notifications = (data?.data || []) as TNotification[];

  useEffect(() => {
    const handleMarkAsRead = async () => {
      await markNotificationsRead("");
    };

    handleMarkAsRead();
  }, [dispatch, markNotificationsRead]);

  let content: ReactNode;
  if (isFetching || isLoading) {
    content = (
      <div className="space-y-4">
        {Array.from({
          length: 10,
        })?.map((_item, i) => (
          <NotificationLoader key={i} />
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <div className="h-full flex items-center justify-center text-red-500">
        <p>Something went wrong!</p>
      </div>
    );
  } else if (!isFetching && notifications?.length < 1) {
    content = (
      <div className="h-full ">
        <Empty title="notification" />
      </div>
    );
  } else {
    content = (
      <div className="space-y-4">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification?.id}
            notification={notification}
          />
        ))}
      </div>
    );
  }
  return (
    <main className="relative z-20">
      <div className="w-full   flex items-center justify-center ">
        <div className=" w-full  bg-background rounded-md mx-auto p-4 ">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Notifications</h1>
            <div className="flex gap-2">
              <Button variant="default">RECENT</Button>
            </div>
          </div>
          <Separator className="my-4" />
          <ScrollArea className="h-[calc(100vh-225px)]">
            <div className="h-full">{content}</div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default NotificationPageContent;
