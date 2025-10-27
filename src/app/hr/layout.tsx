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
  Clock,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Layout component for the HR Portal.
 * It includes a sidebar for navigation specific to HR tasks.
 * @param {{ children: React.ReactNode }} props - The props for the component.
 * @returns {JSX.Element} The HR dashboard layout.
 */
export default async function HRDashboardLayout({
  children,
}) {
  // Get the current session to display the logged-in user
  const session = await getSession();

  // Redirect to login if not authenticated
  if (!session || !session.user) {
    redirect("/");
  }

  const hrUser = {
    name: session.user.name || "HR User",
    email: session.user.email || "hr@example.com"
  };

  return (
    <SidebarProvider {...({} as any)}>
      {/* Sidebar Navigation */}
      <Sidebar {...({} as any)}>
        <SidebarHeader {...({} as any)}>
          {/* The company logo is displayed at the top of the sidebar. */}
          <div className="flex items-center gap-2 p-2">
            <Logo className="w-auto h-9" />
            <h1 className="text-xl font-semibold font-headline">HR Portal</h1>
          </div>
        </SidebarHeader>
        <SidebarContent {...({} as any)}>
          <SidebarMenu className="space-y-0.5" {...({} as any)}>
            <SidebarMenuItem {...({} as any)}>
              <Link href="/hr/dashboard" passHref>
                <SidebarMenuButton tooltip="Dashboard" className="w-full justify-start" {...({} as any)}>
                  <LayoutDashboard />
                  Dashboard
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Scheduling" asChild className="w-full justify-start" {...({} as any)}>
               <Link href="/hr/scheduling">
                 <CalendarPlus />
                   Scheduling
               </Link>
            </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <Link href="/hr/attendance-monitoring" passHref>
                <SidebarMenuButton tooltip="Attendance Monitoring" className="w-full justify-start" {...({} as any)}>
                  <ClipboardCheck />
                  Attendance Monitoring
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <Link href="/hr/attendance" passHref>
                <SidebarMenuButton tooltip="Clock In/Out" className="w-full justify-start" {...({} as any)}>
                  <Clock />
                  Clock In/Out
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <Link href="/hr/payslip-generation" passHref>
                <SidebarMenuButton tooltip="Payslips" className="w-full justify-start" {...({} as any)}>
                  <Wallet />
                  Payslip Generation
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <Link href="/hr/employee-data" passHref>
                <SidebarMenuButton tooltip="Employee Data" className="w-full justify-start" {...({} as any)}>
                  <Users />
                  Employee Data
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <Link href="/hr/announcements" passHref>
                <SidebarMenuButton tooltip="Announcements" className="w-full justify-start" {...({} as any)}>
                  <Megaphone />
                  Announcements
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
             <SidebarMenuItem {...({} as any)}>
              <Link href="/hr/leave-approvals" passHref>
                <SidebarMenuButton tooltip="Leave Approvals" className="w-full justify-start" {...({} as any)}>
                  <ClipboardList />
                  Leave Approvals
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      {/* Main Content Area */}
      <SidebarInset {...({} as any)}>
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
