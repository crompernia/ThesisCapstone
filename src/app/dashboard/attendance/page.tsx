/**
 * @fileoverview This file defines the Attendance page for the employee dashboard.
 * It displays an employee's attendance summary and a detailed log of their attendance records.
 */
import { getAttendanceData, getEmployeeName } from "@/lib/data";
import AttendanceClientPage from "./attendance-client-page";
import { getCurrentUserId } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Renders the employee attendance page, displaying a summary and a detailed log.
 */
export default async function AttendancePage() {
  const employeeId = await getCurrentUserId();

  if (!employeeId) {
    redirect("/");
  }

  const { summary: attendanceSummary, records: attendanceRecords } = await getAttendanceData(employeeId);
  const employeeName = await getEmployeeName(employeeId);

  return <AttendanceClientPage attendanceSummary={attendanceSummary} attendanceRecords={attendanceRecords} employeeName={employeeName} />;
}
