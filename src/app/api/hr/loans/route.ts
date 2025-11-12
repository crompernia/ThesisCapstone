import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getDb } from '@/lib/db';
import { loans, accounts } from '@/lib/schema';
import { eq, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const db = await getDb();
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is HR or Admin
    const user = await db
      .select()
      .from(accounts)
      .where(eq(accounts.id, session.user.id))
      .limit(1);

    if (!user[0] || (user[0].role !== 'HR' && user[0].role !== 'Admin')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const allLoans = await db
      .select({
        id: loans.id,
        amount: loans.amount,
        months: loans.months,
        interestRate: loans.interestRate,
        totalAmount: loans.totalAmount,
        status: loans.status,
        requestedAt: loans.requestedAt,
        approvedAt: loans.approvedAt,
        notes: loans.notes,
        employeeId: loans.employeeId,
        employeeNumber: accounts.employeeNumber,
        firstName: accounts.firstName,
        lastName: accounts.lastName,
        position: accounts.position,
        department: accounts.department,
        branch: accounts.branch,
      })
      .from(loans)
      .leftJoin(accounts, eq(loans.employeeId, accounts.id))
      .orderBy(desc(loans.requestedAt));

    return NextResponse.json({ loans: allLoans });
  } catch (error) {
    console.error('Error fetching loans:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}