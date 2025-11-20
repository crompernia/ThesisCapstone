import { NextRequest, NextResponse } from "next/server";
import { eq, or } from "drizzle-orm";
import { accounts, verificationTokens } from "../../../../drizzle/schema";
import { getDb } from "../../../../src/lib/db";
import nodemailer from "nodemailer";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const db = await getDb();
    const { username } = await request.json();

    if (!username) {
      return NextResponse.json(
        { message: "Username is required" },
        { status: 400 }
      );
    }

    // Find user by employeeNumber or email
    const user = await db
      .select()
      .from(accounts)
      .where(
        or(
          eq(accounts.employeeNumber, username),
          eq(accounts.email, username)
        )
      )
      .limit(1);

    if (user.length === 0) {
      // Don't reveal if user exists or not for security
      return NextResponse.json(
        { message: "If an account with that username exists, a password reset email has been sent." },
        { status: 200 }
      );
    }

    const account = user[0];

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 3600000); // 1 hour

    // Store token
    await db.insert(verificationTokens).values({
      identifier: account.email,
      token: resetToken,
      expires,
    });

    // Send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS?.replace(/\s/g, ''), // Remove spaces from app password
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}&email=${encodeURIComponent(account.email)}`;

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: account.email,
      subject: "Password Reset Request",
      html: `
        <h1>Password Reset</h1>
        <p>Hello ${account.firstName},</p>
        <p>You requested a password reset for your account.</p>
        <p>Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json(
      { message: "If an account with that username exists, a password reset email has been sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { message: "Failed to send email. Please check SMTP configuration." },
      { status: 500 }
    );
  }
}