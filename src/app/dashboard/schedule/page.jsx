/**
 * @fileoverview This file defines the Schedule page for the employee dashboard.
 * It displays the employee's weekly work schedule in a clear, tabular format.
 */
import { getSchedule, getEmployeeName } from "@/lib/data";
import ScheduleClientPage from "./schedule-client-page";
import * as React from 'react';

// Hardcoded employee ID for demonstration purposes.
const EMPLOYEE_ID = 'EMP-00123';

/**
 * Renders the employee's weekly schedule page.
 * It fetches schedule data and passes it to a client component for rendering.
 * @returns {JSX.Element} The schedule page component.
 */
export default async function SchedulePage() {
  
  const schedule = await getSchedule(EMPLOYEE_ID);
  const employeeName = await getEmployeeName(EMPLOYEE_ID);

  return <ScheduleClientPage schedule={schedule} employeeName={employeeName} />;
}
