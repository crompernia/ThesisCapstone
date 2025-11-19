/**
 * @fileoverview This file defines the layout for the main employee dashboard.
 * It includes the primary sidebar navigation and the main content area where
 * different dashboard pages will be rendered.
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
  Calendar,
  ClipboardCheck,
  Wallet,
  Send,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import QuickClock from '@/components/quick-clock';
import * as React from 'react';
import { DateTimeDisplay } from "@/components/date-time-display";
import { useRouter, usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { useSession } from "next-auth/react";
// Temporary any-casts to work around UI prop typing mismatches in layout
const SidebarProviderAny: any = (SidebarProvider as any) || (undefined as any);
const SidebarAny: any = (Sidebar as any) || (undefined as any);
const SidebarHeaderAny: any = (SidebarHeader as any) || (undefined as any);
const SidebarContentAny: any = (SidebarContent as any) || (undefined as any);
const SidebarTriggerAny: any = (SidebarTrigger as any) || (undefined as any);
const SidebarMenuAny: any = (SidebarMenu as any) || (undefined as any);
const SidebarMenuItemAny: any = (SidebarMenuItem as any) || (undefined as any);
const SidebarMenuButtonAny: any = (SidebarMenuButton as any) || (undefined as any);
const SidebarInsetAny: any = (SidebarInset as any) || (undefined as any);

/**
 * Layout component for the employee dashboard.
 * It includes a sidebar for navigation and a header with user information.
 * @param {{ children: React.ReactNode }} props - The props for the component.
 * @returns {JSX.Element} The dashboard layout.
 */
export default function DashboardLayout({
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

  const employee = {
    name: session.user.name || "Employee",
    email: session.user.email || "employee@example.com",
    photo: undefined // Photo removed from session, fetch from DB if needed
  };

  const firstName = employee.name.split(' ')[0];

  return (
    <SidebarProviderAny>
      {/* Sidebar Navigation */}
      <SidebarAny>
        <SidebarHeaderAny>
          {/* The company logo is displayed at the top of the sidebar. */}
          <div className="flex items-center gap-2 p-2">
            <Logo className="w-auto h-9" />
            <h1 className="text-xl font-semibold font-headline">Dashboard</h1>
          </div>
        </SidebarHeaderAny>
        <SidebarContentAny>
          <SidebarMenuAny>
            <SidebarMenuItemAny>
              <SidebarMenuButtonAny tooltip="Dashboard" onClick={() => handleNavigation("/dashboard")} disabled={loadingHref !== null}>
                {loadingHref === "/dashboard" ? <Loader2 className="h-4 w-4 animate-spin" /> : <LayoutDashboard />}
                Dashboard
              </SidebarMenuButtonAny>
            </SidebarMenuItemAny>
            <SidebarMenuItemAny>
              <SidebarMenuButtonAny tooltip="Schedule" onClick={() => handleNavigation("/dashboard/schedule")} disabled={loadingHref !== null}>
                {loadingHref === "/dashboard/schedule" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Calendar />}
                Schedule
              </SidebarMenuButtonAny>
            </SidebarMenuItemAny>
            <SidebarMenuItemAny>
              <SidebarMenuButtonAny tooltip="Attendance" onClick={() => handleNavigation("/dashboard/attendance")} disabled={loadingHref !== null}>
                {loadingHref === "/dashboard/attendance" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ClipboardCheck />}
                Attendance Record
              </SidebarMenuButtonAny>
            </SidebarMenuItemAny>
            <SidebarMenuItemAny>
              <SidebarMenuButtonAny tooltip="Payslip" onClick={() => handleNavigation("/dashboard/payslip")} disabled={loadingHref !== null}>
                {loadingHref === "/dashboard/payslip" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wallet />}
                Payslip
              </SidebarMenuButtonAny>
            </SidebarMenuItemAny>
            <SidebarMenuItemAny>
              <SidebarMenuButtonAny tooltip="Leave Request" onClick={() => handleNavigation("/dashboard/leave")} disabled={loadingHref !== null}>
                {loadingHref === "/dashboard/leave" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send />}
                Leave Request
              </SidebarMenuButtonAny>
            </SidebarMenuItemAny>
            <SidebarMenuItemAny>
              <SidebarMenuButtonAny tooltip="Overtime Request" onClick={() => handleNavigation("/dashboard/overtime")} disabled={loadingHref !== null}>
                {loadingHref === "/dashboard/overtime" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Clock />}
                Overtime Request
              </SidebarMenuButtonAny>
            </SidebarMenuItemAny>
          </SidebarMenuAny>
        </SidebarContentAny>
      </SidebarAny>
      {/* Main Content Area */}
      <SidebarInsetAny>
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-4">
            <SidebarTriggerAny />
            <span className="text-lg font-medium">Welcome, {firstName}</span>
          </div>
          <div className="flex items-center gap-4">
            <DateTimeDisplay />
            <UserNav employeeName={employee.name} employeeEmail={employee.email} employeePhoto={employee.photo} />
          </div>
        </header>
        <main className="p-4 sm:p-6 lg:p-8 bg-muted/40 min-h-[calc(100vh-65px)]">
            {children}
            <QuickClock />
        </main>
      </SidebarInsetAny>
    </SidebarProviderAny>
  );
}
