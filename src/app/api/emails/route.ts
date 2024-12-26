import Welcome from "@emails/welcome";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  return NextResponse.json({ message: "Hello from the API!" });
}

export async function POST(request: Request) {

  const { email, firstName } = await request.json();

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!.toString(),
      to: { ...email },
      subject: "Welcome to Votonic",
      react: Welcome({ firstName }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Email error:', error); // Add logging
    return NextResponse.json({ error }, { status: 500 });
  }
}