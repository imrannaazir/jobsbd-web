type NotificationType =
  | "APPLIED"
  | "SHORT_LISTED"
  | "ACCEPTED"
  | "REJECTED"
  | "HIRED";

export type TNotification = {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  redirectUrl: string;
  senderId: string;
  receiverId: string;
  createdAt: string;
  updatedAt: string;
};
