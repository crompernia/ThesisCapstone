/**
 * @fileoverview This file defines the New Employees page for the Admin portal.
 * It provides administrators with a view to see new employee accounts created by HR.
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
import { Eye, Search } from "lucide-react";
import { getEmployees } from "@/lib/data";
import { format } from 'date-fns';
import { Input } from "@/components/ui/input";

// Create a custom function to get employees with hire dates
async function getEmployeesWithHireDates() {
    // This would need to be implemented in data.ts, but for now we'll use getEmployees
    // and assume the data includes dateHired
    const employees = await getEmployees();
    // For now, we'll add a mock dateHired field - in real implementation this would come from DB
    return employees.map(emp => ({
        ...emp,
        dateHired: new Date() // Mock date - replace with actual DB field
    }));
}
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


type EmployeeView = {
    id: string;
    employeeNumber: string;
    name: string;
    position: string;
    branch: string;
    status: string;
    dateHired: Date | null;
};

/**
 * Renders the admin pending approvals page.
 * @returns {JSX.Element} The pending approvals page component.
 */
export default function PendingApprovalsPage() {
    const { toast } = useToast();
    const [employees, setEmployees] = React.useState<EmployeeView[]>([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredEmployees, setFilteredEmployees] = React.useState<EmployeeView[]>([]);

    React.useEffect(() => {
               document.title = "New Employees";
               }, []);

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getEmployeesWithHireDates();
            // Sort by date hired (most recent first) and take latest 10
            const sortedData = data
                .filter(emp => emp.dateHired)
                .sort((a, b) => new Date(b.dateHired!).getTime() - new Date(a.dateHired!).getTime())
                .slice(0, 10);
            setEmployees(sortedData);
            setFilteredEmployees(sortedData);
        };
        fetchData();
    }, []);

    // Filter employees based on search term
    React.useEffect(() => {
        if (!searchTerm.trim()) {
            setFilteredEmployees(employees);
        } else {
            const filtered = employees.filter(employee =>
                employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.employeeNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                employee.branch.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredEmployees(filtered);
        }
    }, [searchTerm, employees]);



    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">New Employees</h1>

            {/* Search Bar */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                placeholder="Search by name, employee number, position, or branch..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <Button
                            variant="outline"
                            onClick={() => setSearchTerm('')}
                            disabled={!searchTerm}
                        >
                            Clear
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Employee Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Latest Employee Accounts</CardTitle>
                    <CardDescription>View the 10 most recently hired employees created by HR personnel.</CardDescription>
                </CardHeader>
                <CardContent>
                    {filteredEmployees.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Employee Number</TableHead>
                                    <TableHead>Employee Name</TableHead>
                                    <TableHead>Position</TableHead>
                                    <TableHead>Branch</TableHead>
                                    <TableHead>Date Hired</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredEmployees.map((employee) => (
                                    <TableRow key={employee.id}>
                                        <TableCell>
                                            <div className="font-medium">{employee.employeeNumber}</div>
                                        </TableCell>
                                        <TableCell>{employee.name}</TableCell>
                                        <TableCell>{employee.position}</TableCell>
                                        <TableCell>{employee.branch}</TableCell>
                                        <TableCell>
                                            {employee.dateHired ? format(new Date(employee.dateHired), 'MMM dd, yyyy') : 'N/A'}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline" size="sm">
                                                        <Eye className="mr-2 h-4 w-4" /> View Details
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Employee Details: {employee.name}</DialogTitle>
                                                        <DialogDescription>
                                                            Complete information for this employee.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="space-y-2 text-sm">
                                                        <p><strong>Employee Number:</strong> {employee.employeeNumber}</p>
                                                        <p><strong>Name:</strong> {employee.name}</p>
                                                        <p><strong>Position:</strong> {employee.position}</p>
                                                        <p><strong>Branch:</strong> {employee.branch}</p>
                                                        <p><strong>Date Hired:</strong> {employee.dateHired ? format(new Date(employee.dateHired), 'MMMM dd, yyyy') : 'N/A'}</p>
                                                    </div>
                                                    <DialogFooter>
                                                        <DialogClose asChild>
                                                            <Button variant="outline">Close</Button>
                                                        </DialogClose>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <p className="text-muted-foreground text-center">
                            {searchTerm ? 'No employees match your search.' : 'No employees found.'}
                        </p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
