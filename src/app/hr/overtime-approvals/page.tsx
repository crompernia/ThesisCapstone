/**
 * @fileoverview This file defines the Overtime Approvals page for the HR portal.
 * It provides HR personnel with a view to manage and approve/reject employee overtime requests.
 */
'use client';

import * as React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
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
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search, Eye } from "lucide-react";
import { getOvertimeRequests } from "@/lib/data";
import { updateOvertimeRequestStatusAction } from './actions';
import { useToast } from '@/hooks/use-toast';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog";


/**
 * Renders the HR overtime approvals management page.
 * @returns {JSX.Element} The overtime approvals page component.
 */
export default function OvertimeApprovalsPage() {
    React.useEffect(() => {
        document.title = "HR Overtime Approvals";
        }, []);
    const { toast } = useToast();
    type OvertimeRequest = {
        id: number;
        employeeId: string | null;
        employeeName: string;
        date: string;
        hours_requested: string;
        reason: string | null;
        status: string | null;
    }
    const [overtimeRequests, setOvertimeRequests] = React.useState<OvertimeRequest[]>([]);
    const [updatingRequest, setUpdatingRequest] = React.useState(false);

    const fetchOvertimeRequests = React.useCallback(async () => {
        const requests = await getOvertimeRequests();
        setOvertimeRequests(requests);
    }, []);

    React.useEffect(() => {
        fetchOvertimeRequests();
    }, [fetchOvertimeRequests]);


    const handleUpdateRequest = async (requestId: number, status: string) => {
        setUpdatingRequest(true);
        try {
            const result = await updateOvertimeRequestStatusAction(requestId, status);
            if (result?.success) {
                toast({
                    title: 'Success',
                    description: `Overtime request has been ${status.toLowerCase()}.`,
                });
                fetchOvertimeRequests();
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result?.message || `Failed to ${status.toLowerCase()} overtime request.`,
                });
            }
        } finally {
            setUpdatingRequest(false);
        }
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">Overtime Request Approvals</h1>

            {/* Filtering Controls */}
            <Card>
                <CardHeader>
                    <CardTitle>Filter Requests</CardTitle>
                    <CardDescription>
                        Search for requests by employee, date, or status.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Input placeholder="Search by Employee Name or ID..." />
                        <Select>
                            <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Statuses</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="approved">Approved</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input type="date" placeholder="From Date" />
                        <Button className="w-full">
                            <Search />
                            Search
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Overtime Requests Table */}
            <Card>
            <CardHeader>
                <CardTitle>Incoming Requests</CardTitle>
                <CardDescription>Review and act on new and existing overtime requests.</CardDescription>
            </CardHeader>

            <CardContent>
                {overtimeRequests.length > 0 ? (
                  <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Employee</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Hours Requested</TableHead>
                            <TableHead>Reason</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {overtimeRequests.map((req) => (
                        <TableRow key={req.id}>
                            <TableCell>
                                <div className="font-medium">{req.employeeName}</div>
                                <div className="text-xs text-muted-foreground font-mono">{req.employeeId}</div>
                            </TableCell>
                            <TableCell>{req.date}</TableCell>
                            <TableCell>{req.hours_requested} hours</TableCell>
                            <TableCell className="max-w-[200px] truncate">{req.reason}</TableCell>
                            <TableCell>
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

                            <TableCell className="text-right">
                                <div className="flex gap-2 justify-end">
                                    {/* View Button + Dialog */}
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" size="sm">
                                                <Eye className="mr-2 h-4 w-4" /> View
                                            </Button>
                                        </DialogTrigger>

                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Overtime Request Details</DialogTitle>
                                                <DialogDescription>
                                                    From: {req.employeeName}
                                                </DialogDescription>
                                            </DialogHeader>

                                            <div className="space-y-4 text-sm py-4">
                                                <p><strong>Date:</strong> {req.date}</p>
                                                <p><strong>Hours Requested:</strong> {req.hours_requested}</p>
                                                <p><strong>Status:</strong> {req.status}</p>
                                                <div>
                                                    <p><strong>Reason:</strong></p>
                                                    <p className="p-2 bg-muted rounded-md">
                                                        {req.reason || 'No reason provided.'}
                                                    </p>
                                                </div>
                                            </div>

                                            <DialogFooter>
                                                {req.status === 'Pending' && (
                                                    <div className="flex w-full justify-end gap-2">
                                                        {/* Approve Button */}
                                                        <AlertDialog>
                                                            <AlertDialogTrigger asChild>
                                                                <Button
                                                                    variant="outline"
                                                                    className="text-green-600 border-green-600 hover:bg-green-100 hover:text-green-700"
                                                                >
                                                                    Approve
                                                                </Button>
                                                            </AlertDialogTrigger>
                                                            <AlertDialogContent>
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                </AlertDialogHeader>
                                                                <AlertDialogDescription>
                                                                    This will approve the overtime request.
                                                                </AlertDialogDescription>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                    <AlertDialogAction
                                                                        onClick={() =>
                                                                            handleUpdateRequest(req.id, 'Approved')
                                                                        }
                                                                        loading={updatingRequest}
                                                                    >
                                                                        Approve
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>

                                                        {/* Reject Button */}
                                                        <AlertDialog>
                                                            <AlertDialogTrigger asChild>
                                                                <Button variant="destructive">Reject</Button>
                                                            </AlertDialogTrigger>
                                                            <AlertDialogContent>
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                </AlertDialogHeader>
                                                                <AlertDialogDescription>
                                                                    This will reject the overtime request.
                                                                </AlertDialogDescription>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                    <AlertDialogAction
                                                                        onClick={() =>
                                                                            handleUpdateRequest(req.id, 'Rejected')
                                                                        }
                                                                        loading={updatingRequest}
                                                                    >
                                                                        Reject
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </div>
                                                )}

                                                <DialogClose asChild>
                                                    <Button variant="outline">Close</Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    </div>
                              </TableCell>
                            </TableRow>
                          ))}
                    </TableBody>
                </Table>
            ) : (
            <p className="text-muted-foreground text-center">
                No overtime requests found matching your criteria.
            </p>
        )}
    </CardContent>
    </Card>
        </div>
    );
}