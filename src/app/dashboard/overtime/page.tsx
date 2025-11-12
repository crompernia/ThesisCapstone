/**
 * @fileoverview This file defines the Overtime Request page for the employee dashboard.
 * It allows employees to submit overtime requests and view the status of their past requests.
 */
'use client';
import { Trash2 } from "lucide-react";
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
import { getPastOvertimeRequests } from "@/lib/data";
import { createOvertimeRequest } from './actions';
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

const overtimeRequestSchema = z.object({
  date: z.string().min(1, { message: "Date is required." }),
  hoursRequested: z.string().min(1, { message: "Hours requested is required." }),
  reason: z.string().optional(),
});

/**
 * Renders the employee overtime request page.
 */
export default function OvertimeRequestPage() {
  React.useEffect(() => {
    document.title = "Employee Overtime Request";
  }, []);

  const { toast } = useToast();
  const { data: session } = useSession();
  const employeeId = session?.user?.id;
  const [pastRequests, setPastRequests] = React.useState<any[]>([]);

  const form = useForm({
    resolver: zodResolver(overtimeRequestSchema),
    defaultValues: {
      date: "",
      hoursRequested: "",
      reason: "",
    }
  });

  const fetchOvertimeRequests = React.useCallback(async () => {
    if (!employeeId) return;
    const requests = await getPastOvertimeRequests(employeeId);
    setPastRequests(requests);
  }, [employeeId]);

  React.useEffect(() => {
    fetchOvertimeRequests();
  }, [fetchOvertimeRequests]);

  const handleSubmit = async (data: z.infer<typeof overtimeRequestSchema>) => {
    if (!employeeId) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "You must be logged in to submit an overtime request.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("employeeId", employeeId);
    formData.append("date", data.date);
    formData.append("hoursRequested", data.hoursRequested);
    formData.append("reason", data.reason || "");

    const result = await createOvertimeRequest(null, formData);

    if (result?.message.includes("success")) {
      toast({
        title: "Success",
        description: "Your overtime request has been submitted.",
      });
      form.reset();
      fetchOvertimeRequests();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result?.message || "An unknown error occurred.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Overtime Request</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overtime Request Form */}
        <div className="lg:col-span-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} id="overtime-request-form">
              <Card>
                <CardHeader>
                  <CardTitle>File an Overtime Request</CardTitle>
                  <CardDescription>Complete the form to request overtime hours.</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <input type="hidden" name="employeeId" value={employeeId || ""} />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} name="date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hoursRequested"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hours Requested</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.5"
                            min="0.5"
                            max="24"
                            placeholder="e.g., 2.5"
                            {...field}
                            name="hoursRequested"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason (Optional)</FormLabel>
                        <FormControl>
                          <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Please provide a brief reason for your overtime request."
                            {...field}
                            name="reason"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>

                <CardFooter>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button type="button" className="w-full">Submit Request</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to submit?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will submit your overtime request for approval.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => (document.getElementById('overtime-request-form') as HTMLFormElement)?.requestSubmit()}>
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

        {/* Past Overtime Requests Table */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Request History</CardTitle>
              <CardDescription>The status of your past overtime requests.</CardDescription>
            </CardHeader>
            <CardContent>
              {pastRequests.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Hours Requested</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastRequests.map((req) => (
                      <TableRow key={req.id}>
                        <TableCell className="font-medium">{req.date}</TableCell>
                        <TableCell>{req.hours_requested} hours</TableCell>
                        <TableCell className="max-w-[200px] truncate">{req.reason}</TableCell>
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
                <p className="text-muted-foreground text-center">You have no past overtime requests.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}