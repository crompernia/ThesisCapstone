import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { accounts, verificationTokens } from "../../../../drizzle/schema";
import { getDb } from "../../../../src/lib/db";
import { Resend } from "resend";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const db = await getDb();
    const { employeeNumber } = await request.json();

    if (!employeeNumber) {
      return NextResponse.json(
        { message: "Employee number is required" },
        { status: 400 }
      );
    }

    // Find user by employee number
    const user = await db
      .select()
      .from(accounts)
      .where(eq(accounts.employeeNumber, employeeNumber))
      .limit(1);

    if (user.length === 0) {
      // Don't reveal if user exists or not for security
      return NextResponse.json(
        { message: "If an account with that employee number exists, a password reset link has been sent to your registered email." },
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

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}&email=${encodeURIComponent(account.email)}`;

    try {
      await resend.emails.send({
        from: "noreply@yourcompany.com", // You'll need to verify this domain in Resend
        to: account.email,
        subject: "Password Reset Request",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Password Reset</h2>
            <p>Hello ${account.firstName},</p>
            <p>You requested a password reset for your account (Employee #: ${account.employeeNumber}).</p>
            <p>Click the button below to reset your password:</p>
            <a href="${resetUrl}" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 16px 0;">Reset Password</a>
            <p>This link will expire in 1 hour.</p>
            <p>If you didn't request this, please ignore this email.</p>
            <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 12px;">This is an automated message. Please do not reply.</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      return NextResponse.json(
        { message: "Failed to send reset email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "If an account with that employee number exists, a password reset link has been sent to your registered email." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { message: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}