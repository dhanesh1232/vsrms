import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Enquiry from "@/models/Enquiry";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    // Basic validation
    const { name, email, phone, type, message } = body;
    if (!name || !email || !phone || !type || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      type,
      message,
    });

    return NextResponse.json(
      { message: "Enquiry submitted successfully", id: enquiry._id },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Enquiry Submission Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
    return NextResponse.json(enquiries);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
