import { jwtDecode } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

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
  const isAuthRoute = authRoutes.some((route) => pathname === route);
  console.log(isAuthRoute, "auth");
  if (!token) {
    // User is not logged in
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else {
    // User is logged in
    try {
      const decodedData = jwtDecode(token) as { role: string };

      if (token && isAuthRoute) {
        // Redirect logged-in users away from auth routes
        // return NextResponse.redirect(new URL("/", req.url));
      }

      if (
        decodedData.role !== userRole.EMPLOYER &&
        pathname.startsWith("/recruiter")
      ) {
        // return NextResponse.redirect(new URL("/", req.url));
      }

      if (
        decodedData.role !== userRole.CANDIDATE &&
        pathname.startsWith("/candidate-")
      ) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } catch (error) {
      console.error("Error decoding token", error);
      // Invalid token, clear it and redirect to login
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
