/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TAuthInfo, TLoginInfo } from "@/type";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

const Cookies = await cookies()

export const login = async (loginInfo: TLoginInfo) => {
  // login logic here
  const res = await fetch(`${process.env.PRODUCTION_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfo),
  });
  const data = await res.json();
  if (data?.success) {
    Cookies.set("token", data?.accessToken);
  }
  return data;
};

export const singUp = async (singUpInfo: TAuthInfo) => {
  // sign-up logic here
  const res = await fetch(`${process.env.PRODUCTION_SERVER}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singUpInfo),
  });
  const data = await res.json();
  return data;
};

export const getUserInfo = async () => {
  const token = Cookies.get("token")?.value;
  let decodedData = null;
  if (token) {
    decodedData = (await jwtDecode(token)) as any;

    return decodedData;
  } else {
    return null;
  }
};

export const removeUserInfo = async () => {
 await Cookies.delete("token");
};

export const getToken = async() => {
  return Cookies.get('token')
}