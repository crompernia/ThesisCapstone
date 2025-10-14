/**
 * @fileoverview This file defines the individual employee payslip calculation page.
 * It allows HR personnel to review attendance data, input adjustments like paid absences
 * and deductions, and calculate the final net pay for an employee.
 */
'use client';

import * as React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, User, Calendar, ClipboardCheck, PlusCircle, Trash2, Calculator, Info } from 'lucide-react';
import Link from 'next/link';
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
import { getEmployeeById, getPositions } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';


/**
 * Renders the detailed payslip calculation page for a single employee.
 * @param {{ params: { id: string } }} props - The props containing the employee ID from the URL.
 * @returns {JSX.Element} The payslip calculation page component.
 */
export default function GenerateEmployeePayslipPage({ params }) {
    const { toast } = useToast();
    const router = useRouter();
    const [employee, setEmployee] = React.useState(null);
    const [positions, setPositions] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [additionalEarnings, setAdditionalEarnings] = React.useState([{ id: 1, name: '', amount: '' }]);
    const [deductions, setDeductions] = React.useState([{ id: 1, name: '', amount: '' }]);

    // Mock data for attendance summary
    const dataSummary = {
        scheduledHours: 160,
        workedHours: 158,
        overtimeHours: 5,
        lates: 2,
        absences: 1,
    };

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [empData, posData] = await Promise.all([
                    getEmployeeById(params.id),
                    getPositions()
                ]);
                setEmployee(empData);
                setPositions(posData);
            } catch (error) {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: 'Failed to fetch initial data.',
                });
            }
            setIsLoading(false);
        };
        fetchData();
    }, [params.id, toast]);

    const employeePosition = positions.find(p => p.title === employee?.position);
    const hourlyRate = employeePosition?.rate ?? 0;
    const overtimeRate = hourlyRate * 1.5;

    const basicPay = dataSummary.workedHours * hourlyRate;
    const overtimePay = dataSummary.overtimeHours * overtimeRate;


    const addEarning = () => {
        setAdditionalEarnings([...additionalEarnings, { id: Date.now(), name: '', amount: '' }]);
    };

    const removeEarning = (id) => {
        setAdditionalEarnings(additionalEarnings.filter(d => d.id !== id));
    };

    const addDeduction = () => {
        setDeductions([...deductions, { id: Date.now(), name: '', amount: '' }]);
    };

    const removeDeduction = (id) => {
        setDeductions(deductions.filter(d => d.id !== id));
    };
    
    const handleCalculateAndSave = () => {
        // In a real application, you would send this data to the server.
        console.log("Saving payslip data...");
        toast({
            title: "Success",
            description: `Payslip for ${employee.name} has been calculated and saved.`
        });
        router.push('/hr/payslip-generation');
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP',
        }).format(value);
    };

    if (isLoading) {
        return (
             <div className="space-y-6">
                <div>
                    <Button asChild variant="outline" size="sm">
                        <Link href="/hr/payslip-generation">
                            <ArrowLeft className="mr-2" />
                            Back to Employee List
                        </Link>
                    </Button>
                </div>
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 space-y-6">
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-48 w-full" />
                    </div>
                    <div className="lg:col-span-2">
                         <Skeleton className="h-96 w-full" />
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className="space-y-6">
        <div>
            <Button asChild variant="outline" size="sm">
                <Link href="/hr/payslip-generation">
                    <ArrowLeft className="mr-2" />
                    Back to Employee List
                </Link>
            </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Data Summary & Inputs */}
            <div className="lg:col-span-1 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><User /> {employee.name}</CardTitle>
                        <CardDescription>{employee.position} - Employee #: {employee.employeeNumber}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-sm p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 flex items-start gap-2">
                             <Info className="h-4 w-4 mt-0.5"/>
                             <span>Hourly Rate: <strong>{formatCurrency(hourlyRate)}</strong></span>
                        </div>
                    </CardContent>
                </Card>

                {/* Attendance & Schedule Summary */}
                <Card>
                    <CardHeader>
                        <CardTitle>Data Summary</CardTitle>
                        <CardDescription>Comparison of scheduled vs. actual work.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between p-2 rounded-lg bg-muted/50">
                            <span className="font-medium flex items-center gap-2"><Calendar/>Scheduled Hours</span>
                            <span>{dataSummary.scheduledHours}</span>
                        </div>
                        <div className="flex justify-between p-2 rounded-lg bg-muted/50">
                            <span className="font-medium flex items-center gap-2"><ClipboardCheck/>Actual Worked Hours</span>
                            <span>{dataSummary.workedHours}</span>
                        </div>
                         <Separator/>
                         <div className="space-y-2">
                            <Label htmlFor="absences-paid">Paid Absences (Days)</Label>
                            <Input id="absences-paid" type="number" placeholder="e.g., 0" />
                            <p className="text-xs text-muted-foreground">Total absences this period: {dataSummary.absences}</p>
                         </div>
                    </CardContent>
                </Card>
            </div>

            {/* Right Column: Calculation and Deductions */}
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Payslip Calculation</CardTitle>
                        <CardDescription>Review earnings and enter deductions for this pay period.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Earnings Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Earnings</h3>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="basic-pay">Basic Pay</Label>
                                        <Input id="basic-pay" value={formatCurrency(basicPay)} readOnly className="font-mono bg-muted"/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="overtime-pay">Overtime Pay</Label>
                                        <Input id="overtime-pay" value={formatCurrency(overtimePay)} readOnly className="font-mono bg-muted"/>
                                    </div>
                                </div>
                                
                                <Separator/>

                                <div className="flex justify-between items-center">
                                    <h4 className="font-medium">Additional Earnings</h4>
                                    <Button variant="outline" size="sm" onClick={addEarning}>
                                        <PlusCircle className="mr-2"/> Add Earning
                                    </Button>
                                </div>
                                <div className="space-y-3">
                                    {additionalEarnings.map((earning, index) => (
                                        <div key={earning.id} className="flex items-end gap-2">
                                            <div className="grid grid-cols-2 gap-2 flex-1">
                                                <div className="space-y-1">
                                                    <Label htmlFor={`earning-name-${index}`} className="sr-only">Earning Name</Label>
                                                    <Input id={`earning-name-${index}`} placeholder="e.g., Holiday Bonus"/>
                                                </div>
                                                <div className="space-y-1">
                                                    <Label htmlFor={`earning-amount-${index}`} className="sr-only">Amount</Label>
                                                    <Input id={`earning-amount-${index}`} type="number" placeholder="e.g., 1000.00"/>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="icon" onClick={() => removeEarning(earning.id)}>
                                                <Trash2 className="text-destructive"/>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Separator/>
                        
                        {/* Deductions Section */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold">Deductions</h3>
                                <Button variant="outline" size="sm" onClick={addDeduction}>
                                    <PlusCircle className="mr-2"/> Add Deduction
                                </Button>
                            </div>
                            <div className="space-y-3">
                                {deductions.map((ded, index) => (
                                    <div key={ded.id} className="flex items-end gap-2">
                                        <div className="grid grid-cols-2 gap-2 flex-1">
                                            <div className="space-y-1">
                                                <Label htmlFor={`ded-name-${index}`} className="sr-only">Deduction Name</Label>
                                                <Input id={`ded-name-${index}`} placeholder="e.g., Government Loan"/>
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor={`ded-amount-${index}`} className="sr-only">Amount</Label>
                                                <Input id={`ded-amount-${index}`} type="number" placeholder="e.g., 500.00"/>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon" onClick={() => removeDeduction(ded.id)}>
                                            <Trash2 className="text-destructive"/>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button>
                                    <Calculator className="mr-2" />
                                    Calculate & Save
                                </Button>
                            </AlertDialogTrigger>
                             <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure you want to calculate and save?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This will finalize and save the payslip for this employee. This action cannot be easily undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={handleCalculateAndSave}>Calculate & Save</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
  );
}
