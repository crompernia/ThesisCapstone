/**
 * @fileoverview This file defines the Attendance page for the employee dashboard.
 * It displays an employee's attendance summary and a detailed log of their attendance records.
 */
import { getAttendanceData, getEmployeeName } from "@/lib/data";
import AttendanceClientPage from "./attendance-client-page";

// Hardcoded employee ID for demonstration purposes.
const EMPLOYEE_ID = 'EMP-00123';

/**
 * Renders the employee attendance page, displaying a summary and a detailed log.
 * @returns {JSX.Element} The attendance page component.
 */
export default async function AttendancePage() {
  const { summary: attendanceSummary, records: attendanceRecords } = await getAttendanceData(EMPLOYEE_ID);
  const employeeName = await getEmployeeName(EMPLOYEE_ID);

  return <AttendanceClientPage attendanceSummary={attendanceSummary} attendanceRecords={attendanceRecords} employeeName={employeeName} />;
}
