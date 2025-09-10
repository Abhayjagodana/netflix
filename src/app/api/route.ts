// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import { connect } from "@/utils/dbconfig";
import Contact from "@/model/contact";

export async function POST(request: Request) {
  try {
    await connect(); // Connect to MongoDB

    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if(!/^[A-Za-z\s]+$/.test(name)) {
      return NextResponse.json({ error: "Name can only contain letters and spaces" }, { status: 400 });
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }
    if(!/^\d{10}$/.test(phone)) {
      return NextResponse.json({ error: "Phone number must be exactly 10 digits" }, { status: 400 });
    }
    if(message.trim().length === 5) {
      return NextResponse.json({ error: "Message cannot be empty and 5 charachter enter" }, { status: 400 });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    });

    await newContact.save();

    return NextResponse.json({ message: "Contact saved successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
