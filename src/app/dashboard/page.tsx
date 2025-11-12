/**
 * @fileoverview This file defines the main Employee Dashboard page.
 * It serves as the landing page for employees after they log in,
 * showing a profile summary, company announcements, and a calendar.
 */
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Megaphone, DollarSign } from "lucide-react";
import { getEmployeeDashboardData } from "@/lib/data";
import { getCurrentUserId } from "@/lib/auth";
import { redirect } from "next/navigation";
import { DashboardCharts } from "@/components/dashboard-charts";

/**
 * Renders the main dashboard page for an employee.
 * It displays employee information, announcements, and a calendar.
 * @returns {JSX.Element} The employee dashboard page component.
 */
export default async function EmployeeDashboardPage() {
  const employeeId = await getCurrentUserId();

  if (!employeeId) {
    redirect("/");
  }

  const { employee, announcements, statistics } = await getEmployeeDashboardData(
    employeeId
  );

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        {/* Employee Profile Card: Displays key information about the logged-in employee. */}
        <Card>
          {employee ? (
            <>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src="/default-avatar.png"
                      alt={employee.name}
                    />
                    <AvatarFallback>
                      {employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-headline text-2xl">
                      {employee.name}
                    </CardTitle>
                    <CardDescription>{employee.position}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-muted-foreground">
                      Employee ID
                    </p>
                    <p>{employee.employeeNumber}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">
                      Position
                    </p>
                    <p>{employee.position}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">
                      Department
                    </p>
                    <p>{employee.department}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Email</p>
                    <p>{employee.email}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Date of Hire</p>
                    <p>{employee.dateHired}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground">Branch</p>
                    <p>{employee.branch}</p>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Employee data not available.
              </p>
            </CardContent>
          )}
        </Card>

        {/* Statistics Charts */}
        {statistics && (
          <DashboardCharts
            attendance={statistics.attendance}
            leaveBalance={statistics.leaveBalance}
            overtimeHours={statistics.overtimeHours}
          />
        )}

        {/* Latest Payslip Card */}
        {statistics?.latestPayslip && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign />
                Latest Payslip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Period</p>
                  <p className="font-semibold">{statistics.latestPayslip.period}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Net Pay</p>
                  <p className="font-semibold text-green-600">₱{statistics.latestPayslip.netPay.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pay Date</p>
                  <p className="font-semibold">{statistics.latestPayslip.payDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Announcements Card: Shows the latest company-wide announcements. */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone />
              Announcement Board
            </CardTitle>
          </CardHeader>
          <CardContent>
            {announcements.length > 0 ? (
              <ul className="space-y-4">
                {announcements.map((ann, index) => (
                  <li key={`${ann.id}-${index}`}>
                    <p className="font-semibold">{ann.title}</p>
                    <p className="text-sm text-muted-foreground">{ann.date}</p>
                    <p className="text-sm mt-1">{ann.content}</p>
                    {index < announcements.length - 1 && (
                      <Separator {...({ className: "mt-4" } as any)} />
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground text-center">
                No announcements at this time.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
      {/* Calendar Card: Displays a simple calendar, could be used for upcoming events or schedules. */}
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={new Date()}
              className="rounded-md"
              classNames={{}}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
