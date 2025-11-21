/**
 * @fileoverview This file defines the client-side component for the Attendance page.
 * It handles the user interaction for downloading the attendance records as a PDF.
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
import { FileDown, CheckCircle, AlertTriangle, XCircle, Clock, CalendarOff } from "lucide-react";
import { Loader2 } from 'lucide-react';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useToast } from "@/hooks/use-toast";

/**
 * Renders the interactive part of the employee's attendance page.
 * @param {{ attendanceSummary: object, attendanceRecords: object[], employeeName: string }} props - The props for the component.
 * @returns {JSX.Element} The attendance page client component.
 */
type AttendanceRecord = { date: string; timeIn?: string | null; timeOut?: string | null; status?: string; lateMinutes?: number };
type AttendanceSummary = { daysAttended: number; totalDaysAttended: number; lates: number; absences: number; availableLeaves: number; totalHours: number; totalWorkingDays: number };

type ScheduleItem = { day: string; date: string; timeIn: string; timeOut: string; break: string; hours: number };

export default function AttendanceClientPage({ attendanceSummary, attendanceRecords, employeeName, scheduleData }: { attendanceSummary: AttendanceSummary; attendanceRecords: AttendanceRecord[]; employeeName: string; scheduleData?: ScheduleItem[] }) {
  const { toast } = useToast();
  React.useEffect(() => {
          document.title = "Employee Attendance";
          }, []);
  const handleDownloadPdf = () => {
    const doc = new jsPDF();

    // Add a title to the PDF
    doc.setFontSize(20);
    doc.text("Attendance Report", 14, 22);
    doc.setFontSize(12);
    doc.text(`Employee: ${employeeName}`, 14, 30);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 36);


    // Use autoTable to generate the table from the attendance records
    autoTable(doc, {
      startY: 45,
      head: [['Date', 'Time In', 'Time Out', 'Late (min)', 'Status']],
      body: attendanceRecords.map(record => [
        formatDate(record.date || ''),
        String(record.timeIn || ''),
        String(record.timeOut || ''),
        String(record.lateMinutes || 0),
        String(record.status || ''),
      ]),
      theme: 'striped',
      headStyles: { fillColor: [41, 128, 185] }, // Dark blue for header
    });

    // Save the PDF
    doc.save(`Attendance-Report-${employeeName.replace(' ', '-')}.pdf`);
  };

  const [isClocking, setIsClocking] = React.useState(false);
  const [records, setRecords] = React.useState<AttendanceRecord[]>(attendanceRecords || []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // listen for quick-clock completion events and update the table in-place
  React.useEffect(() => {
    const handler = (e: Event) => {
      const d = (e as CustomEvent).detail;
      const today = new Date().toISOString().slice(0, 10);
      const timeStr = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      setRecords(prev => {
        const idx = prev.findIndex(r => r.date === today);
        if (idx !== -1) {
          const updated = [...prev];
          if (d?.action === 'in') {
            updated[idx] = { ...updated[idx], timeIn: timeStr, status: d?.status || 'Present' };
            toast({ title: "Clocked In", description: "Successfully clocked in" });
          } else if (d?.action === 'out') {
            updated[idx] = { ...updated[idx], timeOut: timeStr };
            toast({ title: "Clocked Out", description: `Hours worked: ${d?.hoursWorked ?? ''}` });
          }
          return updated;
        }
        const newRecord: AttendanceRecord = {
          date: today,
          timeIn: d?.action === 'in' ? timeStr : null,
          timeOut: d?.action === 'out' ? timeStr : null,
          status: d?.action === 'in' ? (d?.status || 'Present') : 'Present',
        };
        return [newRecord, ...prev];
      });
      setIsClocking(false);
    };
    window.addEventListener('quick-clock-done', handler);
    return () => window.removeEventListener('quick-clock-done', handler);
  }, []);

  const handleClockIn = async () => {
    setIsClocking(true);
    window.dispatchEvent(new CustomEvent('quick-clock', { detail: { action: 'in' } }));
  };

  const handleClockOut = async () => {
    setIsClocking(true);
    window.dispatchEvent(new CustomEvent('quick-clock', { detail: { action: 'out' } }));
  };

  const getCurrentStatus = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayRecord = records.find(r => r.date === today);

    // Check if currently on break
    if (scheduleData && todayRecord?.timeIn && !todayRecord?.timeOut) {
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes(); // minutes since midnight

      // Find today's schedule
      const todaySchedule = scheduleData.find(s => s.date === today);
      if (todaySchedule && todaySchedule.break && todaySchedule.break !== '-') {
        // Parse break time (format: "12:00 - 13:00")
        const breakMatch = todaySchedule.break.match(/(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/);
        if (breakMatch) {
          const [_, breakStartStr, breakEndStr] = breakMatch;
          const [startHour, startMin] = breakStartStr.split(':').map(Number);
          const [endHour, endMin] = breakEndStr.split(':').map(Number);

          const breakStartMinutes = startHour * 60 + startMin;
          const breakEndMinutes = endHour * 60 + endMin;

          // Check if current time is within break period (±5 minutes tolerance)
          if (currentTime >= breakStartMinutes - 5 && currentTime <= breakEndMinutes + 5) {
            return 'break';
          }
        }
      }
    }

    // Default status logic
    if (todayRecord?.timeOut) {
      return 'default'; // Completed
    } else if (todayRecord?.timeIn) {
      return 'secondary'; // Working
    } else {
      return 'outline'; // Not Started
    }
  };

  const getCurrentStatusText = () => {
    const status = getCurrentStatus();
    switch (status) {
      case 'break':
        return 'On Break';
      case 'default':
        return 'Completed';
      case 'secondary':
        return 'Working';
      case 'outline':
      default:
        return 'Not Started';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-start">
         <div>
              <h1 className="text-3xl font-bold font-headline">Attendance Record</h1>
              <p className="text-muted-foreground">Your attendance summary for the current half-month period.</p>

          </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button onClick={getCurrentStatus() === 'outline' ? handleClockIn : handleClockOut} disabled={isClocking} variant={getCurrentStatus() === 'outline' ? 'secondary' : 'outline'}>
              {isClocking ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Clock className="mr-2"/>}
              Clock In/Out
            </Button>
            <Button onClick={handleDownloadPdf}>
            <FileDown />
            Download PDF
            </Button>
          </div>

          {/* Current Status Display */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Today's Status:</span>
              </div>
              <Badge variant={getCurrentStatus()} className={getCurrentStatus() === 'break' ? 'bg-yellow-500' : ''}>
                {getCurrentStatusText()}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <Card>
           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
             <CardTitle className="text-sm font-medium">Days Attended</CardTitle>
             <CheckCircle />
           </CardHeader>
           <CardContent>
             <div className="text-2xl font-bold">{attendanceSummary.daysAttended}</div>
             <p className="text-xs text-muted-foreground">out of {attendanceSummary.totalWorkingDays} working days</p>
           </CardContent>
         </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Days Attended</CardTitle>
            <CheckCircle />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceSummary.totalDaysAttended}</div>
            <p className="text-xs text-muted-foreground">Career total</p>
          </CardContent>
        </Card>
        <Card>
           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
             <CardTitle className="text-sm font-medium">Lates</CardTitle>
             <AlertTriangle />
           </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{attendanceSummary.lates}</div>
              <p className="text-xs text-muted-foreground">minute/s this cut-off period</p>
            </CardContent>
         </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absences</CardTitle>
            <XCircle />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceSummary.absences}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Leaves</CardTitle>
            <CalendarOff />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceSummary.availableLeaves}</div>
            <p className="text-xs text-muted-foreground">Year to date</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Work Hours</CardTitle>
            <Clock />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceSummary.totalHours} hrs</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Attendance Log Table */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Log</CardTitle>
          <CardDescription>Detailed daily attendance records.</CardDescription>
        </CardHeader>
        <CardContent>
          {records.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time In</TableHead>
                  <TableHead>Time Out</TableHead>
                  <TableHead>Late (min)</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {records.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{formatDate(record.date)}</TableCell>
                    <TableCell>{record.timeIn}</TableCell>
                    <TableCell>{record.timeOut}</TableCell>
                    <TableCell>{record.lateMinutes || 0}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={
                        record.status?.includes('Absent') ? 'destructive' :
                        record.status?.includes('Undertime') || record.status?.includes('Late') ? 'secondary' :
                        'default'
                      } className={
                        record.status?.includes('Present') || record.status?.includes('Overtime') ? 'bg-green-500' :
                        record.status?.includes('Overtime') ? 'bg-blue-500' : ''
                      }>
                        {record.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground text-center">No attendance records found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
