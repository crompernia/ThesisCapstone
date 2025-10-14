/**
 * @fileoverview This file defines the Leave Request page for the employee dashboard.
 * It allows employees to submit leave requests and view the status of their past requests.
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getPastLeaveRequests } from "@/lib/data";
import { createLeaveRequest } from './actions';
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

// ✅ Define max leave days per leave type
const LEAVE_LIMITS = {
  "Solo Parent": 7,
  "Sick Leave": null,
  "Service Incentive Leave": 5,
};

const leaveRequestSchema = z.object({
  leaveType: z.string().min(1, { message: "Leave type is required." }),
  startDate: z.string().min(1, { message: "Start date is required." }),
  endDate: z.string().min(1, { message: "End date is required." }),
  reason: z.string().optional(),
  attachments: z.any().optional(),
});

/**
 * Renders the employee leave request page.
 */
export default function LeaveRequestPage() {
  React.useEffect(() => {
    document.title = "Employee Leave Request";
  }, []);

  const { toast } = useToast();
  const { data: session } = useSession();
  const employeeId = session?.user?.id;
  const [pastRequests, setPastRequests] = React.useState<any[]>([]);

  const form = useForm({
    resolver: zodResolver(leaveRequestSchema),
    defaultValues: {
      leaveType: "",
      startDate: "",
      endDate: "",
      reason: "",
    }
  });

  const fetchLeaveRequests = React.useCallback(async () => {
    if (!employeeId) return;
    const requests = await getPastLeaveRequests(employeeId);
    setPastRequests(requests);
  }, [employeeId]);

  React.useEffect(() => {
    fetchLeaveRequests();
  }, [fetchLeaveRequests]);

  // 🧩 Watch leave type and date fields
  const leaveType = form.watch("leaveType");
  const startDate = form.watch("startDate");
  const endDate = form.watch("endDate");
  const maxDays = LEAVE_LIMITS[leaveType] || null;

  const calculateDays = React.useCallback(() => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = (end - start) / (1000 * 60 * 60 * 24) + 1;
    return diff > 0 ? diff : 0;
  }, [startDate, endDate]);

  const totalDays = calculateDays();

  const handleSubmit = async (data: z.infer<typeof leaveRequestSchema>) => {
    if (!employeeId) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "You must be logged in to submit a leave request.",
      });
      return;
    }

    if (maxDays && totalDays > maxDays) {
      toast({
        variant: "destructive",
        title: "Invalid Leave Duration",
        description: `You can only request up to ${maxDays} days for ${leaveType}.`,
      });
      return;
    }

    const formData = new FormData();
    formData.append("employeeId", employeeId);
    formData.append("leaveType", data.leaveType);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("reason", data.reason || "");

    if (data.attachments && data.attachments.length > 0) {
      Array.from(data.attachments).forEach((file: any) => {
        formData.append("attachments", file);
      });
    }

    const result = await createLeaveRequest(null, formData);

    if (result?.message.includes("success")) {
      toast({
        title: "Success",
        description: "Your leave request has been submitted.",
      });
      form.reset();
      fetchLeaveRequests();
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
      <h1 className="text-3xl font-bold font-headline">Leave Request</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leave Request Form */}
        <div className="lg:col-span-1">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} id="leave-request-form">
              <Card>
                <CardHeader>
                  <CardTitle>File a Leave Request</CardTitle>
                  <CardDescription>Complete the form to request time off.</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <input type="hidden" name="employeeId" value={employeeId || ""} />
                  
                  <FormField
                    control={form.control}
                    name="leaveType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Leave Type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value} name="leaveType">
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select a type" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Solo Parent">Solo Parent</SelectItem>
                            <SelectItem value="Sick Leave">Sick Leave</SelectItem>
                            <SelectItem value="Service Incentive Leave">Service Incentive Leave</SelectItem>
                          </SelectContent>
                        </Select>
                        {maxDays && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Maximum of {maxDays} days allowed.
                          </p>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} name="startDate" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              {...field}
                              name="endDate"
                              min={startDate || ""}
                              max={
                                startDate && maxDays
                                  ? new Date(
                                      new Date(startDate).setDate(
                                        new Date(startDate).getDate() + (maxDays - 1)
                                      )
                                    )
                                      .toISOString()
                                      .split("T")[0]
                                  : ""
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Display selected day count */}
                  {startDate && endDate && (
                    <p
                     className={`text-sm ${
                    maxDays && totalDays > maxDays ? "text-red-500" : "text-foreground"
                     }`}
                    >
                     You selected {totalDays} day(s)
                    {maxDays ? ` (maximum allowed: ${maxDays})` : " (no limit for this leave type)."}
                    </p>
                    )}

                  <FormField
                    control={form.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Please provide a brief reason for your leave." {...field} name="reason" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="attachments"
                    render={({ field }) => {
                      const files = Array.from(form.watch("attachments") || []);
                      const handleRemoveFile = (fileToRemove) => {
                        const updatedFiles = files.filter((file) => file !== fileToRemove);
                        const dataTransfer = new DataTransfer();
                        updatedFiles.forEach((file) => dataTransfer.items.add(file));
                        field.onChange(dataTransfer.files);
                      };

                      return (
                        <FormItem>
                          <FormLabel>Attachments (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              name="attachments"
                              multiple
                              onChange={(e) => field.onChange(e.target.files)}
                            />
                          </FormControl>

                          {files.length > 0 && (
                            <ul className="mt-3 space-y-1 text-sm text-gray-600">
                              {files.map((file) => (
                                <li
                                  key={file.name}
                                  className="flex items-center justify-between bg-gray-50 border rounded px-2 py-1"
                                >
                                  <span className="truncate max-w-[80%]">📎 {file.name}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveFile(file)}
                                    className="text-red-500 hover:text-red-700"
                                    title="Remove file"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                          <FormMessage />
                        </FormItem>
                      );
                    }}
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
                          This action cannot be undone. This will submit your leave request for approval.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => document.getElementById('leave-request-form')?.requestSubmit()}>
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

        {/* Past Leave Requests Table */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Request History</CardTitle>
              <CardDescription>The status of your past leave requests.</CardDescription>
            </CardHeader>
            <CardContent>
              {pastRequests.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastRequests.map((req) => (
                      <TableRow key={req.id}>
                        <TableCell className="font-medium">{req.leave_type}</TableCell>
                        <TableCell>{req.startDate}</TableCell>
                        <TableCell>{req.endDate}</TableCell>
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
                <p className="text-muted-foreground text-center">You have no past leave requests.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
