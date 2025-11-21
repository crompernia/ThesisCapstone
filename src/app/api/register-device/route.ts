import { NextResponse } from 'next/server';
import { getCurrentUserId } from '@/lib/auth';
import { getDb } from '@/lib/db';
import { accounts } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { hashFingerprint } from '@/lib/deviceFingerprint';

export async function POST(req: Request) {
  try {
    const userId = await getCurrentUserId();
    if (!userId) {
      return NextResponse.json({ success: false, message: 'Not authenticated' }, { status: 401 });
    }

    const body = await req.json();
    const { fingerprint } = body;

    if (!fingerprint) {
      return NextResponse.json({ success: false, message: 'Device fingerprint required' }, { status: 400 });
    }

    const fingerprintHash = hashFingerprint(fingerprint);

    const db = await getDb();

    // Get current registered devices
    const userData = await db
      .select({ registeredDevices: accounts.registeredDevices })
      .from(accounts)
      .where(eq(accounts.id, userId))
      .limit(1);

    const currentDevices = userData[0]?.registeredDevices || [];
    const updatedDevices = Array.isArray(currentDevices)
      ? [...new Set([...currentDevices, fingerprintHash])] // Remove duplicates
      : [fingerprintHash];

    // Update user's registered devices
    await db
      .update(accounts)
      .set({ registeredDevices: updatedDevices })
      .where(eq(accounts.id, userId));

    return NextResponse.json({
      success: true,
      message: 'Device registered successfully'
    });

  } catch (error: any) {
    console.error('[register-device] Error:', error);
    return NextResponse.json({
      success: false,
      message: error?.message || 'Server error'
    }, { status: 500 });
  }
}