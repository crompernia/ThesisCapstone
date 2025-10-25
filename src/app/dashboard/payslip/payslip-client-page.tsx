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
  CardTitle,
  CardDescription,
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
export default function PayslipClientPage({ payPeriods, employeeName }) {
  React.useEffect(() => {
      document.title = "Employee Payslip";
      }, []);
  const [selectedPeriod, setSelectedPeriod] = React.useState('');

  React.useEffect(() => {
    if (payPeriods && payPeriods.length > 0) {
      setSelectedPeriod(String(payPeriods[0].id));
    }
  }, [payPeriods]);

  const payslipData = payPeriods?.find(p => String(p.id) === selectedPeriod);

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
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
    }).format(value);
  };

  const handleDownloadPdf = () => {
    if (!payslipData) return;
    
    const doc = new jsPDF();

    // Header
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Chumplace", 14, 22);
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text("Payslip", 14, 30);
    
    doc.setFontSize(10);
    doc.text(`Employee: ${employeeName}`, 14, 40);
    doc.text(`Pay Period: ${payslipData.period}`, 14, 45);
    doc.text(`Pay Date: ${payslipData.payDate}`, 14, 50);

    // Earnings Table
    const filteredEarnings = payslipData.earnings.filter(e => !excludedEarnings.includes(e.name) && e.name !== 'No. of Days' && e.name !== 'Daily Rate' && e.name !== 'Basic Pay');
    const totalEarnings = filteredEarnings.reduce((sum, e) => sum + e.amount, 0);

    autoTable(doc, {
      startY: 60,
      head: [['Earnings', 'Amount']],
      body: payslipData.earnings.filter(e => !excludedEarnings.includes(e.name) && e.name !== 'No. of Days' && e.name !== 'Basic Pay').map(e => [
        e.name,
        formatCurrency(e.amount)
      ]),
      foot: [
        ['Daily Rate', formatCurrency(dailyRate)],
        ['No. of Days', noOfDays.toString()],
        ['Basic Pay', formatCurrency(basicPay)],
        ['Overtime', formatCurrency(overtime)],
        ['Night Differential', formatCurrency(nightDifferential)],
        ['Regular Holiday', formatCurrency(regularHoliday)],
        ['RH OT', formatCurrency(regularHoliday)]
      ],
      theme: 'striped',
      headStyles: { fillColor: [22, 163, 74] }, // Green
      footStyles: { fillColor: [244, 244, 245], textColor: [15, 23, 42], fontStyle: 'bold' },
    });

    // Deductions Table
    const lastTableY = doc.lastAutoTable.finalY;
    autoTable(doc, {
      startY: lastTableY + 10,
      head: [['Deductions', 'Amount']],
      body: payslipData.deductions.map(d => [d.name, formatCurrency(d.amount)]),
      foot: [
        ['Late/Undertime', formatCurrency(0)],
        ['Total Deductions', `(${formatCurrency(totalDeductions)})`]
      ],
      theme: 'striped',
      headStyles: { fillColor: [220, 38, 38] }, // Red
      footStyles: { fillColor: [244, 244, 245], textColor: [15, 23, 42], fontStyle: 'bold' },
    });
    
    // Net Pay
    const finalY = doc.lastAutoTable.finalY;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Net Pay:", 132, finalY + 15);
    doc.text(formatCurrency(netPay), doc.internal.pageSize.getWidth() - 35, finalY + 15, { align: 'right' });


    doc.save(`Payslip-${employeeName.replace(' ', '-')}-${payslipData.period}.pdf`);
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
                <div className="flex items-center gap-2">
                    <Building2 />
                    <h2 className="text-2xl font-bold font-headline">CHUMTING TRADING CORPORATION</h2>
                </div>
                <p className="text-muted-foreground">{payslipData ? `Employee Name: ${employeeName}` : 'Select a period to view payslip'}
                </p>
            </div>
            {payslipData && (
              <div className="text-right">
                  <p className="text-sm text-muted-foreground">Pay Date</p>
                  <p className="font-semibold">{payslipData.payDate}</p>
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

                <Separator className="my-4" />
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
                        <Separator className="my-4" />
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
