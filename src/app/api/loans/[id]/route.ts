import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getDb } from '@/lib/db';
import { loans, accounts } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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

    const { status, notes } = await request.json();

    if (!status || !['Approved', 'Rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const loanId = parseInt(id);
    if (isNaN(loanId)) {
      return NextResponse.json({ error: 'Invalid loan ID' }, { status: 400 });
    }

    const updateData: any = {
      status,
      approvedBy: session.user.id,
      approvedAt: new Date(),
    };

    if (notes) {
      updateData.notes = notes;
    }

    const updatedLoan = await db
      .update(loans)
      .set(updateData)
      .where(eq(loans.id, loanId))
      .returning();

    if (updatedLoan.length === 0) {
      return NextResponse.json({ error: 'Loan not found' }, { status: 404 });
    }

    return NextResponse.json({ loan: updatedLoan[0] });
  } catch (error) {
    console.error('Error updating loan:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = await getDb();
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const loanId = parseInt(id);
    if (isNaN(loanId)) {
      return NextResponse.json({ error: 'Invalid loan ID' }, { status: 400 });
    }

    // Check if user is HR/Admin or the loan belongs to the user
    const user = await db
      .select()
      .from(accounts)
      .where(eq(accounts.id, session.user.id))
      .limit(1);

    if (!user[0]) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const loan = await db
      .select()
      .from(loans)
      .where(eq(loans.id, loanId))
      .limit(1);

    if (loan.length === 0) {
      return NextResponse.json({ error: 'Loan not found' }, { status: 404 });
    }

    // Allow access if user is HR/Admin or the loan belongs to them
    if (user[0].role !== 'HR' && user[0].role !== 'Admin' && loan[0].employeeId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    return NextResponse.json({ loan: loan[0] });
  } catch (error) {
    console.error('Error fetching loan:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}