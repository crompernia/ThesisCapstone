/**
 * @fileoverview This file defines the Demo Mode page for administrators.
 * It allows admins to select an employee and generate sample attendance data for 1-2 weeks.
 */
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getEmployees } from "@/lib/data";
import { generateSamplePayslipData } from "./actions";

export default function DemoPage() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const [employees, setEmployees] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch employees on client side
    getEmployees().then(setEmployees);
  }, []);

  useEffect(() => {
    // Show success/error messages based on URL params
    const success = searchParams.get('success');
    const error = searchParams.get('error');

    if (success === 'true') {
      toast({
        title: "Success!",
        description: "Sample attendance data has been generated successfully.",
        variant: "default",
      });
    } else if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    }
  }, [searchParams, toast]);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    await generateSamplePayslipData(formData);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Demo Mode</h1>
        <p className="text-muted-foreground">Generate comprehensive sample data for payslip demonstration.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Comprehensive Payslip Data</CardTitle>
          <CardDescription>
            Select an employee and generate complete sample data for payslip demonstration.
            This includes attendance records, leave requests, overtime data, and employee salary information.
            The data covers the past month to enable HR to create and demonstrate payslip functionality.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="employeeId">Select Employee</Label>
              <Select name="employeeId" required>
                <SelectTrigger>
                  <SelectValue placeholder="Choose an employee..." />
                </SelectTrigger>
                <SelectContent>
                  {employees.map((employee) => (
                    <SelectItem key={employee.id} value={employee.id}>
                      {employee.name} - {employee.position} ({employee.branch})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Generating..." : "Generate Payslip Demo Data"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}