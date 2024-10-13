// @ts-ignore
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { email, name, message } = await req.json();
    if (!email || !name || !message)
      return NextResponse.json(
        { status: false, message: "invalid credentials" },
        { status: 400 }
      );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: `${email}`,
      subject: "Example Message",
      text: `This is an example message by: ${name}`,
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
               <p> Hello <b>${name} </b> .</p>
               <p>Message:</p>
               <p style="margin-left: 20px; border-left: 4px solid #0070f3; padding-left: 10px;">${message}</p>
             </div>`,
    });
    return NextResponse.json(
      { status: true, message: "message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);

    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
};
