/**
 * @fileoverview This file defines the layout for the Admin Portal section of the application.
 * It includes a sidebar with navigation links specific to administrative tasks.
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
  FileText,
  UserCheck,
  GitBranch,
  Building,
  Briefcase,
  PlayCircle
} from "lucide-react";
import { Logo } from "@/components/logo";
import { useRouter, usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { useSession } from "next-auth/react";
import * as React from 'react';

/**
 * Layout component for the Admin Portal.
 * It includes a sidebar for navigation specific to admin tasks.
 * @param {{ children: React.ReactNode }} props - The props for the component.
 * @returns {JSX.Element} The admin dashboard layout.
 */
export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              <SidebarMenuButton tooltip="Dashboard" className="w-full justify-start" onClick={() => handleNavigation("/admin/dashboard")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/admin/dashboard" ? <Loader2 className="h-4 w-4 animate-spin" /> : <LayoutDashboard />}
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="New Employees" className="w-full justify-start" onClick={() => handleNavigation("/admin/approvals")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/admin/approvals" ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserCheck />}
                New Employees
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Reports" className="w-full justify-start" onClick={() => handleNavigation("/admin/reports")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/admin/reports" ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileText />}
                Report Monitoring
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem {...({} as any)}>
              <SidebarMenuButton tooltip="Demo Mode / Generate Sample Data" className="w-full justify-start" onClick={() => handleNavigation("/admin/demo")} disabled={loadingHref !== null} {...({} as any)}>
                {loadingHref === "/admin/demo" ? <Loader2 className="h-4 w-4 animate-spin" /> : <PlayCircle />}
                Demo Mode
              </SidebarMenuButton>
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
