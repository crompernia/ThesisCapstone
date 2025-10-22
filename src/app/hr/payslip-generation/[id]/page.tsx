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
import { getEmployeeById, getPositions, getAttendanceData } from '@/lib/data';
import { getSSSDeduction, getPhilhealthDeduction, getPagibigDeduction } from '@/lib/payroll';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';


/**
 * Renders the detailed payslip calculation page for a single employee.
 * @param {{ params: { id: string } }} props - The props containing the employee ID from the URL.
 * @returns {JSX.Element} The payslip calculation page component.
 */
export default function GenerateEmployeePayslipPage({ params }: { params: { id: string } }) {
    const { toast } = useToast();
    const router = useRouter();
    type Position = { id: number; title: string; rate: number | string }
    type Employee = { id: string; name: string; position?: string | null; employeeNumber?: string | null }
    const [employee, setEmployee] = React.useState<Employee | null>(null);
    const [positions, setPositions] = React.useState<Position[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [additionalEarnings, setAdditionalEarnings] = React.useState([{ id: 1, name: '', amount: '' }]);
    const [deductions, setDeductions] = React.useState([{ id: 1, name: '', amount: '' }]);
    const [numberOfHoursPerDay, setNumberOfHoursPerDay] = React.useState(8);
    const [minutesLate, setMinutesLate] = React.useState(0);
    const [attendanceData, setAttendanceData] = React.useState<any>(null);
    const regularHolidayAmount = 0; // Read-only field for Regular holiday
    const regularHolidayOvertimeAmount = 0; // Read-only field for Regular Holiday Overtime
    const specialHolidayAmount = 0; // Read-only field for Special holiday
    const specialHolidayOvertimeAmount = 0; // Read-only field for Special Holiday Overtime

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
                const [empData, posData, attData] = await Promise.all([
                    getEmployeeById(params.id),
                    getPositions(),
                    getAttendanceData(params.id)
                ]);
                setEmployee(empData || { id: params.id, name: 'Unknown Employee', position: 'Unknown', employeeNumber: 'N/A' });
                setPositions(posData.length > 0 ? posData : [{ id: 1, title: 'Unknown', rate: '0' }]);
                setAttendanceData(attData || { summary: { lates: 0, absences: 0, daysAttended: 0, availableLeaves: 0, totalHours: 0 } });
                // Set minutesLate from attendance data or default to 0
                setMinutesLate(attData?.summary?.lates || 0);
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
    const hourlyRate = Number(employeePosition?.rate ?? 0);
    const overtimeRate = hourlyRate * 1.5;

    const basicPay = (dataSummary?.workedHours || 0) * hourlyRate;
    const overtimePay = (dataSummary?.overtimeHours || 0) * overtimeRate;

    // Calculate Monthly Salary Credit (MSC) for SSS based on standard 160 hours per month
    const monthlySalaryCredit = hourlyRate * 160;

    // Payslip late deduction calculation
    // perMinute = (dailyRate / numberOfHours) / 60
    // deduction = perMinute * minutesLate
    // Infer dailyRate from hourlyRate * numberOfHoursPerDay when a dedicated dailyRate is not provided.
    const dailyRate = hourlyRate * numberOfHoursPerDay;
    const perMinuteRate = (dailyRate / (numberOfHoursPerDay || 1)) / 60;
    const lateDeduction = perMinuteRate * (Number(minutesLate) || 0);

    const sssDeduction = getSSSDeduction(monthlySalaryCredit);
    const philhealthDeduction = getPhilhealthDeduction(basicPay);
    const pagibigDeduction = getPagibigDeduction(basicPay);


    const addEarning = () => {
        setAdditionalEarnings([...additionalEarnings, { id: Date.now(), name: '', amount: '' }]);
    };

    const removeEarning = (id: number) => {
        setAdditionalEarnings(additionalEarnings.filter(d => d.id !== id));
    };

    const addDeduction = () => {
        setDeductions([...deductions, { id: Date.now(), name: '', amount: '' }]);
    };

    const removeDeduction = (id: number) => {
        setDeductions(deductions.filter(d => d.id !== id));
    };
    
    const handleCalculateAndSave = async () => {
        // Validate required fields
        if (!employee?.id) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Employee information is missing.',
            });
            return;
        }

        const totalAdditional = additionalEarnings.reduce((s, a) => s + (Number(a.amount) || 0), 0) + regularHolidayAmount + regularHolidayOvertimeAmount + specialHolidayAmount + specialHolidayOvertimeAmount;
        const totalUserDeductions = deductions.reduce((s, d) => s + (Number(d.amount) || 0), 0);
        const totalEarnings = basicPay + overtimePay + totalAdditional;
        const totalDeductions = totalUserDeductions + lateDeduction + sssDeduction + philhealthDeduction + pagibigDeduction;
        const netPay = totalEarnings - totalDeductions;

        // Get current date for pay period
        const today = new Date();
        const payPeriod = `${today.toLocaleString('default', { month: 'short' })} ${today.getFullYear()}`;
        // Set pay date to the last day of the current month
        const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

        const payload = {
            employeeId: employee?.id || params.id,
            payPeriod,
            payDate: lastDayOfMonth.toISOString().split('T')[0], // YYYY-MM-DD format
            basicPay,
            overtime: overtimePay,
            allowances: totalAdditional,
            sssDeduction,
            philhealthDeduction,
            pagibigDeduction,
            taxDeduction: 0,
            sssLoan: 0,
            hdmfLoan: 0,
            companyLoan: 0,
            otherDeductions: totalUserDeductions,
            netPay,
            daysWorked: Math.max(0, (dataSummary?.workedHours || 0) / numberOfHoursPerDay), // Ensure non-negative
            dailyRate: Math.max(0, hourlyRate * numberOfHoursPerDay), // Ensure non-negative
            nightDifferential: 0,
        };

        try {
            const response = await fetch('/api/payslips', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to save payslip');
            }

            toast({
                title: "Success",
                description: `Payslip for ${employee?.name || 'Employee'} saved successfully. Earnings: ${formatCurrency(totalEarnings)}, Net pay: ${formatCurrency(netPay)}`
            });

            router.push('/hr/payslip-generation');
        } catch (error) {
            console.error('Error saving payslip:', error);
            const errorMessage = error instanceof Error ? error.message : 'Failed to save payslip. Please try again.';
            toast({
                variant: 'destructive',
                title: 'Error',
                description: errorMessage,
            });
        } finally {
            // Reset loading state if needed
        }
    };

    const formatCurrency = (value: number) => {
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
                        <CardTitle className="flex items-center gap-2"><User /> {employee?.name ?? 'Employee'}</CardTitle>
                        <CardDescription>{employee?.position ?? ''} - Employee #: {employee?.employeeNumber ?? ''}</CardDescription>
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
                            <span>{dataSummary?.scheduledHours || 160}</span>
                        </div>
                        <div className="flex justify-between p-2 rounded-lg bg-muted/50">
                            <span className="font-medium flex items-center gap-2"><ClipboardCheck/>Actual Worked Hours</span>
                            <span>{dataSummary?.workedHours || 0}</span>
                        </div>
                        <div className="flex justify-between p-2 rounded-lg bg-muted/50">
                            <span className="font-medium flex items-center gap-2"><Calendar/>No. of Days</span>
                            <span>{attendanceData?.summary?.daysAttended || 0}</span>
                        </div>
                         <Separator/>
                         <div className="space-y-2">
                             <Label htmlFor="absences-paid">Paid Absences (Days)</Label>
                             <Input id="absences-paid" type="number" placeholder="e.g., 0" />
                             <p className="text-xs text-muted-foreground">Total absences this period: {dataSummary?.absences || 0}</p>
                         </div>
                                 <Separator/>
                                 <div className="space-y-2">
                                     <Label htmlFor="hours-per-day">Work Hours per Day</Label>
                                     <Input id="hours-per-day" type="number" value={numberOfHoursPerDay} onChange={(e) => setNumberOfHoursPerDay(Number(e.target.value || 0))} />
                                     <p className="text-xs text-muted-foreground">Used to compute per-minute rate for late deductions.</p>
                                 </div>
                                 <div className="space-y-2">
                                     <Label htmlFor="minutes-late">Minutes Late (total)</Label>
                                     <Input id="minutes-late" type="number" value={minutesLate} readOnly className="bg-muted" />
                                     <p className="text-xs text-muted-foreground">Late deduction will be calculated automatically using the formula provided. This value is pulled from the employee's attendance records.</p>
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
                                    <div className="flex justify-between items-center">
                                        <Label htmlFor="regular-holiday-amount" className="font-medium">Regular Holiday</Label>
                                        <Input id="regular-holiday-amount" type="number" value={regularHolidayAmount} readOnly className="bg-muted w-44"/>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Label htmlFor="regular-holiday-overtime-amount" className="font-medium">Regular Holiday Overtime</Label>
                                        <Input id="regular-holiday-overtime-amount" type="number" value={regularHolidayOvertimeAmount} readOnly className="bg-muted w-44"/>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Label htmlFor="special-holiday-amount" className="font-medium">Special Holiday</Label>
                                        <Input id="special-holiday-amount" type="number" value={specialHolidayAmount} readOnly className="bg-muted w-44"/>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Label htmlFor="special-holiday-overtime-amount" className="font-medium">Special Holiday Overtime</Label>
                                        <Input id="special-holiday-overtime-amount" type="number" value={specialHolidayOvertimeAmount} readOnly className="bg-muted w-44"/>
                                    </div>
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
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="sss-deduction" className="font-medium">SSS Deduction</Label>
                                    <Input id="sss-deduction" type="number" value={sssDeduction} readOnly className="bg-muted w-44"/>
                                </div>
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="philhealth-deduction" className="font-medium">PhilHealth Deduction</Label>
                                    <Input id="philhealth-deduction" type="number" value={philhealthDeduction} readOnly className="bg-muted w-44"/>
                                </div>
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="pagibig-deduction" className="font-medium">Pag-IBIG Deduction</Label>
                                    <Input id="pagibig-deduction" type="number" value={pagibigDeduction} readOnly className="bg-muted w-44"/>
                                </div>
                            </div>
                        </div>
                        {/* Summary */}
                        <div className="p-4">
                            <h4 className="font-semibold mb-2">Summary</h4>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm text-muted-foreground">Total Earnings</div>
                                <div className="text-right font-mono">{formatCurrency(basicPay + overtimePay + additionalEarnings.reduce((s, a) => s + (Number(a.amount) || 0), 0) + regularHolidayAmount + regularHolidayOvertimeAmount + specialHolidayAmount + specialHolidayOvertimeAmount)}</div>

                                <div className="text-sm text-muted-foreground">Total Deductions (incl. Late, SSS, PhilHealth & Pag-IBIG)</div>
                                <div className="text-right font-mono">{formatCurrency(deductions.reduce((s, d) => s + (Number(d.amount) || 0), 0) + lateDeduction + sssDeduction + philhealthDeduction + pagibigDeduction)}</div>

                                <div className="text-sm text-muted-foreground">Late Deduction</div>
                                <div className="text-right font-mono">{formatCurrency(lateDeduction)}</div>

                                <div className="text-sm text-muted-foreground">SSS Deduction</div>
                                <div className="text-right font-mono">{formatCurrency(sssDeduction)}</div>

                                <div className="text-sm text-muted-foreground">PhilHealth Deduction</div>
                                <div className="text-right font-mono">{formatCurrency(philhealthDeduction)}</div>

                                <div className="text-sm text-muted-foreground">Pag-IBIG Deduction</div>
                                <div className="text-right font-mono">{formatCurrency(pagibigDeduction)}</div>

                                <div className="text-sm text-muted-foreground">Net Pay</div>
                                <div className="text-right font-mono">{formatCurrency((basicPay + overtimePay + additionalEarnings.reduce((s, a) => s + (Number(a.amount) || 0), 0) + regularHolidayAmount + regularHolidayOvertimeAmount + specialHolidayAmount + specialHolidayOvertimeAmount) - (deductions.reduce((s, d) => s + (Number(d.amount) || 0), 0) + lateDeduction + sssDeduction + philhealthDeduction + pagibigDeduction))}</div>
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
