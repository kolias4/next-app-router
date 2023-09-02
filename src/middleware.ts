import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // console.log(request.nextUrl,"pathname")
  // if (request.nextUrl.pathname == "/") {
  //   let token = request.cookies.get("token")?.value;
  //   console.log(token, "token middleware");
  //   if (token) {
  //     // todo validate token with keycloak
  //     return NextResponse.redirect(
  //       new URL("/products", request.nextUrl.origin)
  //     );
  //   }
  //   return NextResponse.redirect(
  //     new URL("/auth/login", request.nextUrl.origin)
  //   );
  // }

  // if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  // }
}
