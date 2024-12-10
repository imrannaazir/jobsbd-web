"use server";

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export const getUserSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
