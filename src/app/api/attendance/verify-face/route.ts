import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.debug('[verify-face] body keys:', Object.keys(body || {}));
    const { dataUri } = body;

    // TODO: integrate real face verification here.
    // For now, accept any non-empty dataUri and return verified: true
    if (!dataUri) {
      return NextResponse.json({ verified: false, message: 'No image provided' }, { status: 400 });
    }

    // Optionally inspect coordinates if needed.

    return NextResponse.json({ verified: true });
  } catch (err: any) {
    console.error('[verify-face] server error', err);
    return NextResponse.json({ verified: false, message: err?.message || 'Server error', stack: err?.stack }, { status: 500 });
  }
}
