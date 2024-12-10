import { NotificationType } from "@/constant/constant-variable";
import { formatCreatedAt } from "@/lib/utils";
import { useDeleteNotificationByIdMutation } from "@/redux/api/notification/notification-api";
import { TNotification } from "@/type/notification.types";
import {
  Bell,
  Bookmark,
  Briefcase,
  CheckCircle,
  FileText,
  Loader,
  Star,
  Trash2,
  UserCheck,
  UserPlus,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
type TNotificationCardProps = {
  notification: TNotification;
};

const NotificationCard: FC<TNotificationCardProps> = ({ notification }) => {
  let NotificationIcon = Bell;

  switch (notification.type) {
    case NotificationType.APPLIED:
      NotificationIcon = FileText;
      break;
    case NotificationType.FOLLOWED:
      NotificationIcon = UserPlus;
      break;
    case NotificationType.SAVED_JOB:
      NotificationIcon = Bookmark;
      break;
    case NotificationType.SORT_LISTED:
      NotificationIcon = Star;
    case NotificationType.ACCEPTED:
      NotificationIcon = CheckCircle;
    case NotificationType.REJECTED:
      NotificationIcon = XCircle;
    case NotificationType.SAVED_PROFILE:
      NotificationIcon = UserCheck;
    default:
    case NotificationType.HIRED:
      NotificationIcon = Briefcase;
      break;
  }

  const [deleteNotification, { isLoading }] =
    useDeleteNotificationByIdMutation();
  const DeleteIcon = isLoading ? Loader : Trash2;

  const handleDelete = async () => {
    await deleteNotification(notification?.id);
  };
  return (
    <Card className="bg-blue-50/50">
      <CardContent className="flex items-start gap-4 p-4">
        <div className="rounded-full bg-blue-100 p-2">
          <NotificationIcon className="h-6 w-6 text-blue-500" />
        </div>
        <div className="flex-1 min-w-0">
          <Link href={notification.redirectUrl}>
            <h2 className="font-semibold text-gray-900">
              {notification.title}
            </h2>
          </Link>
          <p className="text-gray-600 mt-1">{notification.message}</p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-gray-500 text-sm whitespace-nowrap">
            {formatCreatedAt(notification?.createdAt)}
          </span>
          <Button
            onClick={() => handleDelete()}
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-gray-600"
          >
            <DeleteIcon className="h-5 w-5" />
            <span className="sr-only">Delete notification</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
