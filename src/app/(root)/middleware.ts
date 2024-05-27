import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const res = NextResponse.next();

  res.headers.set(
    "Content-Security-Policy",
    "frame-src 'self' https://timorgame.ringme.vn;",
  );
}

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
