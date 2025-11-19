/**
 * @fileoverview This file defines the layout for the HR Portal section of the application.
 * It includes a sidebar with navigation links specific to HR tasks and responsibilities,
 * ensuring a consistent and organized user experience for HR personnel.
 */
'use client';

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
  Timer,
  MapPin,
  Building,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { useSession } from "next-auth/react";
import * as React from 'react';

/**
 * Layout component for the HR Portal.
 * It includes a sidebar for navigation specific to HR tasks.
 * @param {{ children: React.ReactNode }} props - The props for the component.
 * @returns {JSX.Element} The HR dashboard layout.
 */
export default function HRDashboardLayout({
  children,
}: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const { data: session, status } = useSession();
  const [loadingHref, setLoadingHref] = React.useState<string | null>(null);

  const handleNavigation = (href: string) => {
    if (pathname === href) return; // Already on the page
    setLoadingHref(href);
    startTransition(() => {
      router.push(href);
    });
  };

  React.useEffect(() => {
    setLoadingHref(null);
  }, [pathname]);

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (status === "loading") return; // Still loading
    if (!session || !session.user) {
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!session || !session.user) {
    return null; // Will redirect
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
              <SidebarMenuButton tooltip="Dashboard" className="w-full justify-start" onClick={() => handleNavigation("/hr/dashboard")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/dashboard" ? <Loader2 className="h-4 w-4 animate-spin" /> : <LayoutDashboard />}
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Scheduling" className="w-full justify-start" onClick={() => handleNavigation("/hr/scheduling")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/scheduling" ? <Loader2 className="h-4 w-4 animate-spin" /> : <CalendarPlus />}
                Scheduling
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Attendance Monitoring" className="w-full justify-start" onClick={() => handleNavigation("/hr/attendance-monitoring")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/attendance-monitoring" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ClipboardCheck />}
                Attendance Monitoring
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Clock In/Out" className="w-full justify-start" onClick={() => handleNavigation("/hr/attendance")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/attendance" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Clock />}
                Clock In/Out
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Payslips" className="w-full justify-start" onClick={() => handleNavigation("/hr/payslip-generation")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/payslip-generation" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wallet />}
                Payslip Generation
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Employee Data" className="w-full justify-start" onClick={() => handleNavigation("/hr/employee-data")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/employee-data" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Users />}
                Employee Data
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Branches" className="w-full justify-start" onClick={() => handleNavigation("/hr/branches")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/branches" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Building />}
                Branches
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Positions & Rates" className="w-full justify-start" onClick={() => handleNavigation("/hr/positions")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/positions" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Briefcase />}
                Positions & Rates
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Branch Allocation" className="w-full justify-start" onClick={() => handleNavigation("/hr/branch-allocation")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/branch-allocation" ? <Loader2 className="h-4 w-4 animate-spin" /> : <MapPin />}
                Branch Allocation
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Announcements" className="w-full justify-start" onClick={() => handleNavigation("/hr/announcements")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/announcements" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Megaphone />}
                Announcements
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Leave Approvals" className="w-full justify-start" onClick={() => handleNavigation("/hr/leave-approvals")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/leave-approvals" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ClipboardList />}
                Leave Approvals
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Overtime Approvals" className="w-full justify-start" onClick={() => handleNavigation("/hr/overtime-approvals")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/hr/overtime-approvals" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Timer />}
                Overtime Approvals
              </SidebarMenuButton>
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
