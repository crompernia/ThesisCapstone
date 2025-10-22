/**
 * @fileoverview This file defines the first step of the Payslip Generation process
 * for the HR portal. It provides a filterable list of employees, allowing HR
 * to select an employee to generate a payslip for.
 */
"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, FileCog } from "lucide-react";
import Link from "next/link";
import {
  getEmployeesWithPayslipStatus,
  getBranches,
  getDepartmentsForBranch,
} from "@/lib/data";

/**
 * Renders the HR payslip generation landing page.
 * Displays a list of employees with search and filtering capabilities.
 * @returns {JSX.Element} The payslip generation employee list page.
 */
export default function PayslipGenerationPage() {
  React.useEffect(() => {
    document.title = "HR Payslip Generation";
  }, []);
  const [employees, setEmployees] = React.useState<any[]>([]);
  const [branches, setBranches] = React.useState<any[]>([]);
  const [departments, setDepartments] = React.useState<any[]>([]);
  const [selectedBranch, setSelectedBranch] = React.useState<string>("");

  React.useEffect(() => {
    const fetchInitialData = async () => {
      const [employeesData, branchesData] = await Promise.all([
        getEmployeesWithPayslipStatus(),
        getBranches(),
      ]);
      setEmployees(employeesData);
      setBranches(branchesData);
    };
    fetchInitialData();
  }, []);

  React.useEffect(() => {
    const fetchDepartments = async () => {
      if (selectedBranch) {
        const depts = await getDepartmentsForBranch(selectedBranch);
        setDepartments(depts);
      } else {
        setDepartments([]);
      }
    };
    fetchDepartments();
  }, [selectedBranch]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Payslip Generation</h1>
        <p className="text-muted-foreground">
          Select an employee to generate or view their payslip.
        </p>
      </div>

      {/* Filtering Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Employees</CardTitle>
          <CardDescription>
            Search for employees by name, department, branch, etc.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            <Input
              placeholder="Search by name or ID..."
              className="lg:col-span-2"
            />
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger>
                <SelectValue placeholder="Select Branch" />
              </SelectTrigger>
              <SelectContent>
                {branches.map((b) => (
                  <SelectItem key={b.id} value={b.name}>
                    {b.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select disabled={!selectedBranch || departments.length === 0}>
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Payslip Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="generated">Generated</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full">
              <Search className="mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Employee List Table */}
      <Card>
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
          <CardDescription>
            Select an employee to proceed with payslip generation for the
            current pay period.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {employees.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Benefits</TableHead>
                  <TableHead>Payslip Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((emp) => (
                  <TableRow key={emp.id}>
                    <TableCell className="font-mono text-xs">
                      {emp.employeeNumber}
                    </TableCell>
                    <TableCell className="font-medium">{emp.name}</TableCell>
                    <TableCell>{emp.position}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          emp.benefitsStatus === "Complete"
                            ? "default"
                            : "destructive"
                        }
                        className={
                          emp.benefitsStatus === "Complete" ? "bg-blue-500" : ""
                        }
                      >
                        {emp.benefitsStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          emp.payslipStatus === "Generated"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          emp.payslipStatus === "Generated"
                            ? "bg-green-500"
                            : ""
                        }
                      >
                        {emp.payslipStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/hr/payslip-generation/${emp.id}`}>
                          <FileCog className="mr-2" />
                          {emp.payslipStatus === "Generated"
                            ? "View/Edit"
                            : "Generate"}
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground text-center">
              No employees found matching your criteria.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
