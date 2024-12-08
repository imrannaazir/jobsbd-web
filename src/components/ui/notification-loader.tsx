import { cn } from "@/lib/utils"; // Utility for conditional classnames
import { FC } from "react";
import { Card, CardContent } from "./card";

type NotificationCardSkeletonProps = {
  className?: string;
};

const NotificationLoader: FC<NotificationCardSkeletonProps> = ({
  className,
}) => {
  return (
    <Card className={cn("bg-blue-50/50 animate-pulse", className)}>
      <CardContent className="flex items-start gap-4 p-4">
        {/* Icon Skeleton */}
        <div className="rounded-full bg-blue-100 p-2">
          <div className="h-6 w-6 bg-blue-200 rounded-full" />
        </div>

        {/* Content Skeleton */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Title Skeleton */}
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          {/* Message Skeleton */}
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        </div>

        {/* Actions Skeleton */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Timestamp Skeleton */}
          <div className="h-3 bg-gray-300 rounded w-16"></div>
          {/* Delete Button Skeleton */}
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationLoader;
