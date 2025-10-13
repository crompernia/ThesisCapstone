/**
 * @fileoverview This file defines the layout for the main employee dashboard.
 * It includes the primary sidebar navigation and the main content area where
 * different dashboard pages will be rendered.
 */
import { UserNav } from "@/components/user-nav";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Calendar,
  ClipboardCheck,
  Wallet,
  Send,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

/**
 * Layout component for the employee dashboard.
 * It includes a sidebar for navigation and a header with user information.
 * @param {{ children: React.ReactNode }} props - The props for the component.
 * @returns {JSX.Element} The dashboard layout.
 */
export default function DashboardLayout({
  children,
}) {
  // Static data for the currently logged-in employee.
  // In a real application, this data would be fetched from an authentication context.
  const employee = { name: "Maria Rodriguez", email: "maria.rodriguez@example.com" };

  return (
    <SidebarProvider>
      {/* Sidebar Navigation */}
      <Sidebar>
        <SidebarHeader>
          {/* The company logo is displayed at the top of the sidebar. */}
          <div className="flex items-center gap-2 p-2">
            <Logo className="w-auto h-9" />
            <h1 className="text-xl font-semibold font-headline">Dashboard</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/dashboard" passHref>
                <SidebarMenuButton tooltip="Dashboard">
                  <LayoutDashboard />
                  Dashboard
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/schedule" passHref>
                <SidebarMenuButton tooltip="Schedule">
                  <Calendar />
                  Schedule
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/attendance" passHref>
                <SidebarMenuButton tooltip="Attendance">
                  <ClipboardCheck />
                  Attendance Record
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/payslip" passHref>
                <SidebarMenuButton tooltip="Payslip">
                  <Wallet />
                  Payslip
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/leave" passHref>
                <SidebarMenuButton tooltip="Leave Request">
                  <Send />
                  Leave Request
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      {/* Main Content Area */}
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b">
          <SidebarTrigger />
          <UserNav employeeName={employee.name} employeeEmail={employee.email} />
        </header>
        <main className="p-4 sm:p-6 lg:p-8 bg-muted/40 min-h-[calc(100vh-65px)]">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
