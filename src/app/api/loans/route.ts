import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getDb } from '@/lib/db';
import { loans } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const db = await getDb();
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { amount, months } = await request.json();

    if (!amount || !months) {
      return NextResponse.json({ error: 'Amount and months are required' }, { status: 400 });
    }

    if (months < 1 || months > 8) {
      return NextResponse.json({ error: 'Months must be between 1 and 8' }, { status: 400 });
    }

    // Calculate interest rate based on months
    const interestRate = 0.061 + (months - 1) * 0.021;
    const totalAmount = amount * (1 + interestRate);

    const newLoan = await db.insert(loans).values({
      employeeId: session.user.id,
      amount: amount.toString(),
      months,
      interestRate: interestRate.toString(),
      totalAmount: totalAmount.toString(),
      status: 'Pending',
    }).returning();

    return NextResponse.json({ loan: newLoan[0] }, { status: 201 });
  } catch (error) {
    console.error('Error creating loan request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const db = await getDb();
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userLoans = await db
      .select()
      .from(loans)
      .where(eq(loans.employeeId, session.user.id))
      .orderBy(loans.requestedAt);

    return NextResponse.json({ loans: userLoans });
  } catch (error) {
    console.error('Error fetching loans:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}