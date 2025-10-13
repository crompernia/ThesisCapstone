/**
 * @fileoverview This file defines the main landing page of the application.
 * It provides clear navigation options for users to access the different portals:
 * Employee, HR, and Admin.
 */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, User, ShieldCheck, Briefcase } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

/**
 * Renders the main landing page with navigation to different user portals.
 * @returns {JSX.Element} The landing page component.
 */
export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted/40 p-4">
      <div className="mb-8 flex flex-col items-center text-center">
        <Logo className="w-auto h-20 mb-4" />
        <h1 className="text-4xl font-bold font-headline">
          Welcome to the Chumplace Portal
        </h1>
        <p className="text-muted-foreground mt-2">
          Your central hub for employee and management portals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {/* Employee Dashboard Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User />
              Employee Dashboard
            </CardTitle>
            <CardDescription>
              Access your personal schedule, attendance, payslips, and more.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild className="w-full">
              <Link href="/dashboard">
                Go to Employee Hub <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* HR Dashboard Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase />
              HR Portal
            </CardTitle>
            <CardDescription>
              Manage employee data, scheduling, payroll, and announcements.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild className="w-full">
              <Link href="/hr/dashboard">
                Go to HR Portal <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Admin Dashboard Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck />
              Admin Portal
            </CardTitle>
            <CardDescription>
              Oversee system reports, approvals, and global settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild className="w-full">
              <Link href="/admin/dashboard">
                Go to Admin Portal <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
