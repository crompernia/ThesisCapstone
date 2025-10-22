import { getDb } from "@/lib/db";
import { payslips } from "@/lib/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

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

    // Check if payslip already exists for this employee and period
    const existingPayslip = await db
      .select()
      .from(payslips)
      .where(eq(payslips.employeeId, employeeId))
      .where(eq(payslips.payPeriod, payPeriod));

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
          daysWorked,
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
          daysWorked,
          dailyRate,
          nightDifferential,
        })
        .returning();
    }

    return NextResponse.json({
      success: true,
      payslip: result[0],
      message: existingPayslip.length > 0 ? "Payslip updated successfully" : "Payslip created successfully"
    });
  } catch (error) {
    console.error("Error saving payslip:", error);
    return NextResponse.json(
      { error: "Failed to save payslip" },
      { status: 500 }
    );
  }
}