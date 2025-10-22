/**
 * @fileoverview This file defines the Employee Scheduling page for the HR portal.
 * It provides a user interface for HR personnel to create and manage weekly
 * work schedules for employees, either manually or by uploading a file.
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadCloud, PlusCircle } from "lucide-react";
import { getEmployeesForScheduling, getBranches, getDepartmentsForBranch, getPositionsForDepartment } from "@/lib/data";
import { publishScheduleAction } from './actions';
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
import { ScrollArea } from '@/components/ui/scroll-area';


/**
 * Renders the HR employee scheduling page.
 * Allows for manual creation of schedules or uploading from an Excel file.
 * @returns {JSX.Element} The scheduling page component.
 */
export default function SchedulingPage() {
  type EmpRow = { id: string; name: string; shift: string };
  const [scheduleData, setScheduleData] = React.useState<EmpRow[]>([]);
  // internal map of employeeId -> shifts array (Mon-Fri)
  const [shiftsMap, setShiftsMap] = React.useState<Record<string, string[]>>({});
  const [breaksMap, setBreaksMap] = React.useState<Record<string, string[]>>({});
  const [weekStart, setWeekStart] = React.useState<string>('');
  const [allEmployees, setAllEmployees] = React.useState<EmpRow[]>([]);
  const [branches, setBranches] = React.useState<{ id: number; name: string; coordinates: string | null }[]>([]);
  const [departments, setDepartments] = React.useState<string[]>([]);
  const [positions, setPositions] = React.useState<string[]>([]);
  const [selectedBranch, setSelectedBranch] = React.useState('');
  const [selectedDepartment, setSelectedDepartment] = React.useState('');

  React.useEffect(() => {
    document.title = "HR Employee Scheduling";
  }, []);

  // Auto-fill weekStart to the Monday of current week if empty
  React.useEffect(() => {
    if (!weekStart) {
      const today = new Date();
      const day = today.getDay(); // 0 (Sun) - 6 (Sat)
      const diffToMonday = (day + 6) % 7; // days since Monday
      const monday = new Date(today);
      monday.setDate(today.getDate() - diffToMonday);
      const yyyy = monday.getFullYear();
      const mm = String(monday.getMonth() + 1).padStart(2, '0');
      const dd = String(monday.getDate()).padStart(2, '0');
      setWeekStart(`${yyyy}-${mm}-${dd}`);
    }
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      const [initialSchedule, branchesData] = await Promise.all([
          getEmployeesForScheduling(),
          getBranches()
      ]);
      setScheduleData(initialSchedule);
      // In a real app, you might want a different function to get *all* employees for the modal
      setAllEmployees(initialSchedule); 
      setBranches(branchesData);
    }
    fetchData();
  }, []);

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

  const addEmployeeToSchedule = (employee: EmpRow) => {
    // Avoid adding duplicates
    if (!scheduleData.find(e => e.id === employee.id)) {
      setScheduleData(prevData => [...prevData, { ...employee, shift: '9:00 - 17:00' }]);
      setShiftsMap(prev => ({ ...prev, [employee.id]: ['9:00 - 17:00','9:00 - 17:00','9:00 - 17:00','9:00 - 17:00','9:00 - 17:00'] }));
      // default 1 hour break at 12:00 - 13:00
      setBreaksMap(prev => ({ ...prev, [employee.id]: ['12:00 - 13:00','12:00 - 13:00','12:00 - 13:00','12:00 - 13:00','12:00 - 13:00'] }));
    }
  };

  const updateShift = (employeeId: string, dayIndex: number, value: string) => {
    setShiftsMap(prev => {
      const copy = { ...(prev || {}) };
      copy[employeeId] = copy[employeeId] || ['','','','',''];
      copy[employeeId][dayIndex] = value;
      return copy;
    });
  };

  // updateBreak removed: not used currently

  // Client-side publish handler with validation
  const handlePublish = async () => {
    // basic weekStart validation (YYYY-MM-DD)
    if (!weekStart || !/^\d{4}-\d{2}-\d{2}$/.test(weekStart)) {
      alert('Please enter a valid Week Start date in YYYY-MM-DD format.');
      return;
    }

    const payload = scheduleData.map(emp => ({
      employeeId: emp.id,
      shifts: shiftsMap[emp.id] || [emp.shift, emp.shift, emp.shift, emp.shift, emp.shift],
      breaks: breaksMap[emp.id] || ['12:00 - 13:00','12:00 - 13:00','12:00 - 13:00','12:00 - 13:00','12:00 - 13:00']
    }));

    if (!payload || payload.length === 0) {
      alert('No employees in the schedule to publish.');
      return;
    }

    // call server action
    try {
      const res = await publishScheduleAction(payload, weekStart);
      if (res?.success) {
        alert('Schedule published successfully.');
        window.location.reload();
      } else {
        alert(res?.message || 'Failed to publish schedule.');
      }
    } catch (e) {
      console.error('Publish failed', e);
      alert('Publish failed. See console for details.');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Employee Scheduling</h1>
      <Tabs defaultValue="create-schedule">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="create-schedule">Create Schedule</TabsTrigger>
          <TabsTrigger value="upload-schedule">Upload Excel</TabsTrigger>
        </TabsList>
        {/* Manual Schedule Creation Tab */}
        <TabsContent value="create-schedule">
          <Card>
            <CardHeader>
              <CardTitle>Manual Schedule Creation</CardTitle>
              <CardDescription>
                Assign shifts to employees for the upcoming week.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Label htmlFor="week-select">Week of:</Label>
                    {/* Dropdown to select the week for scheduling */}
                    <Select defaultValue="aug-19">
                        <SelectTrigger id="week-select" className="w-[200px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="aug-19">Aug 19 - Aug 25</SelectItem>
                            <SelectItem value="aug-26">Aug 26 - Sep 1</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button><PlusCircle /> Schedule Employee</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="sm:max-w-[600px]">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Add Employee to Schedule</AlertDialogTitle>
                            <AlertDialogDescription>
                                Find and select an employee to add to the current week's schedule.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
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
                        </div>
                        <ScrollArea className="h-48 border rounded-md">
                           <Table>
                                {allEmployees.map(emp => (
                                    <TableRow key={emp.id} className="cursor-pointer hover:bg-muted" onClick={() => addEmployeeToSchedule(emp)}>
                                        <TableCell>{emp.name}</TableCell>
                                    </TableRow>
                                ))}
                           </Table>
                        </ScrollArea>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Close</AlertDialogCancel>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
              </div>
              {scheduleData.length > 0 ? (
                <>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Employee Name</TableHead>
                        <TableHead>Mon</TableHead>
                        <TableHead>Tue</TableHead>
                        <TableHead>Wed</TableHead>
                        <TableHead>Thu</TableHead>
                        <TableHead>Fri</TableHead>
                        <TableHead>Sat</TableHead>
                        <TableHead>Sun</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {scheduleData.map((emp) => (
                        <TableRow key={emp.id}>
                          <TableCell className="font-medium">{emp.name}</TableCell>
                          {/* Generates input fields for each day of the week */}
                          {[...Array(5)].map((_, i) => (
                            <TableCell key={i}>
                              <Input
                                className="h-8 text-xs"
                                value={(shiftsMap[emp.id] && shiftsMap[emp.id][i]) || emp.shift}
                                onChange={(e) => updateShift(emp.id, i, e.target.value)}
                              />
                            </TableCell>
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <TableCell key={i}>
                              <Input
                                className="h-8 text-xs bg-muted"
                                defaultValue="OFF"
                                readOnly
                              />
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
          <div className="flex justify-end gap-2 pt-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="week-start">Week Start (YYYY-MM-DD)</Label>
            <Input id="week-start" placeholder="2025-08-19" value={weekStart} onChange={(e) => setWeekStart(e.target.value)} />
          </div>
          <Button variant="outline">Save as Draft</Button>
           <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Publish Schedule</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will publish the schedule and make it visible to all scheduled employees.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handlePublish}>Publish</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          </div>
                </>
              ) : (
                <p className="text-muted-foreground text-center pt-4">No employees added to the schedule yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        {/* Upload Schedule Tab */}
        <TabsContent value="upload-schedule">
          <Card>
            <CardHeader>
              <CardTitle>Upload Schedule from Excel</CardTitle>
              <CardDescription>
                Use a template to upload the weekly schedule in bulk.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              {/* Dropzone for uploading an Excel file */}
              <div className="mx-auto flex justify-center items-center h-48 w-full border-2 border-dashed rounded-lg">
                <div className="text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drag and drop your file here, or click to select a file.
                  </p>
                  <p className="text-xs text-muted-foreground">XLS, XLSX up to 10MB</p>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="outline">Download Template</Button>
                <Button>Upload File</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
