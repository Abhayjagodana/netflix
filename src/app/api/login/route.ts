import signup from "@/model/signup";
import { connect } from "@/utils/dbconfig";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export const POST = async (request: Request) => {
    try {
        await connect();
        const { email, password } = await request.json();
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }
        const user = await signup.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }

        return NextResponse.json({ message: "Login successful" }, 
            { status: 200 ,
                headers: {
                    'Set-Cookie': `auth-token=${user._id}; Path=/; HttpOnly; Secure; SameSite=Lax`
                }
            }
        
        );

    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}