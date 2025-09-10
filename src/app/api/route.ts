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
