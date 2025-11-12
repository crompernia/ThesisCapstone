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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
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
  amount: z.number().min(1, { message: "Amount must be at least 1." }),
  months: z.number().min(1).max(8, { message: "Months must be between 1 and 8." }),
});

type Loan = {
  id: number;
  amount: string;
  months: number;
  interestRate: string;
  totalAmount: string;
  status: string;
  requestedAt: string;
  approvedAt?: string;
  notes?: string;
};

export default function LoanRequestPage() {
  React.useEffect(() => {
    document.title = "Employee Loan Request";
  }, []);

  const { toast } = useToast();
  const { data: session } = useSession();
  const employeeId = session?.user?.id;
  const [pastRequests, setPastRequests] = React.useState<Loan[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(loanRequestSchema),
    defaultValues: {
      amount: 0,
      months: 1,
    }
  });

  const fetchLoanRequests = React.useCallback(async () => {
    if (!employeeId) return;
    try {
      const response = await fetch('/api/loans');
      if (response.ok) {
        const data = await response.json();
        setPastRequests(data.loans || []);
      }
    } catch (error) {
      console.error('Error fetching loans:', error);
    }
  }, [employeeId]);

  React.useEffect(() => {
    fetchLoanRequests();
  }, [fetchLoanRequests]);

  const months = form.watch("months");
  const amount = form.watch("amount");

  const calculateInterestRate = (months: number) => {
    return 0.061 + (months - 1) * 0.021;
  };

  const interestRate = calculateInterestRate(months);
  const totalAmount = amount * (1 + interestRate);

  const handleSubmit = async (data: z.infer<typeof loanRequestSchema>) => {
    if (!employeeId) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "You must be logged in to submit a loan request.",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/loans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Your loan request has been submitted.",
        });
        form.reset();
        fetchLoanRequests();
      } else {
        const error = await response.json();
        toast({
          variant: "destructive",
          title: "Error",
          description: error.error || "An unknown error occurred.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit loan request.",
      });
    } finally {
      setIsLoading(false);
    }
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
                  <CardTitle>Request a Loan</CardTitle>
                  <CardDescription>Complete the form to request a loan.</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Amount (PHP)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
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
                        <FormLabel>Repayment Period (Months)</FormLabel>
                        <Select
                          onValueChange={(value) => field.onChange(parseInt(value))}
                          value={field.value.toString()}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select months" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((month) => (
                              <SelectItem key={month} value={month.toString()}>
                                {month} month{month > 1 ? 's' : ''}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {amount > 0 && months > 0 && (
                    <div className="p-4 bg-muted rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <span>Principal Amount:</span>
                        <span>₱{amount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interest Rate:</span>
                        <span>{(interestRate * 100).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Total Amount:</span>
                        <span>₱{totalAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Monthly Payment:</span>
                        <span>₱{(totalAmount / months).toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                </CardContent>

                <CardFooter>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button type="button" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit Request'}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to submit?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will submit your loan request for approval.
                          Total amount: ₱{totalAmount.toLocaleString()} over {months} month{months > 1 ? 's' : ''}.
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
                      <TableHead>Amount</TableHead>
                      <TableHead>Months</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Requested</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastRequests.map((req) => (
                      <TableRow key={req.id}>
                        <TableCell className="font-medium">₱{parseFloat(req.amount).toLocaleString()}</TableCell>
                        <TableCell>{req.months}</TableCell>
                        <TableCell>₱{parseFloat(req.totalAmount).toLocaleString()}</TableCell>
                        <TableCell>{new Date(req.requestedAt).toLocaleDateString()}</TableCell>
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