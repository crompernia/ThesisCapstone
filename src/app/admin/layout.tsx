/**
 * @fileoverview This file defines the layout for the Admin Portal section of the application.
 * It includes a sidebar with navigation links specific to administrative tasks.
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
  FileText,
  UserCheck,
  GitBranch,
  Building,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Layout component for the Admin Portal.
 * It includes a sidebar for navigation specific to admin tasks.
 * @param {{ children: React.ReactNode }} props - The props for the component.
 * @returns {JSX.Element} The admin dashboard layout.
 */
export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the current session to display the logged-in user
  const session = await getSession();

  // Redirect to login if not authenticated
  if (!session || !session.user) {
    redirect("/");
  }

  const adminUser = {
    name: session.user.name || "Admin",
    email: session.user.email || "admin@example.com"
  };

  return (
    <SidebarProvider {...({} as any)}>
      {/* Sidebar Navigation */}
      <Sidebar {...({} as any)}>
        <SidebarHeader {...({} as any)}>
          {/* The company logo is displayed at the top of the sidebar. */}
          <div className="flex items-center gap-2 p-2">
            <Logo className="w-auto h-9" />
            <h1 className="text-xl font-semibold font-headline">Admin Portal</h1>
          </div>
        </SidebarHeader>
        <SidebarContent {...({} as any)}>
          <SidebarMenu {...({} as any)}>
            <SidebarMenuItem {...({} as any)}>
              <Link href="/admin/dashboard" passHref>
                <SidebarMenuButton {...({ tooltip: "Dashboard" } as any)}>
                  <LayoutDashboard />
                  Dashboard
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <Link href="/admin/approvals" passHref>
                <SidebarMenuButton {...({ tooltip: "Pending Approvals" } as any)}>
                  <UserCheck />
                  Pending Approvals
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <Link href="/admin/reports" passHref>
                <SidebarMenuButton {...({ tooltip: "Reports" } as any)}>
                  <FileText />
                  Report Monitoring
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
             <SidebarMenuItem {...({} as any)}>
              <Link href="/admin/branch-allocation" passHref>
                <SidebarMenuButton {...({ tooltip: "Branch Allocation" } as any)}>
                  <GitBranch />
                  Branch Allocation
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <Link href="/admin/branches" passHref>
                <SidebarMenuButton {...({ tooltip: "Branches" } as any)}>
                  <Building />
                  Branches
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <Link href="/admin/positions" passHref>
                <SidebarMenuButton {...({ tooltip: "Positions & Rates" } as any)}>
                  <Briefcase />
                  Positions & Rates
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      {/* Main Content Area */}
      <SidebarInset {...({} as any)}>
        <header className="flex items-center justify-between p-4 border-b">
          <SidebarTrigger {...({} as any)} />
          <UserNav employeeName={adminUser.name} employeeEmail={adminUser.email} />
        </header>
        <main className="p-4 sm:p-6 lg:p-8 bg-muted/40 min-h-[calc(100vh-65px)]">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
