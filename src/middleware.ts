// // src/middleware.ts

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // protected routes જ્યાં login જરૂરી છે
// const protectedPaths = ['/movie'];

// export function middleware(req: NextRequest) {
//     const { pathname } = req.nextUrl;

//     // જો પેજ protected હોય
//     if (protectedPaths.some((path) => pathname.startsWith(path))) {
//         const token = req.cookies.get('auth-token'); // તમારી authentication cookie

//         if (!token) {
//             // જો token ન હોય તો login પેજ પર redirect કરો
//             const loginUrl = new URL('/login', req.url);
//             return NextResponse.redirect(loginUrl);
//         }
//     }

//     // જો બધું ઠીક હોય તો આગળ જવા દો
//     return NextResponse.next();
// }

// // middleware કોને લાગુ પડશે તે અહીં નક્કી કરો
// export const config = {
//     matcher: ['/movie/:path*'], // movie અને તેની subroutes માટે middleware લાગુ કરો
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("auth-token")?.value;

    // If user is accessing the movie page and not logged in
    if (request.nextUrl.pathname.startsWith("/movie")) {
        if (!token) {
            const url = request.nextUrl.clone();
            url.pathname = "/login";
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/movie/:path*"], // Apply to movie pages
};


