import { formatCreatedAt } from "@/lib/utils";
import { TNotification } from "@/type/notification.types";
import { Building2, Trash2 } from "lucide-react";
import { FC } from "react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
type TNotificationCardProps = {
  notification: TNotification;
};
const NotificationCard: FC<TNotificationCardProps> = ({ notification }) => {
  return (
    <Card className="bg-blue-50/50">
      <CardContent className="flex items-start gap-4 p-4">
        <div className="rounded-full bg-blue-100 p-2">
          <Building2 className="h-6 w-6 text-blue-500" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-semibold text-gray-900">{notification.title}</h2>
          <p className="text-gray-600 mt-1">{notification.message}</p>
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
  );
};

export default NotificationCard;
