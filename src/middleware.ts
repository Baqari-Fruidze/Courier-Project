export { default } from "next-auth/middleware";
export const config = { matcher: ["/", "/parcels"] };
// middleware.js or middleware.ts
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
//   // Get the pathname of the current request
//   const { pathname } = req.nextUrl;

//   // Allow access to the home page "/"
//   if (pathname === "/") {
//     return NextResponse.next();
//   }

//   // Get the user's token (if available)
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

//   // If there is no token and the user is not on the login page, redirect to login
//   if (!token) {
//     const loginUrl = new URL("/api/auth/signin", req.url); // Replace with your custom login route if different
//     return NextResponse.redirect(loginUrl);
//   }

//   // Allow the request if the user is authenticated (token exists)
//   return NextResponse.next();
// }

// // Apply the middleware to all routes except the home page ("/")
// export const config = {
//   matcher: "/:path*", // Protect all routes except "/"
// };
