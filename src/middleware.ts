/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  authRoutes,
  candidateRoutes,
  recruiterRoutes,
} from "./constant/auth-constant";
import { userRole } from "./constant/constant-variable";



const protectedRoutes = [...candidateRoutes, ...recruiterRoutes];

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const authPages = ["/login", "/register", "/employee-login", "/employee-register"];
  // const authPages = ["/register"];
  if (token && authPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (token) {
    try {
      const decodedData = jwtDecode(token.value) as any;

      if (decodedData.role !== userRole.EMPLOYER && pathname.startsWith("/recruiter")) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      if (decodedData.role !== userRole.CANDIDATE && pathname.startsWith("/candidate-")) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } catch (error) {
      console.error("Error decoding token", error);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...protectedRoutes, ...authRoutes],
};

