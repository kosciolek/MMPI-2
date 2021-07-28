import { Notification as NotificationT } from "../../hooks/notifications";

export type NotificationWithId = NotificationT & { id: string };
