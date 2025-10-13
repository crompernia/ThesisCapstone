/**
 * @fileoverview This file defines the Employee Data Management page for the HR portal.
 * It provides a comprehensive interface for HR personnel to view, search, filter,
 * and manage all employee records in the company.
 */
'use client';
import * as React from 'react';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
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
import { Search, PlusCircle, FileText, MoreHorizontal } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { getEmployees, deleteEmployee, getBranches, getDepartmentsForBranch, getPositionsForDepartment } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

/**
 * Renders the HR employee data management page.
 * Allows searching, filtering, and managing employee records.
 * @returns {JSX.Element} The employee data management page component.
 */
export default function EmployeeDataPage() {
  React.useEffect(() => {
      document.title = "HR Employee Data";
      }, []);
  const [employees, setEmployees] = React.useState([]);
  const { toast } = useToast();
  const [branches, setBranches] = React.useState([]);
  const [departments, setDepartments] = React.useState([]);
  const [positions, setPositions] = React.useState([]);
  const [selectedBranch, setSelectedBranch] = React.useState('');
  const [selectedDepartment, setSelectedDepartment] = React.useState('');

  const fetchEmployees = React.useCallback(async () => {
      const data = await getEmployees();
      setEmployees(data);
  }, []);

  React.useEffect(() => {
    fetchEmployees();
    const fetchFilterData = async () => {
      const branchesData = await getBranches();
      setBranches(branchesData);
    };
    fetchFilterData();
  }, [fetchEmployees]);
  
  React.useEffect(() => {
    const fetchDepartments = async () => {
      if (selectedBranch) {
        const depts = await getDepartmentsForBranch(selectedBranch);
        setDepartments(depts);
        setSelectedDepartment('');
        setPositions([]);
      } else {
        setDepartments([]);
        setPositions([]);
      }
    };
    fetchDepartments();
  }, [selectedBranch]);

  React.useEffect(() => {
    const fetchPositions = async () => {
      if (selectedDepartment) {
        const pos = await getPositionsForDepartment(selectedDepartment);
        setPositions(pos);
      } else {
        setPositions([]);
      }
    };
    fetchPositions();
  }, [selectedDepartment]);


  const handleGenerateReport = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text("Employee Report", 14, 22);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);

    autoTable(doc, {
      startY: 40,
      head: [['Employee ID', 'Name', 'Position', 'Branch', 'Status']],
      body: employees.map(emp => [
        emp.id,
        emp.name,
        emp.position,
        emp.branch,
        emp.status,
      ]),
      theme: 'striped',
      headStyles: { fillColor: [41, 128, 185] },
    });

    doc.save('Employee-Report.pdf');
  };
  
  const handleDelete = async (id) => {
    const result = await deleteEmployee(id);
    if (result) {
        toast({
            title: "Success",
            description: "Employee has been deleted.",
        });
        fetchEmployees();
    } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to delete employee.",
        });
    }
  };


  return (
    <div className="space-y-6">
      {/* Page Header and Actions */}
      <div className="flex justify-between items-start">
        <div>
            <h1 className="text-3xl font-bold font-headline">Employee Data Management</h1>
            <p className="text-muted-foreground">Add, search, and manage employee profiles.</p>
        </div>
        <div className="flex gap-2">
            {/* Buttons for primary actions like uploading bulk data or adding a single new employee */}
            <Button variant="outline" onClick={handleGenerateReport}><FileText /> Generate Employee Report</Button>
            <Button asChild>
                <Link href="/hr/employee-data/new">
                    <PlusCircle /> Add Employee
                </Link>
            </Button>
        </div>
      </div>
      
      {/* Employee Table and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Find Employees</CardTitle>
          <CardDescription>Use the filters below to search for specific employees.</CardDescription>
          {/* A set of controls to filter the employee list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 pt-4">
            <Input placeholder="Search by name or ID..." className="lg:col-span-2"/>
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger><SelectValue placeholder="Select Branch" /></SelectTrigger>
              <SelectContent>
                {branches.map(b => <SelectItem key={b.id} value={b.name}>{b.name}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment} disabled={!selectedBranch || departments.length === 0}>
              <SelectTrigger><SelectValue placeholder="Select Department" /></SelectTrigger>
              <SelectContent>
                {departments.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select disabled={!selectedDepartment || positions.length === 0}>
              <SelectTrigger><SelectValue placeholder="Select Position" /></SelectTrigger>
              <SelectContent>
                 {positions.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button className="w-full"><Search />Search</Button>
          </div>
        </CardHeader>
        <CardContent>
          {employees.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Branch</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((emp) => (
                  <TableRow key={emp.id}>
                    <TableCell className="font-mono text-xs">{emp.id}</TableCell>
                    <TableCell className="font-medium">{emp.name}</TableCell>
                    <TableCell>{emp.position}</TableCell>
                    <TableCell>{emp.branch}</TableCell>
                    <TableCell>
                      {/* Badge color reflects the employee's status */}
                      <Badge variant={emp.status === 'Active' ? 'default' : emp.status === 'On Leave' ? 'secondary' : 'destructive'} className={emp.status === 'Active' ? 'bg-green-500' : ''}>
                        {emp.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {/* Dropdown menu for individual employee actions */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild><Link href={`/hr/employee-data/${emp.id}`}>View Profile</Link></DropdownMenuItem>
                          <DropdownMenuItem asChild><Link href={`/hr/employee-data/${emp.id}/edit`}>Edit</Link></DropdownMenuItem>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-red-600">Delete Employee Data</DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete the employee's data from the servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleDelete(emp.id)}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground text-center">No employees found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
