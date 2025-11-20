import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { accounts, verificationTokens } from "../../../../drizzle/schema";
import { getDb } from "../../../../src/lib/db";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    const db = await getDb();
    const { token, email, password } = await request.json();

    if (!token || !email || !password) {
      return NextResponse.json(
        { message: "Token, email, and password are required" },
        { status: 400 }
      );
    }

    // Find the verification token
    const tokenRecord = await db
      .select()
      .from(verificationTokens)
      .where(eq(verificationTokens.identifier, email))
      .limit(1);

    if (tokenRecord.length === 0) {
      return NextResponse.json(
        { message: "Invalid or expired reset token" },
        { status: 400 }
      );
    }

    const storedToken = tokenRecord[0];

    // Check if token matches and is not expired
    if (storedToken.token !== token || new Date(storedToken.expires) < new Date()) {
      return NextResponse.json(
        { message: "Invalid or expired reset token" },
        { status: 400 }
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Update the user's password
    await db
      .update(accounts)
      .set({ password: hashedPassword })
      .where(eq(accounts.email, email));

    // Delete the used token
    await db
      .delete(verificationTokens)
      .where(eq(verificationTokens.identifier, email));

    return NextResponse.json(
      { message: "Password reset successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}