/**
 * @fileoverview This file defines the client-side component for the Payslip page.
 * It handles the user interaction for selecting and displaying payslip details.
 */
'use client';

import * as React from 'react';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileDown, Building2 } from "lucide-react";


/**
 * Renders the interactive part of the employee's payslip page.
 * @param {{ payPeriods: object[], employeeName: string }} props - The props for the component.
 * @returns {JSX.Element} The payslip page client component.
 */
export default function PayslipClientPage({ payPeriods, employeeName, employeeNumber }: any) {
  React.useEffect(() => {
      document.title = "Employee Payslip";
      }, []);
  const [selectedPeriod, setSelectedPeriod] = React.useState('');

  React.useEffect(() => {
    if (payPeriods && payPeriods.length > 0) {
      setSelectedPeriod(String(payPeriods[0].id));
    }
  }, [payPeriods]);

  const payslipData = payPeriods?.find((p: any) => String(p.id) === selectedPeriod);

  // Calculate pay date based on period logic
  const calculatePayDate = (period: string) => {
    const match = period.match(/^(\w{3}) (\d{2}) - (\w{3}) (\d{2}), (\d{4})$/);
    if (!match) return payslipData?.payDate || '';

    const [, startMonth, startDay, , , year] = match;
    const monthNames = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    // If start day is 16 or later, it's second half - pay date is 5th of next month
    if (parseInt(startDay) >= 16) {
      const nextMonth = new Date(parseInt(year), monthNames[startMonth as keyof typeof monthNames] + 1, 5);
      return nextMonth.toISOString().split('T')[0];
    } else {
      // First half - pay date is 20th of same month
      const payDate = new Date(parseInt(year), monthNames[startMonth as keyof typeof monthNames], 20);
      return payDate.toISOString().split('T')[0];
    }
  };


  const displayPayDate = payslipData ? calculatePayDate(payslipData.period) : '';

  const excludedEarnings = ['Overtime', 'Night Differential', 'RH OT', 'Special Holiday', 'Salary Adjustment', 'Allowances', 'SP OT', 'BASIC PAY'];
  const totalEarnings = payslipData?.earnings.reduce((sum, item) => sum + item.amount, 0) ?? 0;
  const totalDeductions = payslipData?.deductions.reduce((sum, item) => sum + item.amount, 0) ?? 0;
  const netPay = payslipData?.net_pay ?? 0;
  const dailyRate = payslipData?.dailyRate ?? 0;
  const noOfDays = payslipData?.earnings.find(item => item.name === "No. of Days")?.amount || 0;
  const basicPay = payslipData?.earnings.find(item => item.name === "BASIC PAY")?.amount || 0;
  const overtime = payslipData?.earnings.find(item => item.name === "Overtime")?.amount || 0;
  const nightDifferential = payslipData?.earnings.find(item => item.name === "Night Differential")?.amount || 0;
  const regularHoliday = payslipData?.earnings.find(item => item.name === "RH OT")?.amount || 0;
  const specialHoliday = payslipData?.earnings.find(item => item.name === "Special Holiday")?.amount || 0;
  const spOt = payslipData?.earnings.find(item => item.name === "SP OT")?.amount || 0;
  const allowances = payslipData?.earnings.find(item => item.name === "Allowances")?.amount || 0;

  const formatCurrency = (value) => {
    // Use plain text to avoid jsPDF Unicode issues with ₱ symbol
    return `PHP ${value.toLocaleString('en-PH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const handleDownloadPdf = () => {
    if (!payslipData) return;

    // Create PDF in landscape orientation
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Set font to ensure proper encoding - use standard ASCII-compatible font
    doc.setFont("courier", "normal");

    // Company Header with border
    doc.setFillColor(240, 240, 240);
    doc.rect(0, 0, pageWidth, 30, 'F');

    doc.setFontSize(18);
    doc.setFont("courier", "bold");
    doc.text("CHUMTING TRADING CORPORATION", pageWidth / 2, 12, { align: 'center' });

    doc.setFontSize(10);
    doc.setFont("courier", "normal");
    doc.text("Payslip", pageWidth / 2, 20, { align: 'center' });

    // Company Details
    doc.setFontSize(7);
    doc.text("123 Business District, Makati City, Philippines 1200", pageWidth / 2, 26, { align: 'center' });
    doc.text("Tel: (02) 123-4567 | Email: hr@chumtingtrading.com", pageWidth / 2, 31, { align: 'center' });

    // Employee Information Box
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.rect(10, 38, pageWidth - 20, 20);

    doc.setFontSize(9);
    doc.setFont("courier", "bold");
    doc.text("EMPLOYEE INFORMATION", 12, 45);

    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text(`Employee Name: ${employeeName}`, 12, 52);
    doc.text(`Employee ID: ${employeeNumber}`, 12, 57);
    doc.text(`Pay Period: ${payslipData.period}`, pageWidth / 2 + 10, 52);
    doc.text(`Pay Date: ${displayPayDate}`, pageWidth / 2 + 10, 57);

    // Earnings Section (Left side)
    doc.setFontSize(11);
    doc.setFont("courier", "bold");
    doc.text("EARNINGS", 10, 68);

    // Earnings Table with all detailed items
    const earningsData = [
      ['Daily Rate', formatCurrency(dailyRate)],
      ['No. of Days', noOfDays.toString()],
      ['Basic Pay', formatCurrency(basicPay)],
      ['Overtime', formatCurrency(overtime)],
      ['Night Differential', formatCurrency(nightDifferential)],
      ['Regular Holiday', formatCurrency(regularHoliday)],
      ['RH OT', formatCurrency(regularHoliday)],
      ['Special Holiday', formatCurrency(specialHoliday)],
      ['SP OT', formatCurrency(spOt)],
      ['Allowance', formatCurrency(allowances)],
    ];

    autoTable(doc, {
      startY: 73,
      head: [['Description', 'Amount']],
      body: earningsData,
      foot: [['TOTAL EARNINGS', formatCurrency(totalEarnings)]],
      theme: 'grid',
      headStyles: {
        fillColor: [34, 197, 94],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      bodyStyles: {
        textColor: [0, 0, 0], // Black text for body
        fontStyle: 'normal'
      },
      footStyles: {
        fillColor: [34, 197, 94],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      columnStyles: {
        0: { cellWidth: 70 },
        1: { cellWidth: 40, halign: 'right' }
      },
      margin: { left: 10, right: 10 },
      styles: { fontSize: 6, font: "courier" },
      tableWidth: 110
    });

    // Deductions Section (Right side)
    doc.setFontSize(11);
    doc.setFont("courier", "bold");
    doc.text("DEDUCTIONS", pageWidth / 2 + 10, 68);

    // Deductions Table
    const deductionsData = payslipData.deductions.map(d => [d.name, formatCurrency(d.amount)]);

    autoTable(doc, {
      startY: 73,
      head: [['Description', 'Amount']],
      body: deductionsData,
      foot: [['TOTAL DEDUCTIONS', `(${formatCurrency(totalDeductions)})`]],
      theme: 'grid',
      headStyles: {
        fillColor: [239, 68, 68],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      bodyStyles: {
        textColor: [0, 0, 0], // Black text for body
        fontStyle: 'normal'
      },
      footStyles: {
        fillColor: [239, 68, 68],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      columnStyles: {
        0: { cellWidth: 70 },
        1: { cellWidth: 40, halign: 'right' }
      },
      margin: { left: pageWidth / 2 + 10, right: 10 },
      styles: { fontSize: 6, font: "courier" },
      tableWidth: 110
    });

    // Net Pay Section
    const netPayY = (doc as any).lastAutoTable.finalY + 10;

    // Net Pay Box
    doc.setFillColor(240, 240, 240);
    doc.rect(10, netPayY - 3, pageWidth - 20, 10, 'F');
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.rect(10, netPayY - 3, pageWidth - 20, 10);

    doc.setFontSize(11);
    doc.setFont("courier", "bold");
    doc.text("NET PAY:", 12, netPayY + 3);
    doc.text(formatCurrency(netPay), pageWidth - 12, netPayY + 3, { align: 'right' });

    // Signature Section
    const signatureY = netPayY + 15;
    doc.setFontSize(8);
    doc.setFont("courier", "bold");
    doc.text("EMPLOYEE SIGNATURE", 10, signatureY);
    doc.text("SUPERVISOR SIGNATURE", pageWidth - 60, signatureY);

    // Signature lines
    doc.setLineWidth(0.3);
    doc.line(10, signatureY + 10, 65, signatureY + 10);
    doc.line(pageWidth - 60, signatureY + 10, pageWidth - 10, signatureY + 10);

    doc.setFontSize(5);
    doc.setFont("courier", "normal");
    doc.text("Date: ________________", 10, signatureY + 13);
    doc.text("Date: ________________", pageWidth - 60, signatureY + 13);

    // Footer
    const footerY = pageHeight - 12;
    doc.setFontSize(5);
    doc.setFont("courier", "italic");
    doc.text("This is a system-generated payslip. Please keep this document for your records.", pageWidth / 2, footerY, { align: 'center' });
    doc.text("Generated on: " + new Date().toLocaleDateString(), pageWidth / 2, footerY + 3, { align: 'center' });

    doc.save(`Payslip-${employeeName.replace(/\s+/g, '-')}-${payslipData.period.replace(/\s+/g, '-')}.pdf`);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Page Header and Period Selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline">My Payslip</h1>
          <p className="text-muted-foreground">View and download your payslips.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          {/* A dropdown to select the pay period */}
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod} disabled={!payPeriods || payPeriods.length === 0}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Select Period" />
            </SelectTrigger>
            <SelectContent>
              {payPeriods && payPeriods.length > 0 ? (
                payPeriods.map(p => (
                  <SelectItem key={p.id} value={String(p.id)}>{p.period}</SelectItem>
                ))
              ) : (
                <SelectItem value="none" disabled>No periods available</SelectItem>
              )}
            </SelectContent>
          </Select>
          <Button onClick={handleDownloadPdf} disabled={!payslipData}>
            <FileDown />
            PDF
          </Button>
        </div>
      </div>

      {/* Payslip Details Card */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/30 p-6">
          <div className="flex justify-between items-center">
            <div>
                <h2 className="text-2xl font-bold font-headline">{payslipData ? `Employee Name: ${employeeName}` : 'Select a period to view payslip'}</h2>
                <p className="text-muted-foreground">Employee ID: {employeeNumber}</p>
                <div className="flex items-center gap-2">
                    <Building2 />
                    <p className="text-muted-foreground">CHUMTING TRADING CORPORATION</p>
                </div>
            </div>
            {payslipData && (
              <div className="text-right">
                  <p className="text-sm text-muted-foreground">Pay Date</p>
                  <p className="font-semibold">{displayPayDate}</p>
                  <p className="text-sm text-muted-foreground">Period</p>
                  <p className="font-semibold">{payslipData.period}</p>
              </div>
            )}
          </div>
        </CardHeader>
        {payslipData ? (
          <>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Earnings Section: Lists all income sources for the period. */}
                <div>
                <h3 className="font-semibold text-lg mb-4 text-green-600">Earnings</h3>

                <ul className="space-y-2">
                  {payslipData.earnings.filter(item => !excludedEarnings.includes(item.name) && item.name !== "No. of Days" && item.name !== "Basic Pay").map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <span className="font-mono">
                        {formatCurrency(item.amount)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Separator {...({ className: "my-4" } as any)} />
                <div className="flex justify-between items-center">
                  <span>Daily Rate</span>
                  <span className="font-mono">
                    {formatCurrency(dailyRate * 8)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>No. of Days</span>
                  <span className="font-mono">
                    {noOfDays}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Basic Pay</span>
                  <span className="font-mono">
                    {formatCurrency(basicPay)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Overtime</span>
                  <span className="font-mono">
                    {formatCurrency(overtime)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Night Differential</span>
                  <span className="font-mono">
                    {formatCurrency(nightDifferential)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Regular Holiday</span>
                  <span className="font-mono">
                    {formatCurrency(regularHoliday)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>RH OT</span>
                  <span className="font-mono">
                    {formatCurrency(regularHoliday)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Special Holiday</span>
                  <span className="font-mono">
                    {formatCurrency(specialHoliday)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>SP OT</span>
                  <span className="font-mono">
                    {formatCurrency(spOt)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Allowance</span>
                  <span className="font-mono">
                    {formatCurrency(allowances)}
                  </span>
                </div>
              </div>
              
                    {/* Deductions Section: Lists all deductions for the period. */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-red-600">Deductions</h3>
                        <ul className="space-y-2">
                        {payslipData.deductions.map((item, index) => (
                            <li key={index} className="flex justify-between items-center text-sm">
                                <span>{item.name}</span>
                                <span className="font-mono">{formatCurrency(item.amount)}</span>
                            </li>
                        ))}
                        </ul>
                        <Separator {...({ className: "my-4" } as any)} />
                        <div className="flex justify-between items-center font-semibold">
                            <span>Total Deductions</span>
                            <span className="font-mono">({formatCurrency(totalDeductions)})</span>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="bg-muted/30 p-6">
                {/* Gross Pay and Net Pay Section: Gross pay is the sum of all earnings, net pay is the final take-home pay. */}
                <div className="w-full flex justify-between items-center">
                    <span className="text-xl font-bold font-headline">Gross Pay: <span className="text-2xl font-bold font-headline text-primary">{formatCurrency(totalEarnings)}</span></span>
                    <span className="text-xl font-bold font-headline">Net Pay: <span className="text-2xl font-bold font-headline text-primary">{formatCurrency(netPay)}</span></span>
                </div>
            </CardFooter>
          </>
        ) : (
          <CardContent className="p-6 text-center text-muted-foreground">
            No payslip data available for the selected period.
          </CardContent>
        )}
      </Card>
    </div>
  );
}
