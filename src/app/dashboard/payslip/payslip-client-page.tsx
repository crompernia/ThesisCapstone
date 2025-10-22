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

  const totalEarnings = payslipData?.earnings.reduce((sum, item) => sum + item.amount, 0) ?? 0;
  const totalDeductions = payslipData?.deductions.reduce((sum, item) => sum + item.amount, 0) ?? 0;
  const netPay = payslipData?.net_pay ?? 0;

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
    const totalEarnings = payslipData.earnings
      .filter(e => e.name !== 'No. of Days' && e.name !== 'Daily Rate')
      .reduce((sum, e) => sum + e.amount, 0);

    autoTable(doc, {
      startY: 60,
      head: [['Earnings', 'Amount']],
      body: payslipData.earnings.map(e => [
        e.name,
        e.name === 'No. of Days' ? e.amount.toString() : formatCurrency(e.amount)
      ]),
      foot: [['Gross Earnings', formatCurrency(totalEarnings)]],
      theme: 'striped',
      headStyles: { fillColor: [22, 163, 74] }, // Green
      footStyles: { fillColor: [244, 244, 245], textColor: [15, 23, 42], fontStyle: 'bold' },
    });

    // Deductions Table
    const lastTableY = doc.lastAutoTable.finalY;
    autoTable(doc, {
      startY: lastTableY + 10,
      head: [['Deductions', 'Amount']],
      body: payslipData.deductions.map(d => [d.name, `(${formatCurrency(d.amount)})`]),
      foot: [['Total Deductions', `(${formatCurrency(totalDeductions)})`]],
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
                  {payslipData.earnings.map((item, index) => (
                    <li key={index} className="flex justify-between items-center text-sm">
                      <span>{item.name}</span>
                      <span className="font-mono">
                        {item.name === "No. of Days" ? item.amount : formatCurrency(item.amount)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-4" />
                <div className="flex justify-between items-center font-semibold">
                  <span>Gross Earnings</span>
                  <span className="font-mono">
                    {formatCurrency(
                      payslipData.earnings
                        .filter(item => !["Daily Rate", "No. of Days"].includes(item.name))
                        .reduce((sum, e) => sum + e.amount, 0)
                    )}
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
                                <span className="font-mono">({formatCurrency(item.amount)})</span>
                            </li>
                        ))}
                        </ul>
                        <Separator className="my-4"/>
                        <div className="flex justify-between items-center font-semibold">
                            <span>Total Deductions</span>
                            <span className="font-mono">({formatCurrency(totalDeductions)})</span>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="bg-muted/30 p-6">
                {/* Net Pay Section: The final take-home pay. */}
                <div className="w-full flex justify-between items-center">
                    <span className="text-xl font-bold font-headline">Net Pay</span>
                    <span className="text-2xl font-bold font-headline text-primary">{formatCurrency(netPay)}</span>
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
