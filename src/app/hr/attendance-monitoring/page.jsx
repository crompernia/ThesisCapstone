/**
 * @fileoverview This file defines the Attendance Monitoring page for the HR portal.
 * It provides HR personnel with a view to monitor daily attendance records for all employees,
 * with options to filter the data.
 */
'use client';
import * as React from 'react';
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
import { Search } from "lucide-react";
import { getDailyAttendanceData, getBranches, getDepartmentsForBranch, getPositionsForDepartment } from "@/lib/data";

/**
 * Renders the HR attendance monitoring page.
 * Allows filtering and viewing daily attendance records for all employees.
 * @returns {JSX.Element} The attendance monitoring page component.
 */
export default function AttendanceMonitoringPage() {
  React.useEffect(() => {
      document.title = "HR Attendance Monitoring";
      }, []);
  const [attendanceData, setAttendanceData] = React.useState([]);
  const [branches, setBranches] = React.useState([]);
  const [departments, setDepartments] = React.useState([]);
  const [positions, setPositions] = React.useState([]);
  const [selectedBranch, setSelectedBranch] = React.useState('');
  const [selectedDepartment, setSelectedDepartment] = React.useState('');
  const today = new Date().toISOString().substring(0, 10);

  React.useEffect(() => {
    const fetchInitialData = async () => {
        const [attendance, branchesData] = await Promise.all([
            getDailyAttendanceData(today),
            getBranches()
        ]);
        setAttendanceData(attendance);
        setBranches(branchesData);
    };
    fetchInitialData();
  }, [today]);
  
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
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Attendance Monitoring</h1>
      
      {/* Filtering Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Employees</CardTitle>
          <CardDescription>
            Search and filter employee attendance for a specific date.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Input for selecting the date to view attendance for */}
            <Input type="date" defaultValue={today} />
            {/* Dropdown to filter by branch */}
            <Select value={selectedBranch} onValueChange={setSelectedBranch}>
              <SelectTrigger>
                <SelectValue placeholder="Select Branch" />
              </SelectTrigger>
              <SelectContent>
                {branches.map(b => <SelectItem key={b.id} value={b.name}>{b.name}</SelectItem>)}
              </SelectContent>
            </Select>
            {/* Dropdown to filter by department */}
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment} disabled={!selectedBranch || departments.length === 0}>
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
              </SelectContent>
            </Select>
            {/* Dropdown to filter by position */}
            <Select disabled={!selectedDepartment || positions.length === 0}>
              <SelectTrigger>
                <SelectValue placeholder="Select Position" />
              </SelectTrigger>
              <SelectContent>
                {positions.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button className="w-full">
              <Search />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Data Table */}
      <Card>
        <CardHeader>
            <CardTitle>Daily Attendance Tally</CardTitle>
            <CardDescription>Showing results for {new Date(today).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
        </CardHeader>
        <CardContent>
          {attendanceData.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Branch</TableHead>
                  <TableHead>Time In</TableHead>
                  <TableHead>Time Out</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceData.map((emp) => (
                  <TableRow key={emp.id}>
                    <TableCell className="font-mono text-xs">{emp.id}</TableCell>
                    <TableCell className="font-medium">{emp.name}</TableCell>
                    <TableCell>{emp.position}</TableCell>
                    <TableCell>{emp.branch}</TableCell>
                    <TableCell>{emp.timeIn || '--'}</TableCell>
                    <TableCell>{emp.timeOut || '--'}</TableCell>
                    <TableCell className="text-right">
                      {/* Badge color changes based on attendance status */}
                      <Badge variant={emp.status === 'Present' ? 'default' : emp.status === 'Late' ? 'secondary' : 'destructive'} className={emp.status === 'Present' ? 'bg-green-500' : ''}>
                        {emp.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground text-center">No attendance data for the selected date.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
