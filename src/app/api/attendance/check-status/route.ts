import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { attendance } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import { getCurrentUserId } from '@/lib/auth';

export async function GET() {
  try {
    const userId = await getCurrentUserId();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = await getDb();

    const today = new Date();
    const isoDate = today.toISOString().slice(0, 10); // YYYY-MM-DD

    const existingRecord = await db
      .select()
      .from(attendance)
      .where(
        and(
          eq(attendance.employeeId, userId),
          eq(attendance.date, isoDate)
        )
      )
      .limit(1);

    const hasClockedInToday = existingRecord.length > 0 && existingRecord[0].timeIn !== null;

    return NextResponse.json({ hasClockedInToday });
  } catch (error) {
    console.error('Error checking clock-in status:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}