import { auth } from "./auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    return Response.redirect(new URL("/login", req.nextUrl.origin));
  }
});

export const config = {
  matcher: [
    "/addBoard",
    "/modifyBoard/:path",
    "/addItem",
    "/modifyItem/:path",
    "/mypage",
    "/changePassword",
    "/editProfile",
  ],
};
