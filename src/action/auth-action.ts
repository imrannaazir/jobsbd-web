"use server";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { cookies } from "next/headers";

export const removeRefreshToken = async () => {
  const Cookies = await cookies();
  const refreshTokenCookie = await Cookies.delete("refreshToken");
  const TokenCookie = await Cookies.delete("token");
};

export const saveTokenInCookies = async (token: string) => {
  const Cookies = await cookies();
  const setCookie = await Cookies.set("token", token);
  const getCookies = await Cookies.get("token");
};

export const getTokenFromCookies = async () => {
  const Cookies = await cookies();
  const token = await Cookies.get("token")?.value;
  if (token) {
    return token;
  } else {
    return "";
  }
};
