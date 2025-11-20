/**
 * @fileoverview This file defines the Loan Request page for the employee dashboard.
 * It allows employees to submit loan requests and view the status of their past requests.
 */
'use client';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSession } from 'next-auth/react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getPastLoanRequests } from "@/lib/data";
import { createLoanRequest } from './actions';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
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

const loanRequestSchema = z.object({
  amount: z.string()
    .min(1, { message: "Amount is required." })
    .refine((val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num >= 1 && num <= 25000;
    }, { message: "Amount must be between ₱1 and ₱25,000." }),
  months: z.string().min(1, { message: "Term in months is required." }),
});

// Interest rates mapping
const INTEREST_RATES = {
  1: 0.061,
  2: 0.082,
  3: 0.103,
  4: 0.124,
  5: 0.145,
  6: 0.166,
  7: 0.187,
  8: 0.208,
};

/**
 * Renders the employee loan request page.
 */
export default function LoanRequestPage() {
  React.useEffect(() => {
    document.title = "Employee Loan Request";
  }, []);

  const { toast } = useToast();
  const { data: session } = useSession();
  const employeeId = session?.user?.id;
  const [pastRequests, setPastRequests] = React.useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [selectedMonths, setSelectedMonths] = React.useState<number>(1);

  const form = useForm({
    resolver: zodResolver(loanRequestSchema),
    defaultValues: {
      amount: "",
      months: "1",
    }
  });

  const fetchLoanRequests = React.useCallback(async () => {
    if (!employeeId) return;
    const requests = await getPastLoanRequests(employeeId);
    setPastRequests(requests);
  }, [employeeId]);

  React.useEffect(() => {
    fetchLoanRequests();
  }, [fetchLoanRequests]);

  const handleSubmit = async (data: z.infer<typeof loanRequestSchema>) => {
    if (!employeeId) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "You must be logged in to submit a loan request.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("employeeId", employeeId);
      formData.append("amount", data.amount);
      formData.append("months", data.months);
      formData.append("interestRate", INTEREST_RATES[selectedMonths as keyof typeof INTEREST_RATES].toString());

      const result = await createLoanRequest(null, formData);

      if (result?.message.includes("success")) {
        toast({
          title: "Success",
          description: "Your loan request has been submitted.",
        });
        form.reset();
        fetchLoanRequests();
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result?.message || "An unknown error occurred.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateTotalAmount = (amount: string, months: number) => {
    const principal = parseFloat(amount) || 0;
    const rate = INTEREST_RATES[months as keyof typeof INTEREST_RATES] || 0;
    const interest = principal * rate * months;
    return principal + interest;
  };

  const calculateMonthlyPayment = (amount: string, months: number) => {
    const totalAmount = calculateTotalAmount(amount, months);
    return totalAmount / months;
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Loan Request</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Loan Request Form */}
        <div className="lg:col-span-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} id="loan-request-form">
              <Card>
                <CardHeader>
                  <CardTitle>Apply for a Loan</CardTitle>
                  <CardDescription>Complete the form to request a loan.</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <input type="hidden" name="employeeId" value={employeeId || ""} />

                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Amount (₱) - Max ₱25,000</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            min="1"
                            max="25000"
                            placeholder="e.g., 5000.00 (max ₱25,000)"
                            {...field}
                            name="amount"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="months"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Term (Months)</FormLabel>
                        <FormControl>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...field}
                            name="months"
                            onChange={(e) => {
                              field.onChange(e);
                              setSelectedMonths(parseInt(e.target.value));
                            }}
                          >
                            {Object.keys(INTEREST_RATES).map((month) => (
                              <option key={month} value={month}>
                                {month} month{month !== '1' ? 's' : ''} ({(INTEREST_RATES[parseInt(month) as keyof typeof INTEREST_RATES] * 100).toFixed(1)}% interest)
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Loan Summary */}
                  {form.watch('amount') && (
                    <div className="p-4 bg-muted rounded-lg space-y-2">
                      <h4 className="font-medium">Loan Summary</h4>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Principal:</span>
                          <span>₱{parseFloat(form.watch('amount') || '0').toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Interest Rate:</span>
                          <span>{(INTEREST_RATES[selectedMonths] * 100).toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Amount:</span>
                          <span>₱{calculateTotalAmount(form.watch('amount'), selectedMonths).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Monthly Payment:</span>
                          <span>₱{calculateMonthlyPayment(form.watch('amount'), selectedMonths).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>

                <CardFooter>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button type="button" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to submit?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will submit your loan request for approval.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => (document.getElementById('loan-request-form') as HTMLFormElement)?.requestSubmit()}>
                          Submit
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardFooter>
              </Card>
            </form>
          </Form>
        </div>

        {/* Past Loan Requests Table */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Request History</CardTitle>
              <CardDescription>The status of your past loan requests.</CardDescription>
            </CardHeader>
            <CardContent>
              {pastRequests.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Term</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Monthly Payment</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastRequests.map((req) => (
                      <TableRow key={req.id}>
                        <TableCell className="font-medium">{req.createdAt}</TableCell>
                        <TableCell>₱{Number(req.amount).toLocaleString()}</TableCell>
                        <TableCell>{req.months} month{req.months !== 1 ? 's' : ''}</TableCell>
                        <TableCell>₱{Number(req.totalAmount).toLocaleString()}</TableCell>
                        <TableCell>₱{Number(req.monthlyPayment).toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          <Badge
                            variant={
                              req.status === 'Approved'
                                ? 'default'
                                : req.status === 'Rejected'
                                ? 'destructive'
                                : 'secondary'
                            }
                            className={req.status === 'Approved' ? 'bg-green-500' : ''}
                          >
                            {req.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-muted-foreground text-center">You have no past loan requests.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}