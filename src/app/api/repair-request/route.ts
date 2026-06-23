import { NextResponse } from "next/server";
import { Resend } from "resend";

function clean(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 3000);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const requestType = clean(body.requestType);
    const equipment = clean(body.equipment);
    const issue = clean(body.issue);
    const tried = clean(body.tried);

    if (!name || !email || !requestType || !equipment || !issue) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const toEmail =
      process.env.REPAIR_REQUEST_TO_EMAIL || "arkansasgeekadmin@gmail.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Arkansas Geek <onboarding@resend.dev>";

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Arkansas Geek repair request: ${requestType}`,
      text: [
        "New Arkansas Geek repair request",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Request type: ${requestType}`,
        `Equipment / vehicle: ${equipment}`,
        "",
        "What is going on?",
        issue,
        "",
        "What have they already tried?",
        tried || "Not provided",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send repair request" },
      { status: 500 }
    );
  }
}
