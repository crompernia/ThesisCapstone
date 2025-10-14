/**
 * @fileoverview This file defines the Payslip page for the employee dashboard.
 * It allows an employee to view their detailed payslip for a selected period,
 * including earnings, deductions, and net pay.
 */
import { getPayPeriods, getEmployeeName } from "@/lib/data";
import PayslipClientPage from "./payslip-client-page";
import { getCurrentUserId } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Renders the employee's payslip page.
 * Fetches data on the server and passes it to the client component.
 */
export default async function PayslipPage() {
    const employeeId = await getCurrentUserId();

    if (!employeeId) {
        redirect("/");
    }

    const payPeriods = await getPayPeriods(employeeId);
    const employeeName = await getEmployeeName(employeeId);

    return <PayslipClientPage payPeriods={payPeriods} employeeName={employeeName} />;
}
