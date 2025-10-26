/**
 * @fileoverview This file defines the main HR Dashboard page.
 * It serves as the landing page for HR personnel, providing a high-level
 * overview of key metrics, recent activities, and quick access to common tasks.
 */
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Users, CheckCircle, Briefcase, Bell, CalendarPlus, Wallet, Megaphone } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getHRDashboardData } from "@/lib/data";

const iconMap = {
    Users: <Users />,
    CheckCircle: <CheckCircle />,
    Briefcase: <Briefcase />,
    Bell: <Bell />,
};

/**
 * Renders the main dashboard for HR personnel.
 * It provides an overview of key stats, recent activities, and quick actions.
 * @returns {JSX.Element} The HR dashboard page component.
 */
export const metadata = {
  title: "HR Dashboard",
};

export default async function HRDashboardPage() {
    const { stats, recentActivities } = await getHRDashboardData();

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-start">
            <div>
                <h1 className="text-3xl font-bold font-headline">HR Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, Olivia! Here's what's happening today.</p>
            </div>
        </div>

        {/* Statistics Cards: A high-level overview of important metrics. */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.length > 0 ? (
                stats.map(stat => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            {iconMap[stat.icon]}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            {stat.change && <p className="text-xs text-muted-foreground">{stat.change}</p>}
                        </CardContent>
                    </Card>
                ))
            ) : (
                <p className="text-muted-foreground col-span-4">No statistics available.</p>
            )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
            {/* Recent Activity Log: Shows a feed of recent actions within the system. */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>A log of recent system and employee actions.</CardDescription>
                </CardHeader>
                <CardContent>
                  {recentActivities.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Employee ID</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Activity</TableHead>
                          <TableHead>Time</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentActivities.map(activity => (
                          <TableRow key={activity.id}>
                            <TableCell className="font-mono text-xs">{activity.employeeNumber}</TableCell>
                            <TableCell className="font-medium">{activity.employeeName}</TableCell>
                            <TableCell>{activity.activity}</TableCell>
                            <TableCell className="text-muted-foreground">{activity.timestamp}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <p className="text-muted-foreground text-center">No recent activity.</p>
                  )}
                </CardContent>
            </Card>
            {/* Quick Actions Card: Provides shortcuts to common HR tasks. */}
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Access common HR tasks quickly.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                    <Button asChild variant="outline" className="h-20 flex-col gap-1">
                        <Link href="/hr/employee-data">
                            <Users />
                            <span>Manage Employees</span>
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-20 flex-col gap-1">
                        <Link href="/hr/scheduling">
                            <CalendarPlus />
                             <span>Update Schedule</span>
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-20 flex-col gap-1">
                        <Link href="/hr/payslip-generation">
                            <Wallet />
                            <span>Payroll</span>
                        </Link>
                    </Button>
                     <Button asChild variant="outline" className="h-20 flex-col gap-1">
                        <Link href="/hr/announcements">
                            <Megaphone />
                            <span>Post Announcement</span>
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
