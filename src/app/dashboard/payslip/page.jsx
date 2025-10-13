/**
 * @fileoverview This file defines the Payslip page for the employee dashboard.
 * It allows an employee to view their detailed payslip for a selected period,
 * including earnings, deductions, and net pay.
 */
import { getPayPeriods, getEmployeeName } from "@/lib/data";
import PayslipClientPage from "./payslip-client-page";

// Hardcoded employee ID for demonstration purposes.
const EMPLOYEE_ID = 'EMP-00123';

/**
 * Renders the employee's payslip page.
 * Fetches data on the server and passes it to the client component.
 * @returns {JSX.Element} The payslip page component.
 */
export default async function PayslipPage() {
    const payPeriods = await getPayPeriods(EMPLOYEE_ID);
    const employeeName = await getEmployeeName(EMPLOYEE_ID);

    return <PayslipClientPage payPeriods={payPeriods} employeeName={employeeName} />;
}
