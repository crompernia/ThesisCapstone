/**
 * @fileoverview This file defines the layout for the HR Portal section of the application.
 * It includes a sidebar with navigation links specific to HR tasks and responsibilities,
 * ensuring a consistent and organized user experience for HR personnel.
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
  CalendarPlus,
  ClipboardCheck,
  Wallet,
  Users,
  Megaphone,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

/**
 * Layout component for the HR Portal.
 * It includes a sidebar for navigation specific to HR tasks.
 * @param {{ children: React.ReactNode }} props - The props for the component.
 * @returns {JSX.Element} The HR dashboard layout.
 */
export default function HRDashboardLayout({
  children,
}) {
  // Static data for the currently logged-in HR user.
  // In a real application, this data would be fetched based on the authenticated session.
  const hrUser = { name: "Olivia Chen", email: "olivia.chen.hr@example.com" };

  return (
    <SidebarProvider>
      {/* Sidebar Navigation */}
      <Sidebar>
        <SidebarHeader>
          {/* The company logo is displayed at the top of the sidebar. */}
          <div className="flex items-center gap-2 p-2">
            <Logo className="w-auto h-9" />
            <h1 className="text-xl font-semibold font-headline">HR Portal</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/hr/dashboard" passHref>
                <SidebarMenuButton tooltip="Dashboard">
                  <LayoutDashboard />
                  Dashboard
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Scheduling" asChild>
               <Link href="/hr/scheduling">
                 <CalendarPlus />
                   Scheduling
               </Link>
            </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/hr/attendance-monitoring" passHref>
                <SidebarMenuButton tooltip="Attendance">
                  <ClipboardCheck />
                  Attendance
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/hr/payslip-generation" passHref>
                <SidebarMenuButton tooltip="Payslips">
                  <Wallet />
                  Payslip Generation
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/hr/employee-data" passHref>
                <SidebarMenuButton tooltip="Employee Data">
                  <Users />
                  Employee Data
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/hr/announcements" passHref>
                <SidebarMenuButton tooltip="Announcements">
                  <Megaphone />
                  Announcements
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <Link href="/hr/leave-approvals" passHref>
                <SidebarMenuButton tooltip="Leave Approvals">
                  <ClipboardList />
                  Leave Approvals
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
          <UserNav employeeName={hrUser.name} employeeEmail={hrUser.email} />
        </header>
        <main className="p-4 sm:p-6 lg:p-8 bg-muted/40 min-h-[calc(100vh-65px)]">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
