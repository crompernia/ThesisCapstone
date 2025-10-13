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
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/**
 * Renders the interactive part of the employee's attendance page.
 * @param {{ attendanceSummary: object, attendanceRecords: object[], employeeName: string }} props - The props for the component.
 * @returns {JSX.Element} The attendance page client component.
 */
export default function AttendanceClientPage({ attendanceSummary, attendanceRecords, employeeName }) {
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
        record.date,
        record.timeIn,
        record.timeOut,
        record.status,
      ]),
      theme: 'striped',
      headStyles: { fillColor: [41, 128, 185] }, // Dark blue for header
    });

    // Save the PDF
    doc.save(`Attendance-Report-${employeeName.replace(' ', '-')}.pdf`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
            <h1 className="text-3xl font-bold font-headline">Attendance Record</h1>
            <p className="text-muted-foreground">Your attendance summary for the current month.</p>
        </div>
        <Button onClick={handleDownloadPdf}>
          <FileDown />
          Download PDF
        </Button>
      </div>

      {/* Attendance Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
            <CardTitle className="text-sm font-medium">Lates</CardTitle>
            <AlertTriangle />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceSummary.lates}</div>
            <p className="text-xs text-muted-foreground">This month</p>
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
          {attendanceRecords.length > 0 ? (
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
                {attendanceRecords.map((record, index) => (
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
