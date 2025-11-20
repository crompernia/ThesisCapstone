/**
 * @fileoverview This file defines the Employee Data Management page for the HR portal.
 * It provides a comprehensive interface for HR personnel to view, search, filter,
 * and manage all employee records in the company.
 */
"use client";
import * as React from "react";
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
import { Search, PlusCircle, FileText, Pencil, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  getEmployees,
  deleteEmployee,
  getAllBranches,
  getDepartmentsForBranch,
  getPositionsForDepartment,
} from "@/lib/data";
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
  const [selectedBranch, setSelectedBranch] = React.useState("");
  const [selectedDepartment, setSelectedDepartment] = React.useState("");
  const [selectedPosition, setSelectedPosition] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [filteredEmployees, setFilteredEmployees] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [itemsPerPage] = React.useState<number>(10);
  const [sortField, setSortField] = React.useState<string>("employeeNumber");
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc");

  const fetchEmployees = React.useCallback(async () => {
    const data = await getEmployees();
    setEmployees(data);
    setFilteredEmployees(data);
  }, []);

  React.useEffect(() => {
    fetchEmployees();
    const fetchFilterData = async () => {
      const branchesData = await getAllBranches();
      setBranches(branchesData);
    };
    fetchFilterData();
  }, [fetchEmployees]);

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

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Auto-filter when filters change
  React.useEffect(() => {
    handleSearch();
  }, [selectedBranch, selectedDepartment, selectedPosition, searchQuery, employees, sortField, sortDirection]);


  const handleGenerateReport = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Employee Report", 14, 22);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);

    autoTable(doc, {
      startY: 40,
      head: [["Employee ID", "Name", "Position", "Branch", "Status"]],
      body: filteredEmployees.map((emp) => [
        emp.employeeNumber,
        emp.name,
        emp.position,
        emp.branch,
        emp.status,
      ]),
      theme: "striped",
      headStyles: { fillColor: [41, 128, 185] },
    });

    doc.save("Employee-Report.pdf");
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

    // Sort by selected field
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;

      if (sortField === "employeeNumber") {
        aValue = parseInt(a.employeeNumber) || a.employeeNumber;
        bValue = parseInt(b.employeeNumber) || b.employeeNumber;
      } else {
        aValue = a[sortField as keyof typeof a];
        bValue = b[sortField as keyof typeof b];
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        const comparison = aValue.localeCompare(bValue);
        return sortDirection === "asc" ? comparison : -comparison;
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

    setFilteredEmployees(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);

  return (
    <div className="space-y-6">
      {/* Page Header and Actions */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline">
            Employees
          </h1>
          <p className="text-muted-foreground">
            Manage employee profiles.
          </p>
        </div>
        <div className="flex gap-2">
          {/* Buttons for primary actions like uploading bulk data or adding a single new employee */}
          <Button variant="outline" onClick={handleGenerateReport}>
            <FileText /> Generate Employee Report
          </Button>
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
          <CardDescription>
            Use the filters below to search for specific employees.
          </CardDescription>
          {/* A set of controls to filter the employee list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name or employee ID..."
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

            {/* {console.log('test >> ', selectedBranch, departments)} */}
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
          </div>
        </CardHeader>
        <CardContent>
          {filteredEmployees.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => handleSort("name")} className="h-auto p-0 font-semibold">
                      Name
                      {sortField === "name" && (
                        sortDirection === "asc" ? <ChevronUp className="inline h-4 w-4 ml-1" /> : <ChevronDown className="inline h-4 w-4 ml-1" />
                      )}
                    </Button>
                  </TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Branch</TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => handleSort("status")} className="h-auto p-0 font-semibold">
                      Status
                      {sortField === "status" && (
                        sortDirection === "asc" ? <ChevronUp className="inline h-4 w-4 ml-1" /> : <ChevronDown className="inline h-4 w-4 ml-1" />
                      )}
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedEmployees.map((emp) => (
                  <TableRow key={emp.id}>
                    <TableCell className="font-mono text-xs">
                      {emp.employeeNumber}
                    </TableCell>
                    <TableCell className="font-medium">
                      <Link href={`/hr/employee-data/${emp.id}`} className="hover:underline">
                        {emp.name}
                      </Link>
                    </TableCell>
                    <TableCell>{emp.position}</TableCell>
                    <TableCell>{emp.branch}</TableCell>
                    <TableCell>
                      {/* Badge color reflects the employee's status */}
                      <Badge
                        variant={
                          emp.status === "Active"
                            ? "default"
                            : emp.status === "On Leave"
                            ? "secondary"
                            : "destructive"
                        }
                        className={
                          emp.status === "Active" ? "bg-green-500" : ""
                        }
                      >
                        {emp.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/hr/employee-data/${emp.id}/edit`}>
                            <Pencil className="h-4 w-4" />
                          </Link>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete the employee's data from
                                the servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(emp.id)}
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
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
        {filteredEmployees.length > 0 && (
          <div className="flex justify-between items-center p-4 border-t">
            <p className="text-sm text-muted-foreground">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredEmployees.length)} of {filteredEmployees.length} entries
            </p>
            <div className="flex gap-2">
              <Button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  variant={page === currentPage ? "default" : "outline"}
                  size="sm"
                >
                  {page}
                </Button>
              ))}
              <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
