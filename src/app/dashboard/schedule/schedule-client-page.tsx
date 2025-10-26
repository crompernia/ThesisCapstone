/**
 * @fileoverview This file defines the client-side component for the Schedule page.
 * It handles user interactions, such as downloading the schedule as a PDF.
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
  CardFooter,
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
import { Calendar, Clock, FileDown } from "lucide-react";

/**
 * Renders the interactive part of the employee's schedule page.
 * @param {{ schedule: object[], employeeName: string }} props - The props for the component.
 * @returns {JSX.Element} The schedule page client component.
 */


export default function ScheduleClientPage({ schedule, employeeName }) {
  React.useEffect(() => {
      document.title = "Employee Schedule";
      }, []);
  // Get today's day name to highlight in the schedule.
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todaysSchedule = schedule.find(s => s.day === today);
  const totalWeeklyHours = schedule.reduce((acc, s) => acc + (s.hours > 0 ? s.hours : 0), 0);
  const weekDescription = schedule.length > 0 ? `Week of ${schedule[0].date} to ${schedule[schedule.length - 1].date}` : 'Current Week';

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    
    // Add a title to the PDF
    doc.setFontSize(20);
    doc.text("Weekly Schedule", 14, 22);
    doc.setFontSize(12);
    doc.text(`Employee: ${employeeName}`, 14, 30);
    doc.text(weekDescription, 14, 36);

    // Use autoTable to generate the table from the schedule records
    autoTable(doc, {
      startY: 45,
      head: [['Day', 'Date', 'Time In', 'Time Out', 'Break', 'Hours']],
      body: schedule.map(item => [
        item.day,
        item.date,
        item.timeIn,
        item.timeOut,
        item.break,
        item.hours > 0 ? `${item.hours}` : "-"
      ]),
      theme: 'striped',
      headStyles: { fillColor: [41, 128, 185] },
    });

    doc.save(`Schedule-${employeeName.replace(' ', '-')}-${schedule[0]?.date}.pdf`);
  };

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-start">
            <div>
                <h1 className="text-3xl font-bold font-headline">My Schedule</h1>
                <p className="text-muted-foreground">Your work schedule for the current week.</p>
            </div>
            <Button onClick={handleDownloadPdf}>
                <FileDown />
                Download PDF
            </Button>
        </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar />
            This Week's Schedule
          </CardTitle>
          <CardDescription>
            {weekDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {schedule.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Day</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time In</TableHead>
                  <TableHead>Time Out</TableHead>
                  <TableHead>Break</TableHead>
                  <TableHead className="text-right">Hours</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedule.map((item) => (
                  <TableRow key={item.day} className={item.day === today ? 'bg-accent' : ''}>
                    <TableCell className="font-medium">
                      {item.day}
                      {/* Highlight the current day with a "Today" badge */}
                      {item.day === today && <Badge variant="default" className="ml-2">Today</Badge>}
                    </TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.timeIn}</TableCell>
                    <TableCell>{item.timeOut}</TableCell>
                    <TableCell>{item.break}</TableCell>
                    <TableCell className="text-right">{item.hours > 0 ? `${item.hours}` : "-"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground text-center">No schedule has been published for this week.</p>
          )}
        </CardContent>
        {schedule.length > 0 && (
            <CardFooter className="flex justify-between items-center">
                {/* Display total hours for the current day */}
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock />
                    <span>Today's Total Hours: <span className="font-bold text-foreground">{todaysSchedule?.hours ?? 0}</span></span>
                </div>
                {/* Display total hours for the entire week */}
                <div className="font-semibold">
                    Total Weekly Hours: {totalWeeklyHours}
                </div>
            </CardFooter>
        )}
      </Card>
    </div>
  );
}
