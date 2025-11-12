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
import { Textarea } from "@/components/ui/textarea";

type LoanRequest = {
  id: number;
  amount: string;
  months: number;
  interestRate: string;
  totalAmount: string;
  status: string;
  requestedAt: string;
  approvedAt?: string;
  notes?: string;
  employeeId: string;
  employeeNumber: string | null;
  firstName: string;
  lastName: string;
  position: string | null;
  department: string | null;
  branch: string | null;
};

export default function LoanApprovalsPage() {
    React.useEffect(() => {
        document.title = "HR Loan Approvals";
    }, []);

    const { toast } = useToast();
    const [loanRequests, setLoanRequests] = React.useState<LoanRequest[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const fetchLoanRequests = React.useCallback(async () => {
        try {
            const response = await fetch('/api/hr/loans');
            if (response.ok) {
                const data = await response.json();
                setLoanRequests(data.loans || []);
            }
        } catch (error) {
            console.error('Error fetching loans:', error);
        }
    }, []);

    React.useEffect(() => {
        fetchLoanRequests();
    }, [fetchLoanRequests]);

    const handleUpdateRequest = async (requestId: number, status: string, notes?: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/loans/${requestId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status, notes }),
            });

            if (response.ok) {
                toast({
                    title: 'Success',
                    description: `Loan request has been ${status.toLowerCase()}.`,
                });
                fetchLoanRequests();
            } else {
                const error = await response.json();
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: error.error || `Failed to ${status.toLowerCase()} loan request.`,
                });
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: `Failed to ${status.toLowerCase()} loan request.`,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">Loan Request Approvals</h1>

            {/* Filtering Controls */}
            <Card>
                <CardHeader>
                    <CardTitle>Filter Requests</CardTitle>
                    <CardDescription>
                        Search for requests by employee, amount, or status.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                        <Input type="number" placeholder="Min Amount" />
                        <Input type="number" placeholder="Max Amount" />
                        <Button className="w-full">
                            <Search />
                            Search
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Loan Requests Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Incoming Requests</CardTitle>
                    <CardDescription>Review and act on new and existing loan requests.</CardDescription>
                </CardHeader>

                <CardContent>
                    {loanRequests.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Employee</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Months</TableHead>
                                    <TableHead>Total Amount</TableHead>
                                    <TableHead>Requested</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {loanRequests.map((req) => (
                                    <TableRow key={req.id}>
                                        <TableCell>
                                            <div className="font-medium">{req.firstName} {req.lastName}</div>
                                            <div className="text-xs text-muted-foreground font-mono">{req.employeeNumber}</div>
                                            <div className="text-xs text-muted-foreground">{req.position} - {req.department}</div>
                                        </TableCell>
                                        <TableCell>₱{parseFloat(req.amount).toLocaleString()}</TableCell>
                                        <TableCell>{req.months}</TableCell>
                                        <TableCell>₱{parseFloat(req.totalAmount).toLocaleString()}</TableCell>
                                        <TableCell>{new Date(req.requestedAt).toLocaleDateString()}</TableCell>
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
                                                            <DialogTitle>Loan Request Details</DialogTitle>
                                                            <DialogDescription>
                                                                From: {req.firstName} {req.lastName}
                                                            </DialogDescription>
                                                        </DialogHeader>

                                                        <div className="space-y-4 text-sm py-4">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div>
                                                                    <p><strong>Employee:</strong></p>
                                                                    <p>{req.firstName} {req.lastName}</p>
                                                                    <p className="text-xs text-muted-foreground">{req.employeeNumber}</p>
                                                                </div>
                                                                <div>
                                                                    <p><strong>Position:</strong></p>
                                                                    <p>{req.position}</p>
                                                                    <p className="text-xs text-muted-foreground">{req.department} - {req.branch}</p>
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div>
                                                                    <p><strong>Loan Amount:</strong></p>
                                                                    <p>₱{parseFloat(req.amount).toLocaleString()}</p>
                                                                </div>
                                                                <div>
                                                                    <p><strong>Repayment Period:</strong></p>
                                                                    <p>{req.months} months</p>
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div>
                                                                    <p><strong>Interest Rate:</strong></p>
                                                                    <p>{(parseFloat(req.interestRate) * 100).toFixed(1)}%</p>
                                                                </div>
                                                                <div>
                                                                    <p><strong>Total Amount:</strong></p>
                                                                    <p>₱{parseFloat(req.totalAmount).toLocaleString()}</p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p><strong>Monthly Payment:</strong></p>
                                                                <p>₱{(parseFloat(req.totalAmount) / req.months).toLocaleString()}</p>
                                                            </div>
                                                            <div>
                                                                <p><strong>Requested Date:</strong></p>
                                                                <p>{new Date(req.requestedAt).toLocaleString()}</p>
                                                            </div>
                                                            <div>
                                                                <p><strong>Status:</strong></p>
                                                                <p>{req.status}</p>
                                                            </div>
                                                            {req.notes && (
                                                                <div>
                                                                    <p><strong>Notes:</strong></p>
                                                                    <p className="p-2 bg-muted rounded-md">{req.notes}</p>
                                                                </div>
                                                            )}
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
                                                                                This will approve the loan request for ₱{parseFloat(req.totalAmount).toLocaleString()}.
                                                                            </AlertDialogDescription>
                                                                            <AlertDialogFooter>
                                                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                                <AlertDialogAction
                                                                                    onClick={() =>
                                                                                        handleUpdateRequest(req.id, 'Approved')
                                                                                    }
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
                                                                                This will reject the loan request.
                                                                            </AlertDialogDescription>
                                                                            <AlertDialogFooter>
                                                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                                <AlertDialogAction
                                                                                    onClick={() =>
                                                                                        handleUpdateRequest(req.id, 'Rejected')
                                                                                    }
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
                            No loan requests found matching your criteria.
                        </p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}