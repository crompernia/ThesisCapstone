/**
 * @fileoverview Next.js Middleware for route protection
 * Protects routes based on authentication status and user roles
 */
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Redirect authenticated users away from login page
    if (path === "/" && token) {
      const role = token.role as string;
      if (role === "Employee") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      } else if (role === "HR") {
        return NextResponse.redirect(new URL("/hr/dashboard", req.url));
      } else if (role === "Admin") {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      }
    }

    // Protect employee routes
    if (path.startsWith("/dashboard")) {
      if (!token || token.role !== "Employee") {
        return NextResponse.redirect(new URL("/?error=unauthorized", req.url));
      }
    }

    // Protect HR routes
    if (path.startsWith("/hr")) {
      if (!token || token.role !== "HR") {
        return NextResponse.redirect(new URL("/?error=unauthorized", req.url));
      }
    }

    // Protect admin routes
    if (path.startsWith("/admin")) {
      if (!token || token.role !== "Admin") {
        return NextResponse.redirect(new URL("/?error=unauthorized", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;

        // Allow access to login page
        if (path === "/") {
          return true;
        }

        // Require authentication for all other routes
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg).*)",
  ],
};
