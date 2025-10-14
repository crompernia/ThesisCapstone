/**
 * @fileoverview This file defines the Pending Approvals page for the Admin portal.
 * It provides administrators with a view to manage and approve/reject new employee submissions.
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
import { Button } from "@/components/ui/button";
import { Check, X, Eye } from "lucide-react";
import { getPendingEmployeeApprovals } from "@/lib/data";
import { approveEmployee, rejectEmployee } from './actions';
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


type PendingApproval = {
    id: string;
    employeeName: string;
    position: string | null;
    submittedBy: string;
    submissionDate: string;
};

/**
 * Renders the admin pending approvals page.
 * @returns {JSX.Element} The pending approvals page component.
 */
export default function PendingApprovalsPage() {
    const { toast } = useToast();
    const [pendingApprovals, setPendingApprovals] = React.useState<PendingApproval[]>([]);

    React.useEffect(() => {
              document.title = "Admin Account Approval";
              }, []);

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getPendingEmployeeApprovals();
            setPendingApprovals(data);
        };
        fetchData();
    }, []);

    const handleApprove = async (id: string) => {
        const result = await approveEmployee(id);
        if (result?.success) {
            toast({
                title: 'Success',
                description: 'Employee has been approved.',
            });
            setPendingApprovals(prev => prev.filter(req => req.id !== id));
        } else {
             toast({
                variant: "destructive",
                title: 'Error',
                description: result?.message || 'Failed to approve employee.',
            });
        }
    };

    const handleReject = async (id: string) => {
        const result = await rejectEmployee(id);
        if (result?.success) {
            toast({
                title: 'Success',
                description: 'Employee has been rejected.',
            });
            setPendingApprovals(prev => prev.filter(req => req.id !== id));
        } else {
             toast({
                variant: "destructive",
                title: 'Error',
                description: result?.message || 'Failed to reject employee.',
            });
        }
    };


    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">Pending Employee Approvals</h1>

            {/* Pending Approvals Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Incoming Employee Submissions</CardTitle>
                    <CardDescription>Review and act on new employee profiles submitted by HR.</CardDescription>
                </CardHeader>
                <CardContent>
                    {pendingApprovals.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Submitted By</TableHead>
                                    <TableHead>Employee Name</TableHead>
                                    <TableHead>Position</TableHead>
                                    <TableHead>Submission Date</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {pendingApprovals.map((req) => (
                                    <TableRow key={req.id}>
                                        <TableCell>
                                            <div className="font-medium">{req.submittedBy}</div>
                                        </TableCell>
                                        <TableCell>{req.employeeName}</TableCell>
                                        <TableCell>{req.position}</TableCell>
                                        <TableCell>{req.submissionDate}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex gap-2 justify-end">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button variant="outline" size="sm">
                                                            <Eye className="mr-2 h-4 w-4" /> View Details
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            <DialogTitle>Pending Approval: {req.employeeName}</DialogTitle>
                                                            <DialogDescription>
                                                                Review the details of this new employee submission.
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <div className="space-y-2 text-sm">
                                                            <p><strong>Submitted By:</strong> {req.submittedBy}</p>
                                                            <p><strong>Position:</strong> {req.position}</p>
                                                            <p><strong>Submission Date:</strong> {req.submissionDate}</p>
                                                        </div>
                                                        <DialogFooter>
                                                            <DialogClose asChild>
                                                                <Button variant="outline">Close</Button>
                                                            </DialogClose>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-100 hover:text-green-700">
                                                            <Check className="h-4 w-4" /> Approve
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action will approve the new employee and create their profile.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction onClick={() => handleApprove(req.id)}>Approve</AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-100 hover:text-red-700">
                                                            <X className="h-4 w-4" /> Reject
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action will reject the new employee submission. This cannot be undone.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction onClick={() => handleReject(req.id)}>Reject</AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <p className="text-muted-foreground text-center">No pending employee approvals.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
