import { NextResponse } from 'next/server';
import { getCurrentUserId } from '@/lib/auth';
import { getDb } from '@/lib/db';
import { accounts } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { hashFingerprint } from '@/lib/deviceFingerprint';


export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.debug('[verify-device] body keys:', Object.keys(body || {}));
    const { fingerprint, dataUri } = body;

    if (!fingerprint) {
      return NextResponse.json({ verified: false, message: 'No device fingerprint provided' }, { status: 400 });
    }

    // Get current user
    const userId = await getCurrentUserId();
    if (!userId) {
      return NextResponse.json({ verified: false, message: 'Not authenticated' }, { status: 401 });
    }

    // Get user's registered devices
    const db = await getDb();
    const userData = await db
      .select({ registeredDevices: accounts.registeredDevices })
      .from(accounts)
      .where(eq(accounts.id, userId))
      .limit(1);

    if (!userData.length) {
      return NextResponse.json({
        verified: false,
        message: 'User not found'
      }, { status: 400 });
    }

    const registeredDevices = userData[0].registeredDevices || [];
    const currentFingerprintHash = hashFingerprint(fingerprint);

    // Check if device is registered
    const isDeviceRegistered = Array.isArray(registeredDevices) &&
      registeredDevices.includes(currentFingerprintHash);

    console.log(`[verify-device] Device registered: ${isDeviceRegistered}, Photo provided: ${!!dataUri}`);

    if (!isDeviceRegistered) {
      return NextResponse.json({
        verified: false,
        requiresDeviceRegistration: true,
        message: 'Device not recognized. Please register this device first.'
      });
    }

    // Device is verified, photo is captured for audit purposes
    return NextResponse.json({
      verified: true,
      message: 'Device and identity verified successfully'
    });

  } catch (err: any) {
    console.error('[verify-device] server error', err);
    return NextResponse.json({ verified: false, message: err?.message || 'Server error', stack: err?.stack }, { status: 500 });
  }
}
