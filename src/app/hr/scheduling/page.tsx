/**
 * @fileoverview This file defines the Employee Scheduling page for the HR portal.
 * It provides a user interface for HR personnel to create and manage weekly
 * work schedules for employees, either manually or by uploading a file.
 */
'use client';
import * as React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

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
import { Checkbox } from "@/components/ui/checkbox";
import { UploadCloud, PlusCircle, Copy } from "lucide-react";
import { getEmployeesForScheduling, getBranches, getDepartmentsForBranch, getPositionsForDepartment, getSchedulesForWeek } from "@/lib/data";
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

const SHIFT_OPTIONS = [
  '8:00 - 17:00',
  '9:00 - 18:00',
  '10:00 - 19:00',
  '14:00 - 23:00',
  '16:00 - 1:00',
  '18:00 - 3:00',
  '6:00 - 15:00',
  '12:00 - 21:00',
];

const SHIFT_TEMPLATES = {
  'Standard Week': ['9:00 - 18:00', '9:00 - 18:00', '9:00 - 18:00', '9:00 - 18:00', '9:00 - 18:00'],
  'Early Week': ['6:00 - 15:00', '6:00 - 15:00', '6:00 - 15:00', '6:00 - 15:00', '6:00 - 15:00'],
  'Late Week': ['14:00 - 23:00', '14:00 - 23:00', '14:00 - 23:00', '14:00 - 23:00', '14:00 - 23:00'],
  'Mixed Shifts': ['8:00 - 17:00', '9:00 - 18:00', '10:00 - 19:00', '14:00 - 23:00', '16:00 - 1:00'],
};


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
  const [overtimeAllowedMap, setOvertimeAllowedMap] = React.useState<Record<string, boolean[]>>({});
  const [weekStart, setWeekStart] = React.useState<string>('');
  const [allEmployees, setAllEmployees] = React.useState<EmpRow[]>([]);
  const [branches, setBranches] = React.useState<{ id: number; name: string; coordinates: string | null }[]>([]);
  const [departments, setDepartments] = React.useState<string[]>([]);
  const [positions, setPositions] = React.useState<string[]>([]);
  const [selectedBranch, setSelectedBranch] = React.useState('');
  const [selectedDepartment, setSelectedDepartment] = React.useState('');
  const [selectedEmployee, setSelectedEmployee] = React.useState('');
  const [individualShifts, setIndividualShifts] = React.useState<string[]>(['', '', '', '', '']);
  const [individualBreaks, setIndividualBreaks] = React.useState<string[]>(['', '', '', '', '']);
  const [individualOvertimeAllowed, setIndividualOvertimeAllowed] = React.useState<boolean[]>([false, false, false, false, false]);
  const [selectedCells, setSelectedCells] = React.useState<Set<string>>(new Set());
  const [selectedEmployeesForModal, setSelectedEmployeesForModal] = React.useState<Set<string>>(new Set());

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

      // Load existing schedules for the current week
      if (weekStart) {
        const existingSchedules = await getSchedulesForWeek(weekStart);
        const shiftsMap: Record<string, string[]> = {};
        const breaksMap: Record<string, string[]> = {};
        const overtimeMap: Record<string, boolean[]> = {};
        for (const [empId, data] of Object.entries(existingSchedules)) {
          shiftsMap[empId] = data.shifts;
          breaksMap[empId] = data.breaks;
          overtimeMap[empId] = data.overtimeAllowed;
        }
        setShiftsMap(shiftsMap);
        setBreaksMap(breaksMap);
        setOvertimeAllowedMap(overtimeMap);
      }
    }
    fetchData();
  }, [weekStart]);

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
      console.log('Adding employee to schedule:', employee.id);
      setScheduleData(prevData => [...prevData, { ...employee, shift: '' }]);
      setShiftsMap(prev => {
        const newMap = { ...prev, [employee.id]: ['','','','',''] };
        console.log('New shiftsMap after adding employee:', newMap);
        return newMap;
      });
      // default 1 hour break at 12:00 - 13:00
      setBreaksMap(prev => ({ ...prev, [employee.id]: ['12:00 - 13:00','12:00 - 13:00','12:00 - 13:00','12:00 - 13:00','12:00 - 13:00'] }));
      // default overtime not allowed
      setOvertimeAllowedMap(prev => ({ ...prev, [employee.id]: [false, false, false, false, false] }));
    }
  };

  const addSelectedEmployeesToSchedule = () => {
    selectedEmployeesForModal.forEach(empId => {
      const employee = allEmployees.find(e => e.id === empId);
      if (employee) {
        addEmployeeToSchedule(employee);
      }
    });
    setSelectedEmployeesForModal(new Set());
  };

  const toggleEmployeeSelectionForModal = (empId: string) => {
    const newSelected = new Set(selectedEmployeesForModal);
    if (newSelected.has(empId)) {
      newSelected.delete(empId);
    } else {
      newSelected.add(empId);
    }
    setSelectedEmployeesForModal(newSelected);
  };

  const updateShift = (employeeId: string, dayIndex: number, value: string) => {
    console.log('Updating shift:', { employeeId, dayIndex, value });
    setShiftsMap(prev => {
      const copy = { ...(prev || {}) };
      copy[employeeId] = copy[employeeId] || ['','','','',''];
      copy[employeeId][dayIndex] = value;
      console.log('New shiftsMap:', copy);
      return copy;
    });
  };

  const updateOvertimeAllowed = (employeeId: string, dayIndex: number, value: boolean) => {
    setOvertimeAllowedMap(prev => {
      const copy = { ...(prev || {}) };
      copy[employeeId] = copy[employeeId] || [false, false, false, false, false];
      copy[employeeId][dayIndex] = value;
      return copy;
    });
  };

  // updateBreak removed: not used currently

  const toggleCellSelection = (employeeId: string, dayIndex: number) => {
    const cellKey = `${employeeId}-${dayIndex}`;
    const newSelected = new Set(selectedCells);
    if (newSelected.has(cellKey)) {
      newSelected.delete(cellKey);
    } else {
      newSelected.add(cellKey);
    }
    setSelectedCells(newSelected);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    // Same position
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // Parse source and destination
    const sourceParts = source.droppableId.split('-');
    const destParts = destination.droppableId.split('-');

    if (sourceParts.length !== 2 || destParts.length !== 2) return;

    const sourceEmployeeId = sourceParts[0];
    const sourceDayIndex = parseInt(sourceParts[1]);
    const destEmployeeId = destParts[0];
    const destDayIndex = parseInt(destParts[1]);

    // Get the shift from source
    const shiftToCopy = shiftsMap[sourceEmployeeId]?.[sourceDayIndex];

    if (shiftToCopy && shiftToCopy.trim() !== '') {
      // Copy to destination
      updateShift(destEmployeeId, destDayIndex, shiftToCopy);
    }
  };

  const copyShiftToAllDays = (employeeId: string) => {
    if (selectedCells.size === 1) {
      const [cellKey] = selectedCells;
      const [selectedEmpId, dayIndexStr] = cellKey.split('-');
      if (selectedEmpId === employeeId) {
        const dayIndex = parseInt(dayIndexStr);
        const shift = shiftsMap[employeeId]?.[dayIndex] || '';
        for (let i = 0; i < 5; i++) {
          updateShift(employeeId, i, shift);
        }
      }
    }
  };

  const copyShiftToAllEmployees = (dayIndex: number) => {
    if (selectedCells.size === 1) {
      const [cellKey] = selectedCells;
      const [employeeId, selectedDayIndexStr] = cellKey.split('-');
      if (parseInt(selectedDayIndexStr) === dayIndex) {
        const shift = shiftsMap[employeeId]?.[dayIndex] || '';
        scheduleData.forEach(emp => {
          updateShift(emp.id, dayIndex, shift);
        });
      }
    }
  };

  const bulkAssignShift = (shift: string, dayIndex: number) => {
    scheduleData.forEach(emp => {
      updateShift(emp.id, dayIndex, shift);
    });
  };

  const bulkAssignShiftToAllDays = (shift: string) => {
    scheduleData.forEach(emp => {
      for (let i = 0; i < 5; i++) {
        updateShift(emp.id, i, shift);
      }
    });
  };

  const applyShiftTemplate = (templateName: string) => {
    const template = SHIFT_TEMPLATES[templateName as keyof typeof SHIFT_TEMPLATES];
    if (template) {
      scheduleData.forEach(emp => {
        template.forEach((shift, dayIndex) => {
          updateShift(emp.id, dayIndex, shift);
        });
      });
    }
  };

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
      breaks: breaksMap[emp.id] || ['12:00 - 13:00','12:00 - 13:00','12:00 - 13:00','12:00 - 13:00','12:00 - 13:00'],
      overtimeAllowed: overtimeAllowedMap[emp.id] || [false, false, false, false, false]
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
        // Reload existing schedules to reflect changes in the HR interface
        const existingSchedules = await getSchedulesForWeek(weekStart);
        const shiftsMap: Record<string, string[]> = {};
        const breaksMap: Record<string, string[]> = {};
        const overtimeMap: Record<string, boolean[]> = {};
        for (const [empId, data] of Object.entries(existingSchedules)) {
          shiftsMap[empId] = data.shifts;
          breaksMap[empId] = data.breaks;
          overtimeMap[empId] = data.overtimeAllowed;
        }
        setShiftsMap(shiftsMap);
        setBreaksMap(breaksMap);
        setOvertimeAllowedMap(overtimeMap);
      } else {
        alert(res?.message || 'Failed to publish schedule.');
      }
    } catch (e) {
      console.error('Publish failed', e);
      alert('Publish failed. See console for details.');
    }
  };

  // Client-side publish handler for individual schedule
  const handlePublishIndividual = async () => {
    // basic weekStart validation (YYYY-MM-DD)
    if (!weekStart || !/^\d{4}-\d{2}-\d{2}$/.test(weekStart)) {
      alert('Please enter a valid Week Start date in YYYY-MM-DD format.');
      return;
    }

    if (!selectedEmployee) {
      alert('Please select an employee.');
      return;
    }

    const payload = [{
      employeeId: selectedEmployee,
      shifts: individualShifts,
      breaks: individualBreaks,
      overtimeAllowed: individualOvertimeAllowed
    }];

    // call server action
    try {
      const res = await publishScheduleAction(payload, weekStart);
      if (res?.success) {
        alert('Individual schedule published successfully.');
        // Reset form
        setSelectedEmployee('');
        setIndividualShifts(['', '', '', '', '']);
        setIndividualBreaks(['', '', '', '', '']);
        setIndividualOvertimeAllowed([false, false, false, false, false]);
      } else {
        alert(res?.message || 'Failed to publish individual schedule.');
      }
    } catch (e) {
      console.error('Publish individual failed', e);
      alert('Publish failed. See console for details.');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Employee Scheduling</h1>
      <Tabs defaultValue="create-schedule">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create-schedule">Create Schedule</TabsTrigger>
          <TabsTrigger value="individual-schedule">Individual Schedule</TabsTrigger>
          <TabsTrigger value="upload-schedule">Upload Excel</TabsTrigger>
        </TabsList>
        {/* Manual Schedule Creation Tab */}
        <TabsContent value="create-schedule">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Manual Schedule Creation</CardTitle>
                  <CardDescription>
                    Assign shifts to employees for the upcoming week.
                  </CardDescription>
                </div>
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
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                  <Label htmlFor="week-select">Week of:</Label>
                  {/* Dynamic week selection */}
                  <Select value={weekStart} onValueChange={setWeekStart}>
                      <SelectTrigger id="week-select" className="w-[200px]">
                          <SelectValue placeholder="Select week" />
                      </SelectTrigger>
                      <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => {
                            const monday = new Date();
                            monday.setDate(monday.getDate() - monday.getDay() + 1 + (i * 7));
                            const friday = new Date(monday);
                            friday.setDate(monday.getDate() + 4);
                            const mondayStr = monday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                            const fridayStr = friday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                            const value = monday.toISOString().split('T')[0];
                            return (
                              <SelectItem key={value} value={value}>
                                {mondayStr} - {fridayStr}
                              </SelectItem>
                            );
                          })}
                      </SelectContent>
                  </Select>
              </div>
              <div className="space-y-4">
                <div className="flex gap-2 flex-wrap items-center">
                  <Label className="text-sm font-medium">Quick Templates:</Label>
                  {Object.keys(SHIFT_TEMPLATES).map(templateName => (
                    <Button
                      key={templateName}
                      size="sm"
                      variant="outline"
                      onClick={() => applyShiftTemplate(templateName)}
                    >
                      {templateName}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap items-center">
                  <Label className="text-sm font-medium">Bulk Assign:</Label>
                  <Select onValueChange={(shift) => bulkAssignShiftToAllDays(shift)}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="All days" />
                    </SelectTrigger>
                    <SelectContent>
                      {SHIFT_OPTIONS.map(option => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                    <Select key={day} onValueChange={(shift) => bulkAssignShift(shift, i)}>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder={day} />
                      </SelectTrigger>
                      <SelectContent>
                        {SHIFT_OPTIONS.map(option => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ))}
                </div>
              </div>
              {scheduleData.length > 0 ? (
                <>
                  <DragDropContext onDragEnd={onDragEnd}>
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
                            <TableCell className="font-medium">
                              {emp.name}
                            </TableCell>
                            {/* Generates input fields for each day of the week */}
                            {[...Array(5)].map((_, i) => (
                              <Droppable key={i} droppableId={`${emp.id}-${i}`}>
                                {(provided, snapshot) => (
                                  <TableCell
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`space-y-1 ${snapshot.isDraggingOver ? 'bg-green-100' : ''}`}
                                  >
                                    <Draggable draggableId={`shift-${emp.id}-${i}`} index={0}>
                                      {(provided, snapshot) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          className={`p-1 ${snapshot.isDragging ? 'opacity-50' : ''}`}
                                        >
                                          <Select
                                            value={(shiftsMap[emp.id] && shiftsMap[emp.id][i]) || ''}
                                            onValueChange={(value) => updateShift(emp.id, i, value)}
                                          >
                                            <SelectTrigger className="h-8 text-xs w-32">
                                              <SelectValue placeholder="Select shift" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              {SHIFT_OPTIONS.map(option => (
                                                <SelectItem key={option} value={option}>
                                                  {option}
                                                </SelectItem>
                                              ))}
                                            </SelectContent>
                                          </Select>
                                          <div className="flex items-center space-x-1">
                                            <Checkbox
                                              checked={(overtimeAllowedMap[emp.id] && overtimeAllowedMap[emp.id][i]) || false}
                                              onCheckedChange={(checked: boolean) => updateOvertimeAllowed(emp.id, i, checked)}
                                              {...({} as any)}
                                            />
                                            <Label className="text-xs">OT</Label>
                                          </div>
                                        </div>
                                      )}
                                    </Draggable>
                                    {provided.placeholder}
                                  </TableCell>
                                )}
                              </Droppable>
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
                  </DragDropContext>
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
        {/* Individual Employee Schedule Tab */}
        <TabsContent value="individual-schedule">
          <Card>
            <CardHeader>
              <CardTitle>Individual Employee Schedule</CardTitle>
              <CardDescription>
                Create a schedule for a single employee.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Label htmlFor="employee-select">Select Employee:</Label>
                  <Select value={selectedEmployee} onValueChange={setSelectedEmployee}>
                    <SelectTrigger id="employee-select" className="w-[300px]">
                      <SelectValue placeholder="Choose an employee" />
                    </SelectTrigger>
                    <SelectContent>
                      {allEmployees.map(emp => (
                        <SelectItem key={emp.id} value={emp.id}>{emp.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                  <Label htmlFor="individual-week-select">Week of:</Label>
                  {/* Dynamic week selection */}
                  <Select value={weekStart} onValueChange={setWeekStart}>
                      <SelectTrigger id="individual-week-select" className="w-[200px]">
                          <SelectValue placeholder="Select week" />
                      </SelectTrigger>
                      <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => {
                            const monday = new Date();
                            monday.setDate(monday.getDate() - monday.getDay() + 1 + (i * 7));
                            const friday = new Date(monday);
                            friday.setDate(monday.getDate() + 4);
                            const mondayStr = monday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                            const fridayStr = friday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                            const value = monday.toISOString().split('T')[0];
                            return (
                              <SelectItem key={value} value={value}>
                                {mondayStr} - {fridayStr}
                              </SelectItem>
                            );
                          })}
                      </SelectContent>
                  </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Day</TableHead>
                    <TableHead>Shift Time</TableHead>
                    <TableHead>Break Time</TableHead>
                    <TableHead>Allow Overtime</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
                    <TableRow key={day}>
                      <TableCell className="font-medium">{day}</TableCell>
                      <TableCell>
                        <Select
                          value={individualShifts[index]}
                          onValueChange={(value) => {
                            const newShifts = [...individualShifts];
                            newShifts[index] = value;
                            setIndividualShifts(newShifts);
                          }}
                        >
                          <SelectTrigger className="h-8 text-xs w-32">
                            <SelectValue placeholder="Select shift" />
                          </SelectTrigger>
                          <SelectContent>
                            {SHIFT_OPTIONS.map(option => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Input
                          className="h-8 text-xs"
                          placeholder="12:00 - 13:00"
                          value={individualBreaks[index]}
                          onChange={(e) => {
                            const newBreaks = [...individualBreaks];
                            newBreaks[index] = e.target.value;
                            setIndividualBreaks(newBreaks);
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Checkbox
                          checked={individualOvertimeAllowed[index]}
                          onCheckedChange={(checked: boolean) => {
                            const newOvertimeAllowed = [...individualOvertimeAllowed];
                            newOvertimeAllowed[index] = checked;
                            setIndividualOvertimeAllowed(newOvertimeAllowed);
                          }}
                          {...({} as any)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline">Save as Draft</Button>
                <Button onClick={handlePublishIndividual}>Publish Individual Schedule</Button>
              </div>
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
