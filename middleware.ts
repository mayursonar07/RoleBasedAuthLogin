import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes
const protectedRoutes = ["/user/dashboard", "/serviceprovider/dashboard"];

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get("user")?.value; // Retrieve user details from cookies

  if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    if (!userCookie) {
      return NextResponse.redirect(new URL("/", request.url)); // Redirect if no user found in cookies
    }
  }

  return NextResponse.next(); // Continue request if authenticated
}

// Apply middleware only to protected routes
export const config = {
  matcher: ["/user/dashboard", "/serviceprovider/dashboard"],
};
