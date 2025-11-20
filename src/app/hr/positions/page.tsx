/**
 * @fileoverview This file defines the Positions & Rates page for the HR portal.
 * It allows HR personnel to view, add, and delete job positions and their hourly rates.
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
import { Trash2, ShieldCheck, Edit, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getPositions, getAllBranches, getAllDepartments, getPositionDepartments } from "@/lib/data";
import { createPositionAction, deletePositionAction, updatePositionAction, createDepartmentAction, allocatePositionAction, updateAllocationAction, removeAllocationAction } from './actions';
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

/**
 * Renders the HR positions and rates management page.
 * @returns {JSX.Element} The positions page component.
 */
export default function PositionsPage() {
    React.useEffect(() => {
                    document.title = "HR Positions & Rates";
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
    const [addingPosition, setAddingPosition] = React.useState(false);
    const [addingDepartment, setAddingDepartment] = React.useState(false);
    const [allocatingPosition, setAllocatingPosition] = React.useState(false);
    const [deletingPosition, setDeletingPosition] = React.useState(false);
    const [removingAllocation, setRemovingAllocation] = React.useState(false);
    const [editingPosition, setEditingPosition] = React.useState<any>(null);
    const [editPositionTitle, setEditPositionTitle] = React.useState('');
    const [editPositionRate, setEditPositionRate] = React.useState('');
    const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredPositions, setFilteredPositions] = React.useState<any[]>([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [itemsPerPage] = React.useState(10);
    const [editingAllocation, setEditingAllocation] = React.useState<any>(null);
    const [editAllocPositionId, setEditAllocPositionId] = React.useState('');
    const [editAllocDepartmentId, setEditAllocDepartmentId] = React.useState('');
    const [isEditAllocDialogOpen, setIsEditAllocDialogOpen] = React.useState(false);
    const [allocSearchQuery, setAllocSearchQuery] = React.useState('');
    const [filteredAllocations, setFilteredAllocations] = React.useState<any[]>([]);
    const [allocCurrentPage, setAllocCurrentPage] = React.useState(1);
    const [allocItemsPerPage] = React.useState(10);

    const fetchPositions = React.useCallback(async () => {
        const data = await getPositions();
        setPositions(data);
    }, []);

    const fetchBranches = React.useCallback(async () => {
        const data = await getAllBranches();
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

    // Filter positions based on search query
    React.useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredPositions(positions);
        } else {
            const filtered = positions.filter(pos =>
                pos.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPositions(filtered);
        }
        setCurrentPage(1); // Reset to first page when search changes
    }, [positions, searchQuery]);

    const handleEditPosition = (position: any) => {
        setEditingPosition(position);
        setEditPositionTitle(position.title);
        setEditPositionRate(position.rate);
        setIsEditDialogOpen(true);
    };

    const handleUpdatePosition = async () => {
        if (!editingPosition || !editPositionTitle.trim() || !editPositionRate.trim()) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Position title and rate cannot be empty.',
            });
            return;
        }

        const rateNumber = parseFloat(editPositionRate);
        if (rateNumber < minimumWage) {
            toast({
                variant: 'destructive',
                title: 'Validation Error',
                description: `The hourly rate cannot be less than the minimum wage of ${formatCurrency(minimumWage)}.`,
            });
            return;
        }

        setEditingPosition(true);
        try {
            const result = await updatePositionAction(editingPosition.id, editPositionTitle, editPositionRate);
            if (result.success) {
                toast({
                    title: 'Success',
                    description: 'Position has been updated.',
                });
                setIsEditDialogOpen(false);
                setEditingPosition(null);
                fetchPositions();
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result.message || 'Failed to update position.',
                });
            }
        } finally {
            setEditingPosition(false);
        }
    };

    // Filter allocations based on search query
    React.useEffect(() => {
        if (allocSearchQuery.trim() === '') {
            setFilteredAllocations(positionDepartments);
        } else {
            const filtered = positionDepartments.filter(alloc =>
                alloc.positionTitle.toLowerCase().includes(allocSearchQuery.toLowerCase()) ||
                alloc.departmentName.toLowerCase().includes(allocSearchQuery.toLowerCase()) ||
                alloc.branchName.toLowerCase().includes(allocSearchQuery.toLowerCase())
            );
            setFilteredAllocations(filtered);
        }
        setAllocCurrentPage(1); // Reset to first page when search changes
    }, [positionDepartments, allocSearchQuery]);

    const handleEditAllocation = (allocation: any) => {
        setEditingAllocation(allocation);
        setEditAllocPositionId(String(allocation.positionId));
        setEditAllocDepartmentId(String(allocation.departmentId));
        setIsEditAllocDialogOpen(true);
    };

    const handleUpdateAllocation = async () => {
        if (!editingAllocation || !editAllocPositionId || !editAllocDepartmentId) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Position and department must be selected.',
            });
            return;
        }

        setEditingAllocation(true);
        try {
            const result = await updateAllocationAction(editingAllocation.id, parseInt(editAllocPositionId), parseInt(editAllocDepartmentId));
            if (result.success) {
                toast({
                    title: 'Success',
                    description: 'Allocation has been updated.',
                });
                setIsEditAllocDialogOpen(false);
                setEditingAllocation(null);
                fetchPositionDepartments();
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result.message || 'Failed to update allocation.',
                });
            }
        } finally {
            setEditingAllocation(false);
        }
    };

    // Pagination logic for positions
    const totalPages = Math.ceil(filteredPositions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPositions = filteredPositions.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    // Pagination logic for allocations
    const allocTotalPages = Math.ceil(filteredAllocations.length / allocItemsPerPage);
    const allocStartIndex = (allocCurrentPage - 1) * allocItemsPerPage;
    const allocEndIndex = allocStartIndex + allocItemsPerPage;
    const currentAllocations = filteredAllocations.slice(allocStartIndex, allocEndIndex);

    const goToAllocPage = (page: number) => {
        setAllocCurrentPage(Math.max(1, Math.min(page, allocTotalPages)));
    };

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

        setAddingPosition(true);
        try {
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
        } finally {
            setAddingPosition(false);
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

        setAddingDepartment(true);
        try {
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
        } finally {
            setAddingDepartment(false);
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

        setAllocatingPosition(true);
        try {
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
        } finally {
            setAllocatingPosition(false);
        }
    };

    const handleRemoveAllocation = async (allocationId: number) => {
        setRemovingAllocation(true);
        try {
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
        } finally {
            setRemovingAllocation(false);
        }
    };

    const handleDeletePosition = async (id: number) => {
        setDeletingPosition(true);
        try {
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
        } finally {
            setDeletingPosition(false);
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
                            <Button className="w-full" onClick={handleAddPosition} loading={addingPosition}>Add Position</Button>
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
                            <Button className="w-full" onClick={handleAddDepartment} loading={addingDepartment}>Add Department</Button>
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
                            <Button className="w-full" onClick={handleAllocatePosition} loading={allocatingPosition}>Allocate Position</Button>
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
                            {/* Search Bar */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="Search positions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                                {searchQuery && filteredPositions.length > 0 && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
                                        {filteredPositions.slice(0, 5).map((pos) => (
                                            <div
                                                key={pos.id}
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => setSearchQuery(pos.title)}
                                            >
                                                {pos.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            {filteredPositions.length > 0 ? (
                                <>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Position Title</TableHead>
                                                <TableHead>Hourly Rate</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {currentPositions.map((pos) => (
                                                <TableRow key={pos.id}>
                                                    <TableCell className="font-medium">{pos.title}</TableCell>
                                                    <TableCell>{formatCurrency(pos.rate)}</TableCell>
                                                    <TableCell className="text-right">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => handleEditPosition(pos)}
                                                            className="text-blue-600 hover:text-blue-800"
                                                        >
                                                            <Edit className="h-4 w-4" />
                                                        </Button>
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
                                                                    <AlertDialogAction onClick={() => handleDeletePosition(pos.id)} loading={deletingPosition}>Delete</AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    {/* Pagination */}
                                    {totalPages > 1 && (
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="text-sm text-muted-foreground">
                                                Showing {startIndex + 1} to {Math.min(endIndex, filteredPositions.length)} of {filteredPositions.length} positions
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => goToPage(currentPage - 1)}
                                                    disabled={currentPage === 1}
                                                >
                                                    <ChevronLeft className="h-4 w-4" />
                                                    Previous
                                                </Button>
                                                <span className="text-sm">
                                                    Page {currentPage} of {totalPages}
                                                </span>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => goToPage(currentPage + 1)}
                                                    disabled={currentPage === totalPages}
                                                >
                                                    Next
                                                    <ChevronRight className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <p className="text-muted-foreground text-center">
                                    {searchQuery ? 'No positions found matching your search.' : 'No positions found. Add one to get started.'}
                                </p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Position-Department Allocations Table */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Position-Department Allocations</CardTitle>
                            <CardDescription>Current allocations of positions to departments within branches.</CardDescription>
                            {/* Search Bar for Allocations */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="Search allocations..."
                                    value={allocSearchQuery}
                                    onChange={(e) => setAllocSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                                {allocSearchQuery && filteredAllocations.length > 0 && (
                                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
                                        {filteredAllocations.slice(0, 5).map((alloc) => (
                                            <div
                                                key={alloc.id}
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => setAllocSearchQuery(`${alloc.positionTitle} - ${alloc.departmentName}`)}
                                            >
                                                {alloc.positionTitle} - {alloc.departmentName} ({alloc.branchName})
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            {filteredAllocations.length > 0 ? (
                                <>
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
                                            {currentAllocations.map((alloc) => (
                                                <TableRow key={alloc.id}>
                                                    <TableCell className="font-medium">{alloc.positionTitle}</TableCell>
                                                    <TableCell>{alloc.departmentName}</TableCell>
                                                    <TableCell>{alloc.branchName}</TableCell>
                                                    <TableCell className="text-right">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => handleEditAllocation(alloc)}
                                                            className="text-blue-600 hover:text-blue-800"
                                                        >
                                                            <Edit className="h-4 w-4" />
                                                        </Button>
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
                                                                    <AlertDialogAction onClick={() => handleRemoveAllocation(alloc.id)} loading={removingAllocation}>Remove Allocation</AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    {/* Pagination for Allocations */}
                                    {allocTotalPages > 1 && (
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="text-sm text-muted-foreground">
                                                Showing {allocStartIndex + 1} to {Math.min(allocEndIndex, filteredAllocations.length)} of {filteredAllocations.length} allocations
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => goToAllocPage(allocCurrentPage - 1)}
                                                    disabled={allocCurrentPage === 1}
                                                >
                                                    <ChevronLeft className="h-4 w-4" />
                                                    Previous
                                                </Button>
                                                <span className="text-sm">
                                                    Page {allocCurrentPage} of {allocTotalPages}
                                                </span>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => goToAllocPage(allocCurrentPage + 1)}
                                                    disabled={allocCurrentPage === allocTotalPages}
                                                >
                                                    Next
                                                    <ChevronRight className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <p className="text-muted-foreground text-center">
                                    {allocSearchQuery ? 'No allocations found matching your search.' : 'No allocations found. Allocate positions to departments to get started.'}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Edit Position Dialog */}
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Position</DialogTitle>
                        <DialogDescription>
                            Update the position title and hourly rate.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="edit-position-title">Position Title</Label>
                            <Input
                                id="edit-position-title"
                                placeholder="e.g., Senior Software Engineer"
                                value={editPositionTitle}
                                onChange={(e) => setEditPositionTitle(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="edit-position-rate">Hourly Rate (₱)</Label>
                            <Input
                                id="edit-position-rate"
                                type="number"
                                placeholder="e.g., 55.50"
                                value={editPositionRate}
                                onChange={(e) => setEditPositionRate(e.target.value)}
                            />
                            <p className="text-xs text-muted-foreground">Must be at least {formatCurrency(minimumWage)}.</p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleUpdatePosition} loading={editingPosition}>
                            Update Position
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Edit Allocation Dialog */}
            <Dialog open={isEditAllocDialogOpen} onOpenChange={setIsEditAllocDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Allocation</DialogTitle>
                        <DialogDescription>
                            Update the position and department allocation.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="edit-alloc-position">Position</Label>
                            <Select value={editAllocPositionId} onValueChange={setEditAllocPositionId}>
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
                            <Label htmlFor="edit-alloc-department">Department</Label>
                            <Select value={editAllocDepartmentId} onValueChange={setEditAllocDepartmentId}>
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
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditAllocDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleUpdateAllocation} loading={editingAllocation}>
                            Update Allocation
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

