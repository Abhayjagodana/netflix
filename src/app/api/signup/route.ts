import { NextResponse } from "next/server";
import { connect } from "@/utils/dbconfig"
import signup from "@/model/signup";
import bcrypt from "bcryptjs";
export const POST = async (request: Request) => {
    try {
        await connect();
        const { fullname, email, phone, password, confirmPassword } = await request.json();

        if (!fullname || !email || !phone || !password || !confirmPassword) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        if (password !== confirmPassword) {
            return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
        }

        if (fullname && !/^[A-Za-z\s]+$/.test(fullname)) {
            return NextResponse.json({ error: "Full name can only contain letters and spaces" }, { status: 400 });
        }
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }
        if (phone && !/^\d{10}$/.test(phone)) {
            return NextResponse.json({ error: "Phone number must be exactly 10 digits" }, { status: 400 });
        }
        if (password && password.length < 6) {
            return NextResponse.json({ error: "Password must be at least 6 characters long" }, { status: 400 });
        }
        
        const existinguser = await signup.findOne({ email });
        if (existinguser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new signup({
            fullname,
            email,
            phone,
            password: hashedPassword,
            // confirmPassword: hashedPassword,
            createdAt: new Date(),
        });

        await newUser.save();

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error during signup:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}