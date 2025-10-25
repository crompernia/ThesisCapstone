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
import { getDailyAttendanceData, getBranches, getDepartmentsForBranch, getPositionsForDepartment, getEmployeeAbsenceSummary } from "@/lib/data";

/**
 * Renders the HR attendance monitoring page.
 * Allows filtering and viewing daily attendance records for all employees.
 * @returns {JSX.Element} The attendance monitoring page component.
 */
export default function AttendanceMonitoringPage() {
  React.useEffect(() => {
      document.title = "HR Attendance Monitoring";
      }, []);
  type AttendanceRow = { id: string; employeeNumber?: string; name?: string; position?: string; branch?: string; timeIn?: string | null; timeOut?: string | null; status?: string };
  type BranchType = { id: number; name: string; coordinates: string | null };

  const [attendanceData, setAttendanceData] = React.useState<AttendanceRow[]>([]);
  const [absenceData, setAbsenceData] = React.useState<any[]>([]);
  const [branches, setBranches] = React.useState<BranchType[]>([]);
  const [departments, setDepartments] = React.useState<string[]>([]);
  const [positions, setPositions] = React.useState<string[]>([]);
  const [selectedBranch, setSelectedBranch] = React.useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = React.useState<string>('');
  const today = new Date().toISOString().substring(0, 10);
  const [selectedDate, setSelectedDate] = React.useState<string>(today);
  const dateInputRef = React.useRef<HTMLInputElement | null>(null);
  const [viewMode, setViewMode] = React.useState<'daily' | 'absence'>('daily');

  React.useEffect(() => {
    const fetchInitialData = async () => {
        const [attendance, branchesData, absence] = await Promise.all([
            getDailyAttendanceData(selectedDate),
            getBranches(),
            getEmployeeAbsenceSummary()
        ]);
   setAttendanceData(attendance as AttendanceRow[]);
   setBranches(branchesData as BranchType[]);
   setAbsenceData(absence);
    };
    fetchInitialData();
  }, [selectedDate]);
  
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
      
      {/* View Mode Toggle */}
      <Card>
        <CardHeader>
          <CardTitle>View Mode</CardTitle>
          <CardDescription>
            Switch between daily attendance view and absence summary view.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button
              variant={viewMode === 'daily' ? 'default' : 'outline'}
              onClick={() => setViewMode('daily')}
            >
              Daily Attendance
            </Button>
            <Button
              variant={viewMode === 'absence' ? 'default' : 'outline'}
              onClick={() => setViewMode('absence')}
            >
              Absence Summary
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Filtering Controls */}
      {viewMode === 'daily' && (
        <Card>
          <CardHeader>
            <CardTitle>Filter Employees</CardTitle>
            <CardDescription>
              Search and filter employee attendance for a specific date.
            </CardDescription>
          </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Date input restored (inline in filter controls) */}
            <div>
              <input
                id="attendance-date-input"
                ref={dateInputRef}
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border rounded px-2 py-1"
                aria-label="Select attendance date"
              />
            </div>
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
      )}

      {/* Date navigator placed between filter and attendance */}
      {viewMode === 'daily' && (
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-4 p-2">
          <Button onClick={() => { const d = new Date(selectedDate); d.setDate(d.getDate() - 1); setSelectedDate(d.toISOString().slice(0,10)); }}>{'←'}</Button>
          <div className="font-medium">{new Date(selectedDate).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
          <Button onClick={() => { const d = new Date(selectedDate); d.setDate(d.getDate() + 1); setSelectedDate(d.toISOString().slice(0,10)); }}>{'→'}</Button>
        </div>
      </div>
      )}

      {/* Attendance Data Table */}
      {viewMode === 'daily' && (
      <Card>
        <CardHeader>
            <CardTitle>Daily Attendance Tally</CardTitle>
            <div className="flex items-center justify-between w-full">
              <CardDescription>Showing results for {new Date(selectedDate).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
              <div className="flex gap-2">
                <Button onClick={async () => {
                  // create pdf of current attendanceData
                  const jsPDF = (await import('jspdf')).default;
                  const autoTable = (await import('jspdf-autotable')).default;
                  const doc = new jsPDF();
                  doc.setFontSize(16);
                  doc.text(`Attendance - ${new Date(selectedDate).toLocaleDateString()}`, 14, 20);
                  const body = attendanceData.map(r => [r.employeeNumber || '', r.name || '', r.position || '', r.branch || '', r.timeIn || '--', r.timeOut || '--', r.status || '']);
                  autoTable(doc as any, {
                    startY: 30,
                    head: [['Employee ID', 'Name', 'Position', 'Branch', 'Time In', 'Time Out', 'Status']],
                    body,
                    styles: { fontSize: 9 }
                  });
                  doc.save(`attendance-${selectedDate}.pdf`);
                }}>Create PDF file</Button>
              </div>
            </div>
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
                    <TableCell className="font-mono text-xs">{emp.employeeNumber}</TableCell>
                    <TableCell className="font-medium">{emp.name}</TableCell>
                    <TableCell>{emp.position}</TableCell>
                    <TableCell>{emp.branch}</TableCell>
                    <TableCell>{emp.timeIn || '--'}</TableCell>
                    <TableCell>{emp.timeOut || '--'}</TableCell>
                    <TableCell className="text-right">
                      {/* Badge color changes based on attendance status */}
                      <Badge variant={emp.status === 'Present' ? 'default' : 'destructive'} className={emp.status === 'Present' ? 'bg-green-500' : 'bg-red-500'}>
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
      )}

      {/* Absence Summary Table */}
      {viewMode === 'absence' && (
        <Card>
          <CardHeader>
            <CardTitle>Employee Absence Summary</CardTitle>
            <CardDescription>
              Summary of absences for all employees from their hire date to present.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {absenceData.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Branch</TableHead>
                    <TableHead>Total Working Days</TableHead>
                    <TableHead>Total Absences</TableHead>
                    <TableHead>Absence Rate (%)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {absenceData.map((emp: any) => (
                    <TableRow key={emp.id}>
                      <TableCell className="font-mono text-xs">{emp.employeeNumber}</TableCell>
                      <TableCell className="font-medium">{emp.name}</TableCell>
                      <TableCell>{emp.position}</TableCell>
                      <TableCell>{emp.department}</TableCell>
                      <TableCell>{emp.branch}</TableCell>
                      <TableCell>{emp.totalWorkingDays}</TableCell>
                      <TableCell className="text-red-600 font-semibold">{emp.totalAbsences}</TableCell>
                      <TableCell className={emp.absenceRate > 10 ? 'text-red-600 font-semibold' : ''}>
                        {emp.absenceRate}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-muted-foreground text-center">No absence data available.</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
