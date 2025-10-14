/**
 * @fileoverview This file defines the Schedule page for the employee dashboard.
 * It displays the employee's weekly work schedule in a clear, tabular format.
 */
import { getSchedule, getEmployeeName } from "@/lib/data";
import ScheduleClientPage from "./schedule-client-page";
import { getCurrentUserId } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Renders the employee's weekly schedule page.
 * It fetches schedule data and passes it to a client component for rendering.
 */
export default async function SchedulePage() {
  const employeeId = await getCurrentUserId();

  if (!employeeId) {
    redirect("/");
  }

  const schedule = await getSchedule(employeeId);
  const employeeName = await getEmployeeName(employeeId);

  return <ScheduleClientPage schedule={schedule} employeeName={employeeName} />;
}
