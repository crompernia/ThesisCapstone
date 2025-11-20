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
  getPositionsForDepartment,
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
  const [filteredEmployees, setFilteredEmployees] = React.useState<any[]>([]);
  const [branches, setBranches] = React.useState<any[]>([]);
  const [departments, setDepartments] = React.useState<any[]>([]);
  const [selectedBranch, setSelectedBranch] = React.useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = React.useState<string>("");
  const [selectedPosition, setSelectedPosition] = React.useState<string>("");
  const [selectedPayslipStatus, setSelectedPayslipStatus] = React.useState<string>("");
  const [positions, setPositions] = React.useState<any[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [showSuggestions, setShowSuggestions] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      const [employeesData, branchesData] = await Promise.all([
        getEmployeesWithPayslipStatus(),
        getBranches(),
      ]);
      setEmployees(employeesData);
      setFilteredEmployees(employeesData);
      setBranches(branchesData.branches);
    };
    fetchInitialData();
  }, []);

  React.useEffect(() => {
    const fetchDepartments = async () => {
      if (selectedBranch) {
        const depts = await getDepartmentsForBranch(selectedBranch);
        setDepartments(depts);
        setSelectedDepartment("");
        setPositions([]);
        setSelectedPosition("");
      } else {
        setDepartments([]);
        setSelectedDepartment("");
        setPositions([]);
        setSelectedPosition("");
      }
    };
    fetchDepartments();
  }, [selectedBranch]);

  React.useEffect(() => {
    const fetchPositions = async () => {
      if (selectedDepartment) {
        const pos = await getPositionsForDepartment(selectedDepartment);
        setPositions(pos);
        setSelectedPosition("");
      } else {
        setPositions([]);
        setSelectedPosition("");
      }
    };
    fetchPositions();
  }, [selectedDepartment]);

  const handleSearch = () => {
    let filtered = employees;

    // Filter by search query (name or employee number)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(emp =>
        emp.name.toLowerCase().includes(query) ||
        emp.employeeNumber.toLowerCase().includes(query)
      );
    }

    // Filter by branch
    if (selectedBranch) {
      filtered = filtered.filter(emp => emp.branch === selectedBranch);
    }

    // Filter by department
    if (selectedDepartment) {
      filtered = filtered.filter(emp => emp.department === selectedDepartment);
    }

    // Filter by position
    if (selectedPosition) {
      filtered = filtered.filter(emp => emp.position === selectedPosition);
    }

    // Filter by payslip status
    if (selectedPayslipStatus) {
      const statusMap: { [key: string]: string } = {
        'generated': 'Settled',
        'pending': 'Pending'
      };
      const mappedStatus = statusMap[selectedPayslipStatus];
      if (mappedStatus) {
        filtered = filtered.filter(emp => emp.payslipStatus === mappedStatus);
      }
    }

    // Sort by employee number (numerically if possible, otherwise lexicographically)
    filtered.sort((a, b) => {
      const aNum = parseInt(a.employeeNumber);
      const bNum = parseInt(b.employeeNumber);

      // If both are valid numbers, sort numerically
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }

      // Otherwise sort lexicographically
      return a.employeeNumber.localeCompare(b.employeeNumber);
    });

    setFilteredEmployees(filtered);
  };

  // Auto-filter when filters change
  React.useEffect(() => {
    handleSearch();
  }, [selectedBranch, selectedDepartment, selectedPosition, selectedPayslipStatus, searchQuery, employees]);

  // Also sort initial employees list
  React.useEffect(() => {
    if (employees.length > 0) {
      const sortedEmployees = [...employees].sort((a, b) => {
        const aNum = parseInt(a.employeeNumber);
        const bNum = parseInt(b.employeeNumber);

        // If both are valid numbers, sort numerically
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return aNum - bNum;
        }

        // Otherwise sort lexicographically
        return a.employeeNumber.localeCompare(b.employeeNumber);
      });
      setEmployees(sortedEmployees);
      setFilteredEmployees(sortedEmployees);
    }
  }, [employees.length > 0]); // Only run when employees are first loaded

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Payslip Generation</h1>
        <p className="text-muted-foreground">
          Select an employee to generate or view their payslip. Employees receive wages twice per month (1st and 2nd half).
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
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name or ID..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              {showSuggestions && searchQuery && filteredEmployees.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                  {filteredEmployees.slice(0, 5).map((emp) => (
                    <button
                      key={emp.id}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                      onClick={() => {
                        setSearchQuery(emp.name);
                        setShowSuggestions(false);
                      }}
                    >
                      <div className="flex flex-col">
                        <span>{emp.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {emp.employeeNumber} - {emp.position} - {emp.branch}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
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
            <Select
              value={selectedDepartment}
              onValueChange={setSelectedDepartment}
              disabled={!selectedBranch || departments.length === 0}
            >
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
            <Select
              value={selectedPosition}
              onValueChange={setSelectedPosition}
              disabled={!selectedDepartment || positions.length === 0}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Position" />
              </SelectTrigger>
              <SelectContent>
                {positions.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedPayslipStatus} onValueChange={setSelectedPayslipStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Payslip Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="generated">Settled</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Employee List Table */}
      <Card>
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
          <CardDescription>
            Select an employee to proceed with payslip generation. Each employee receives two payslips per month (1st and 2nd half).
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredEmployees.length > 0 ? (
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
                {filteredEmployees.map((emp) => (
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
                          emp.payslipStatus === "Settled"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          emp.payslipStatus === "Settled"
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
                          {emp.payslipStatus === "Settled"
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
              {employees.length === 0 ? "No employees found." : "No employees found matching your filter criteria."}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
