/**
 * @fileoverview This file defines the employee profile view page for the HR portal.
 * It displays detailed information about a single employee.
 */
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit } from "lucide-react";
import Link from "next/link";
import { getEmployeeById } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

/**
 * Renders the detailed view of a single employee's profile.
 * @param {{ params: { id: string } }} props - The props containing the employee ID from the URL.
 * @returns {JSX.Element} The employee profile page component.
 */
export default async function EmployeeProfilePage({ params }) {
  const employee = await getEmployeeById(params.id);

  if (!employee) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Employee not found</h1>
        <p className="text-muted-foreground">The employee with ID {params.id} could not be found.</p>
        <Button asChild variant="link" className="mt-4">
          <Link href="/hr/employee-data">
            <ArrowLeft className="mr-2" />
            Back to Employee List
          </Link>
        </Button>
      </div>
    )
  }
  
  const initials = employee.name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
            <Button asChild variant="outline" size="sm">
                <Link href="/hr/employee-data">
                    <ArrowLeft className="mr-2" />
                    Back to Employee List
                </Link>
            </Button>
            <Button asChild>
                <Link href={`/hr/employee-data/${employee.id}/edit`}>
                    <Edit className="mr-2" />
                    Edit Profile
                </Link>
            </Button>
        </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
            <div className="flex items-start gap-6">
                <Avatar className="h-24 w-24">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${employee.email}`} alt={employee.name} />
                    <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <CardTitle className="font-headline text-3xl">{employee.name}</CardTitle>
                        <Badge 
                            variant={employee.status === 'Active' ? 'default' : employee.status === 'On Leave' ? 'secondary' : 'destructive'} 
                            className={`${employee.status === 'Active' ? 'bg-green-500' : ''} text-lg`}
                        >
                            {employee.status}
                        </Badge>
                    </div>
                    <CardDescription className="text-lg">{employee.position}</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
            <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <InfoItem label="Employee ID" value={employee.id} />
                    <InfoItem label="Email" value={employee.email} />
                    <InfoItem label="Date of Birth" value={employee.date_of_birth} />
                    <InfoItem label="Gender" value={employee.gender} />
                </div>
            </div>
             <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">Employment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <InfoItem label="Department" value={employee.department} />
                    <InfoItem label="Branch" value={employee.branch} />
                    <InfoItem label="Date Hired" value={employee.date_hired} />
                    <InfoItem label="Available Leaves" value={`${employee.available_leaves} days`} />
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoItem({ label, value }) {
    return (
        <div>
            <p className="font-medium text-muted-foreground">{label}</p>
            <p>{value}</p>
        </div>
    )
}
