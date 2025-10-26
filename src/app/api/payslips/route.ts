import { getDb } from "@/lib/db";
import { payslips, accounts } from "@/lib/schema";
import { NextResponse } from "next/server";
import { eq, and } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const employeeId = searchParams.get('employeeId');
    const payPeriod = searchParams.get('payPeriod');

    if (!employeeId || !payPeriod) {
      return NextResponse.json(
        { error: "employeeId and payPeriod are required" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const existingPayslip = await db
      .select()
      .from(payslips)
      .where(and(eq(payslips.employeeId, employeeId), eq(payslips.payPeriod, payPeriod)))
      .limit(1);

    return NextResponse.json({
      exists: existingPayslip.length > 0,
      payslip: existingPayslip[0] || null
    });
  } catch (error) {
    console.error("Error checking payslip:", error);
    return NextResponse.json(
      { error: "Failed to check payslip" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const db = await getDb();
    const body = await request.json();

    const {
      employeeId,
      payPeriod,
      payDate,
      basicPay,
      overtime,
      allowances,
      sssDeduction,
      philhealthDeduction,
      pagibigDeduction,
      taxDeduction,
      sssLoan,
      hdmfLoan,
      companyLoan,
      otherDeductions,
      netPay,
      daysWorked,
      dailyRate,
      nightDifferential,
    } = body;

    // Ensure daysWorked is an integer
    const daysWorkedInt = Math.round(Number(daysWorked));

    // Check if employee exists
    const employeeExists = await db
      .select()
      .from(accounts)
      .where(eq(accounts.id, employeeId))
      .limit(1);

    if (employeeExists.length === 0) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404 }
      );
    }

    // Check if payslip already exists for this employee and period
    const existingPayslip = await db
      .select()
      .from(payslips)
      .where(and(eq(payslips.employeeId, employeeId), eq(payslips.payPeriod, payPeriod)));

    let result;
    if (existingPayslip.length > 0) {
      // Update existing payslip
      result = await db
        .update(payslips)
        .set({
          payDate,
          basicPay,
          overtime,
          allowances,
          sssDeduction,
          philhealthDeduction,
          pagibigDeduction,
          taxDeduction,
          sssLoan,
          hdmfLoan,
          companyLoan,
          otherDeductions,
          netPay,
          daysWorked: daysWorkedInt,
          dailyRate,
          nightDifferential,
        })
        .where(eq(payslips.id, existingPayslip[0].id))
        .returning();
    } else {
      // Create new payslip
      result = await db
        .insert(payslips)
        .values({
          employeeId,
          payPeriod,
          payDate,
          basicPay,
          overtime,
          allowances,
          sssDeduction,
          philhealthDeduction,
          pagibigDeduction,
          taxDeduction,
          sssLoan,
          hdmfLoan,
          companyLoan,
          otherDeductions,
          netPay,
          daysWorked: daysWorkedInt,
          dailyRate,
          nightDifferential,
        })
        .returning();
    }

    console.log('Payslip saved successfully:', {
      id: result[0].id,
      employeeId: result[0].employeeId,
      payPeriod: result[0].payPeriod,
      netPay: result[0].netPay,
      action: existingPayslip.length > 0 ? "updated" : "created"
    });

    return NextResponse.json({
      success: true,
      payslip: result[0],
      message: existingPayslip.length > 0 ? "Payslip updated successfully" : "Payslip created successfully"
    });
  } catch (error) {
    console.error("Error saving payslip:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to save payslip: ${errorMessage}` },
      { status: 500 }
    );
  }
}