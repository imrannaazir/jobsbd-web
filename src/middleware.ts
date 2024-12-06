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
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (token) {
    try {
      const decodedData = jwtDecode(token) as any;

      if (
        decodedData.role !== userRole.EMPLOYER &&
        pathname.startsWith("/recruiter")
      ) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      if (
        decodedData.role !== userRole.CANDIDATE &&
        pathname.startsWith("/candidate-")
      ) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } catch (error) {
      console.error("Error decoding token", error);
      const response = NextResponse.redirect(new URL("/login", req.url));
      response.cookies.delete("token");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/employee-login",
    "/employee-register",
    "/recruiter/:path*",
    "/candidate-:path*",
  ],
};
