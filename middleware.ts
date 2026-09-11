import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isGonePath, resolveLegacyOutcome } from "@/lib/legacy-redirects";
import {
  shouldRedirectApexToWww,
  wwwHostname,
} from "@/lib/canonical-host";

function redirectToWww(request: NextRequest, hostname: string): NextResponse {
  const dest = request.nextUrl.clone();
  dest.protocol = "https:";
  dest.hostname = wwwHostname(hostname);
  dest.port = "";
  return NextResponse.redirect(dest, 301);
}

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get("host") || "").toLowerCase();
  const hostNoPort = hostname.split(":")[0];
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
  //    Force the destination onto www (primary host) in one hop.
  if (hostNoPort.endsWith("lasvegas55plushomes.com")) {
    const outcome = resolveLegacyOutcome(pathname);
    if (outcome.type === "gone") {
      return new NextResponse(null, {
        status: 410,
        headers: { "X-Robots-Tag": "noindex" },
      });
    }
    if (outcome.type === "redirect") {
      const target = new URL(outcome.destination, "https://www.lasvegas55plushomes.com");
      target.hostname = "www.lasvegas55plushomes.com";
      target.protocol = "https:";
      return NextResponse.redirect(target, 301);
    }
  }

  // 3) Apex (non-www) → www. Preview/local hosts are left alone.
  if (shouldRedirectApexToWww(hostNoPort)) {
    return redirectToWww(request, hostNoPort);
  }

  // 4) Default: continue and pass hostname to pages via header.
  const response = NextResponse.next();
  response.headers.set("x-domain", hostname);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon|images|videos|robots|sitemap).*)"],
};
