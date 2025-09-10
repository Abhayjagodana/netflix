// src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// protected routes જ્યાં login જરૂરી છે
const protectedPaths = ['/movie'];

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // જો પેજ protected હોય
    if (protectedPaths.some((path) => pathname.startsWith(path))) {
        const token = req.cookies.get('auth-token'); // તમારી authentication cookie

        if (!token) {
            // જો token ન હોય તો login પેજ પર redirect કરો
            const loginUrl = new URL('/login', req.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    // જો બધું ઠીક હોય તો આગળ જવા દો
    return NextResponse.next();
}

// middleware કોને લાગુ પડશે તે અહીં નક્કી કરો
export const config = {
    matcher: ['/movie/:path*'], // movie અને તેની subroutes માટે middleware લાગુ કરો
};
