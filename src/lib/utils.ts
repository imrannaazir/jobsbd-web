import { clsx, type ClassValue } from "clsx";
import { formatDistanceToNow, parseISO } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCreatedAt = (timestamp: string): string => {
  const date = parseISO(timestamp);
  return formatDistanceToNow(date, {
    addSuffix: true,
  });
};
