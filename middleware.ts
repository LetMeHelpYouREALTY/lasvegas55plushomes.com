import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isGonePath, resolveLegacyOutcome } from "@/lib/legacy-redirects";

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get("host") || "").toLowerCase();
  const { pathname } = request.nextUrl;

  // 1) 410 Gone: spam + dead WordPress infrastructure.
  //    Universally invalid on any host served by this deployment.
  if (isGonePath(pathname)) {
    return new NextResponse(null, {
      status: 410,
      headers: { "X-Robots-Tag": "noindex" },
    });
  }

  // 2) Legacy WordPress -> Next.js migration handling, scoped to this site.
  if (hostname.endsWith("lasvegas55plushomes.com")) {
    const outcome = resolveLegacyOutcome(pathname);
    if (outcome.type === "gone") {
      return new NextResponse(null, {
        status: 410,
        headers: { "X-Robots-Tag": "noindex" },
      });
    }
    if (outcome.type === "redirect") {
      const target = new URL(outcome.destination, request.nextUrl);
      return NextResponse.redirect(target, 301);
    }
  }

  // 3) Default: continue and pass hostname to pages via header.
  const response = NextResponse.next();
  response.headers.set("x-domain", hostname);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon|images|videos|robots|sitemap).*)"],
};
