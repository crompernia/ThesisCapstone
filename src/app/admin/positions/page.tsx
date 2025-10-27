/**
 * @fileoverview This file defines the Positions & Rates page for the Admin portal.
 * It allows administrators to view, add, and delete job positions and their hourly rates.
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Trash2, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getPositions, getBranches, getAllDepartments, getPositionDepartments } from "@/lib/data";
import { createPositionAction, deletePositionAction, createDepartmentAction, allocatePositionAction, removeAllocationAction } from './actions';
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

/**
 * Renders the admin positions and rates management page.
 * @returns {JSX.Element} The positions page component.
 */
export default function PositionsPage() {
    React.useEffect(() => {
                    document.title = "Admin Positions & Rates";
                    }, []);
    const { toast } = useToast();
    const [positions, setPositions] = React.useState<any[]>([]);
    const [branches, setBranches] = React.useState<any[]>([]);
    const [departments, setDepartments] = React.useState<any[]>([]);
    const [positionDepartments, setPositionDepartments] = React.useState<any[]>([]);
    const [newPositionTitle, setNewPositionTitle] = React.useState('');
    const [newPositionRate, setNewPositionRate] = React.useState('');
    const [newDepartmentName, setNewDepartmentName] = React.useState('');
    const [selectedBranchForDept, setSelectedBranchForDept] = React.useState('');
    const [selectedPositionForAlloc, setSelectedPositionForAlloc] = React.useState('');
    const [selectedDepartmentForAlloc, setSelectedDepartmentForAlloc] = React.useState('');
    const [minimumWage, setMinimumWage] = React.useState(25.00); // Default minimum wage
    const [tempMinWage, setTempMinWage] = React.useState(String(minimumWage));

    const fetchPositions = React.useCallback(async () => {
        const data = await getPositions();
        setPositions(data);
    }, []);

    const fetchBranches = React.useCallback(async () => {
        const data = await getBranches();
        setBranches(data);
    }, []);

    const fetchDepartments = React.useCallback(async () => {
        const data = await getAllDepartments();
        setDepartments(data);
    }, []);

    const fetchPositionDepartments = React.useCallback(async () => {
        const data = await getPositionDepartments();
        setPositionDepartments(data);
    }, []);

    React.useEffect(() => {
        fetchPositions();
        fetchBranches();
        fetchDepartments();
        fetchPositionDepartments();
    }, [fetchPositions, fetchBranches, fetchDepartments, fetchPositionDepartments]);

    const handleSetMinimumWage = () => {
        const newMinWage = parseFloat(tempMinWage);
        if (isNaN(newMinWage) || newMinWage <= 0) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Please enter a valid positive number for the minimum wage.',
            });
            return;
        }
        setMinimumWage(newMinWage);
        toast({
            title: 'Success',
            description: `Minimum wage has been updated to ${formatCurrency(newMinWage)}.`,
        });
    };

    const handleAddPosition = async () => {
        if (!newPositionTitle.trim() || !newPositionRate.trim()) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Position title and rate cannot be empty.',
            });
            return;
        }

        const rateNumber = parseFloat(newPositionRate);
        if (rateNumber < minimumWage) {
            toast({
                variant: 'destructive',
                title: 'Validation Error',
                description: `The hourly rate cannot be less than the minimum wage of ${formatCurrency(minimumWage)}.`,
            });
            return;
        }

        const result = await createPositionAction(newPositionTitle, newPositionRate);
        if (result.success) {
            toast({
                title: 'Success',
                description: 'New position has been added.',
            });
            setNewPositionTitle('');
            setNewPositionRate('');
            fetchPositions();
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.message || 'Failed to add position.',
            });
        }
    };

    const handleAddDepartment = async () => {
        if (!newDepartmentName.trim() || !selectedBranchForDept) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Department name and branch must be selected.',
            });
            return;
        }

        const branchId = parseInt(selectedBranchForDept);
        const result = await createDepartmentAction(newDepartmentName, branchId);
        if (result.success) {
            toast({
                title: 'Success',
                description: 'New department has been added.',
            });
            setNewDepartmentName('');
            setSelectedBranchForDept('');
            fetchDepartments();
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.message || 'Failed to add department.',
            });
        }
    };

    const handleAllocatePosition = async () => {
        if (!selectedPositionForAlloc || !selectedDepartmentForAlloc) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Position and department must be selected.',
            });
            return;
        }

        const positionId = parseInt(selectedPositionForAlloc);
        const departmentId = parseInt(selectedDepartmentForAlloc);
        const result = await allocatePositionAction(positionId, departmentId);
        if (result.success) {
            toast({
                title: 'Success',
                description: 'Position has been allocated to department.',
            });
            setSelectedPositionForAlloc('');
            setSelectedDepartmentForAlloc('');
            fetchPositionDepartments();
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.message || 'Failed to allocate position.',
            });
        }
    };

    const handleRemoveAllocation = async (allocationId: number) => {
        const result = await removeAllocationAction(allocationId);
        if (result.success) {
            toast({
                title: 'Success',
                description: 'Position allocation has been removed.',
            });
            fetchPositionDepartments();
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.message || 'Failed to remove allocation.',
            });
        }
    };

    const handleDeletePosition = async (id: number) => {
        const result = await deletePositionAction(id);
        if (result.success) {
            toast({
                title: 'Success',
                description: 'Position has been deleted.',
            });
            fetchPositions();
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.message || 'Failed to delete position.',
            });
        }
    };
    
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-PH', {
            style: 'currency',
            currency: 'PHP',
        }).format(value);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">Manage Positions & Rates</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    {/* Minimum Wage Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><ShieldCheck /> Minimum Wage Setting</CardTitle>
                            <CardDescription>Set the company-wide minimum hourly rate.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                             <Label htmlFor="minimum-wage">Minimum Rate (₱)</Label>
                             <Input
                                id="minimum-wage"
                                type="number"
                                placeholder="e.g., 25.00"
                                value={tempMinWage}
                                onChange={(e) => setTempMinWage(e.target.value)}
                            />
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={handleSetMinimumWage}>Set Minimum Wage</Button>
                        </CardFooter>
                    </Card>

                    {/* Add Position Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Add New Position</CardTitle>
                            <CardDescription>Create a new job position and set its hourly rate.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="position-title">Position Title</Label>
                                <Input
                                    id="position-title"
                                    placeholder="e.g., Senior Software Engineer"
                                    value={newPositionTitle}
                                    onChange={(e) => setNewPositionTitle(e.target.value)}
                                />
                            </div>
                              <div className="space-y-2">
                                <Label htmlFor="position-rate">Hourly Rate (₱)</Label>
                                <Input
                                    id="position-rate"
                                    type="number"
                                    placeholder="e.g., 55.50"
                                    value={newPositionRate}
                                    onChange={(e) => setNewPositionRate(e.target.value)}
                                />
                                <p className="text-xs text-muted-foreground">Must be at least {formatCurrency(minimumWage)}.</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={handleAddPosition}>Add Position</Button>
                        </CardFooter>
                    </Card>

                    {/* Add Department Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Add New Department</CardTitle>
                            <CardDescription>Create a new department for a specific branch.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="department-name">Department Name</Label>
                                <Input
                                    id="department-name"
                                    placeholder="e.g., IT Department"
                                    value={newDepartmentName}
                                    onChange={(e) => setNewDepartmentName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="department-branch">Branch</Label>
                                <Select value={selectedBranchForDept} onValueChange={setSelectedBranchForDept}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a branch" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {branches.map((branch) => (
                                            <SelectItem key={branch.id} value={String(branch.id)}>
                                                {branch.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={handleAddDepartment}>Add Department</Button>
                        </CardFooter>
                    </Card>

                    {/* Allocate Position to Department Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Allocate Position to Department</CardTitle>
                            <CardDescription>Assign positions to specific departments within branches.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="alloc-position">Position</Label>
                                <Select value={selectedPositionForAlloc} onValueChange={setSelectedPositionForAlloc}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a position" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {positions.map((pos) => (
                                            <SelectItem key={pos.id} value={String(pos.id)}>
                                                {pos.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="alloc-department">Department</Label>
                                <Select value={selectedDepartmentForAlloc} onValueChange={setSelectedDepartmentForAlloc}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {departments.length > 0 ? (
                                            departments.map((dept) => (
                                                <SelectItem key={dept.id} value={String(dept.id)}>
                                                    {dept.name} ({dept.branch_name})
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <SelectItem value="no-departments" disabled>
                                                No departments available
                                            </SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={handleAllocatePosition}>Allocate Position</Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* Positions and Allocations Tables */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Positions Table */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Existing Positions</CardTitle>
                            <CardDescription>The list of all current job positions and their rates.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {positions.length > 0 ? (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Position Title</TableHead>
                                            <TableHead>Hourly Rate</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {positions.map((pos) => (
                                            <TableRow key={pos.id}>
                                                <TableCell className="font-medium">{pos.title}</TableCell>
                                                <TableCell>{formatCurrency(pos.rate)}</TableCell>
                                                <TableCell className="text-right">
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            <Button variant="ghost" size="icon" className="text-destructive">
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                <AlertDialogDescription>
                                                                    This will permanently delete the position. This action cannot be undone.
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                <AlertDialogAction onClick={() => handleDeletePosition(pos.id)}>Delete</AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            ) : (
                                <p className="text-muted-foreground text-center">No positions found. Add one to get started.</p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Position-Department Allocations Table */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Position-Department Allocations</CardTitle>
                            <CardDescription>Current allocations of positions to departments within branches.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {positionDepartments.length > 0 ? (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Position</TableHead>
                                            <TableHead>Department</TableHead>
                                            <TableHead>Branch</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {positionDepartments.map((alloc) => (
                                            <TableRow key={alloc.id}>
                                                <TableCell className="font-medium">{alloc.positionTitle}</TableCell>
                                                <TableCell>{alloc.departmentName}</TableCell>
                                                <TableCell>{alloc.branchName}</TableCell>
                                                <TableCell className="text-right">
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            <Button variant="ghost" size="icon" className="text-destructive">
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                <AlertDialogDescription>
                                                                    This will remove the position allocation from this department. This action cannot be undone.
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                <AlertDialogAction onClick={() => handleRemoveAllocation(alloc.id)}>Remove Allocation</AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            ) : (
                                <p className="text-muted-foreground text-center">No allocations found. Allocate positions to departments to get started.</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

