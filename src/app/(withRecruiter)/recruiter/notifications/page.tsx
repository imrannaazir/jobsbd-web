"use client";

import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

const RecruiterNotificationsPage = () => {
  const user = useAppSelector(selectCurrentUser);
  const socketRef = useRef<Socket | null>(null);
  const baseApi = process.env.NEXT_PUBLIC_BASE_API;
  useEffect(() => {
    if (!user) {
      return;
    }
    socketRef.current = io(`${baseApi}`, {
      withCredentials: true,
    });

    const socket = socketRef.current;
    socket.emit("join", user.id);
    socket.on("newNotification", (notification) => {
      console.log(notification);
    });
    return () => {
      socket.disconnect();
    };
  }, [baseApi, user]);
  return (
    <div>
      RecruiterNotificationsPage Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Debitis autem facilis ad quis consectetur in dolores,
      provident magnam odit eligendi suscipit ipsum enim. Adipisci voluptatem,
      consequatur quae ad minima recusandae. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Eveniet explicabo doloribus vel nemo minima?
      Culpa, non totam aliquam dolore molestias velit dolorem doloribus quam
      dolores quos, temporibus voluptas assumenda sit. Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Aperiam et beatae dignissimos. Sunt
      sequi quia rem ad et tempore rerum, eum eligendi vero. Ullam, possimus
      eius et ratione molestias exercitationem.
    </div>
  );
};

export default RecruiterNotificationsPage;
