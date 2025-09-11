import { NextResponse } from "next/server";

export const POST = async () => {
    try {
        // Clear the authentication cookie
        return NextResponse.json(
            { message: "Logged out successfully" },
            {
                status: 200,
                headers: {
                    'Set-Cookie': 'auth-token=; Path=/; HttpOnly; Max-Age=0', // Delete cookie
                },
            }
        );
    } catch (error) {
        console.error("Logout error:", error);
        return NextResponse.json({ error: "Logout failed" }, { status: 500 });
    }
};
