// export { auth as middleware } from "@/auth";
import  {auth}  from "@/auth";
// import { NextResponse, NextRequest } from "next/server";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  adminRoutes,
} from "@/routes";
import { NextResponse } from "next/server";
export default async function middleware(request) {
  const session = await auth();
  const { nextUrl } = request;
//   const isAdmin = process.env.ADMIN_USER_ID === session.id;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.some((route) =>
    new RegExp(`^${route}$`).test(nextUrl.pathname)
  );
//   const isAdminRoute = adminRoutes.includes(nextUrl.pathname);

//   if (session && !isAdmin && isAdminRoute) {
//    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));

//   }
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }
  if (isAuthRoute) {
    if (session) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }
  if (!session && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return null;
}
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
