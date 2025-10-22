import { getEmployeesWithPayslipStatus } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const employees = await getEmployeesWithPayslipStatus();
    return NextResponse.json(employees);
  } catch (error) {
    console.error("Error fetching employees with payslip status:", error);
    return NextResponse.json(
      { error: "Failed to fetch employees" },
      { status: 500 }
    );
  }
}