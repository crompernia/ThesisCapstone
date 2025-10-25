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

/**
 * Renders the interactive part of the employee's attendance page.
 * @param {{ attendanceSummary: object, attendanceRecords: object[], employeeName: string }} props - The props for the component.
 * @returns {JSX.Element} The attendance page client component.
 */
type AttendanceRecord = { date: string; timeIn?: string | null; timeOut?: string | null; status?: string };
type AttendanceSummary = { daysAttended: number; totalDaysAttended: number; lates: number; absences: number; availableLeaves: number; totalHours: number };

export default function AttendanceClientPage({ attendanceSummary, attendanceRecords, employeeName }: { attendanceSummary: AttendanceSummary; attendanceRecords: AttendanceRecord[]; employeeName: string }) {
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
      head: [['Date', 'Time In', 'Time Out', 'Status']],
      body: attendanceRecords.map(record => [
        String(record.date || ''),
        String(record.timeIn || ''),
        String(record.timeOut || ''),
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
            updated[idx] = { ...updated[idx], timeIn: timeStr, status: 'Present' };
            alert('Clocked in successfully');
          } else if (d?.action === 'out') {
            updated[idx] = { ...updated[idx], timeOut: timeStr };
            alert(`Clocked out. Hours worked: ${d?.hoursWorked ?? ''}`);
          }
          return updated;
        }
        const newRecord: AttendanceRecord = {
          date: today,
          timeIn: d?.action === 'in' ? timeStr : null,
          timeOut: d?.action === 'out' ? timeStr : null,
          status: d?.action === 'in' ? 'Present' : 'Present',
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

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
            <h1 className="text-3xl font-bold font-headline">Attendance Record</h1>
            <p className="text-muted-foreground">Your attendance summary for the current month.</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleClockIn} disabled={isClocking} variant="secondary">
            {isClocking ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Clock className="mr-2"/>}
            Clock In
          </Button>
          <Button onClick={handleClockOut} disabled={isClocking} variant="outline">
            <Clock className="mr-2"/>
            Clock Out
          </Button>
          <Button onClick={handleDownloadPdf}>
          <FileDown />
          Download PDF
          </Button>
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
            <p className="text-xs text-muted-foreground">out of 22 working days</p>
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
            <p className="text-xs text-muted-foreground">minute/s this month</p>
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
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {records.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{record.date}</TableCell>
                    <TableCell>{record.timeIn}</TableCell>
                    <TableCell>{record.timeOut}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={
                        record.status === 'Present' ? 'default' : record.status === 'Late' ? 'secondary' : 'destructive'
                      } className={record.status === 'Present' ? 'bg-green-500' : ''}>
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
