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
import { getDailyAttendanceData, getEmployeeAbsenceSummary } from "@/lib/data";

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

  const [attendanceData, setAttendanceData] = React.useState<AttendanceRow[]>([]);
  const [filteredAttendanceData, setFilteredAttendanceData] = React.useState<AttendanceRow[]>([]);
  const [absenceData, setAbsenceData] = React.useState<any[]>([]);
  const [filteredAbsenceData, setFilteredAbsenceData] = React.useState<any[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [showSuggestions, setShowSuggestions] = React.useState<boolean>(false);
  const today = new Date().toISOString().substring(0, 10);
  const [selectedDate, setSelectedDate] = React.useState<string>(today);
  const dateInputRef = React.useRef<HTMLInputElement | null>(null);
  const [viewMode, setViewMode] = React.useState<'daily' | 'absence'>('daily');

  React.useEffect(() => {
    const fetchInitialData = async () => {
        const [attendance, absence] = await Promise.all([
            getDailyAttendanceData(selectedDate),
            getEmployeeAbsenceSummary()
        ]);
    setAttendanceData(attendance as AttendanceRow[]);
    setFilteredAttendanceData(attendance as AttendanceRow[]);
    setAbsenceData(absence);
    setFilteredAbsenceData(absence);
     };
    fetchInitialData();
  }, [selectedDate]);
  

  const handleSearch = () => {
    let filteredAttendance = attendanceData;
    let filteredAbsence = absenceData;

    // Filter by search query (name or employee number)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filteredAttendance = filteredAttendance.filter(emp =>
        emp.name?.toLowerCase().includes(query) ||
        emp.employeeNumber?.toLowerCase().includes(query)
      );
      filteredAbsence = filteredAbsence.filter(emp =>
        emp.name?.toLowerCase().includes(query) ||
        emp.employeeNumber?.toLowerCase().includes(query)
      );
    }

    // Sort by employee number
    const sortByEmployeeNumber = (a: any, b: any) => {
      const aNum = parseInt(a.employeeNumber || '0');
      const bNum = parseInt(b.employeeNumber || '0');

      // If both are valid numbers, sort numerically
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }

      // Otherwise sort lexicographically
      return (a.employeeNumber || '').localeCompare(b.employeeNumber || '');
    };

    filteredAttendance.sort(sortByEmployeeNumber);
    filteredAbsence.sort(sortByEmployeeNumber);

    setFilteredAttendanceData(filteredAttendance);
    setFilteredAbsenceData(filteredAbsence);
  };

  // Auto-filter when filters change
  React.useEffect(() => {
    handleSearch();
  }, [searchQuery, attendanceData, absenceData]);

  // Also sort initial data by employee number
  React.useEffect(() => {
    if (attendanceData.length > 0) {
      const sortedAttendance = [...attendanceData].sort((a, b) => {
        const aNum = parseInt(a.employeeNumber || '0');
        const bNum = parseInt(b.employeeNumber || '0');

        // If both are valid numbers, sort numerically
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return aNum - bNum;
        }

        // Otherwise sort lexicographically
        return (a.employeeNumber || '').localeCompare(b.employeeNumber || '');
      });
      setAttendanceData(sortedAttendance);
      setFilteredAttendanceData(sortedAttendance);
    }
  }, [attendanceData.length > 0]); // Only run when attendance data is first loaded

  React.useEffect(() => {
    if (absenceData.length > 0) {
      const sortedAbsence = [...absenceData].sort((a, b) => {
        const aNum = parseInt(a.employeeNumber || '0');
        const bNum = parseInt(b.employeeNumber || '0');

        // If both are valid numbers, sort numerically
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return aNum - bNum;
        }

        // Otherwise sort lexicographically
        return (a.employeeNumber || '').localeCompare(b.employeeNumber || '');
      });
      setAbsenceData(sortedAbsence);
      setFilteredAbsenceData(sortedAbsence);
    }
  }, [absenceData.length > 0]); // Only run when absence data is first loaded
  
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
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            {/* Search input */}
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
              {showSuggestions && searchQuery && (viewMode === 'daily' ? filteredAttendanceData : filteredAbsenceData).length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                  {(viewMode === 'daily' ? filteredAttendanceData : filteredAbsenceData).slice(0, 5).map((emp) => (
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
          {filteredAttendanceData.length > 0 ? (
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
                {filteredAttendanceData.map((emp) => (
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
            <p className="text-muted-foreground text-center">
              {attendanceData.length === 0 ? "No attendance data for the selected date." : "No attendance data matches your filter criteria."}
            </p>
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
            {filteredAbsenceData.length > 0 ? (
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
                  {filteredAbsenceData.map((emp: any) => (
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
              <p className="text-muted-foreground text-center">
                {absenceData.length === 0 ? "No absence data available." : "No absence data matches your filter criteria."}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
