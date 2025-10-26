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
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import QuickClock from '@/components/quick-clock';
import * as React from 'react';
import { DateTimeDisplay } from "@/components/date-time-display";
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
export default async function DashboardLayout({
  children,
}: { children: React.ReactNode }) {
  // Get the current session to display the logged-in user
  const session = await getSession();

  // Redirect to login if not authenticated
  if (!session || !session.user) {
    redirect("/");
  }

  const employee = {
    name: session.user.name || "Employee",
    email: session.user.email || "employee@example.com",
    photo: session.user.photo
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
              <Link href="/dashboard" passHref>
                <SidebarMenuButtonAny tooltip="Dashboard">
                  <LayoutDashboard />
                  Dashboard
                </SidebarMenuButtonAny>
              </Link>
            </SidebarMenuItemAny>
            <SidebarMenuItemAny>
              <Link href="/dashboard/schedule" passHref>
                <SidebarMenuButtonAny tooltip="Schedule">
                  <Calendar />
                  Schedule
                </SidebarMenuButtonAny>
              </Link>
            </SidebarMenuItemAny>
            <SidebarMenuItemAny>
              <Link href="/dashboard/attendance" passHref>
                <SidebarMenuButtonAny tooltip="Attendance">
                  <ClipboardCheck />
                  Attendance Record
                </SidebarMenuButtonAny>
              </Link>
            </SidebarMenuItemAny>
            <SidebarMenuItemAny>
              <Link href="/dashboard/payslip" passHref>
                <SidebarMenuButtonAny tooltip="Payslip">
                  <Wallet />
                  Payslip
                </SidebarMenuButtonAny>
              </Link>
            </SidebarMenuItemAny>
            <SidebarMenuItemAny>
              <Link href="/dashboard/leave" passHref>
                <SidebarMenuButtonAny tooltip="Leave Request">
                  <Send />
                  Leave Request
                </SidebarMenuButtonAny>
              </Link>
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
