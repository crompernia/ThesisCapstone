/**
 * @fileoverview This file defines the Branches page for the HR portal.
 * It allows HR personnel to view, add, and delete company branches.
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
import { Check, X, Edit, Search, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getBranches } from "@/lib/data";
import { createBranchAction, updateBranchAction, deleteBranchAction } from './actions';
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
 * Renders the HR branches management page.
 * @returns {JSX.Element} The branches page component.
 */
export default function BranchesPage() {
    React.useEffect(() => {
                    document.title = "HR Branches";
                    }, []);
    const { toast } = useToast();
    const [branches, setBranches] = React.useState<{ id: number; name: string; coordinates: string | null }[]>([]);
    const [totalCount, setTotalCount] = React.useState(0);
    const [totalPages, setTotalPages] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchSuggestions, setSearchSuggestions] = React.useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = React.useState(false);
    const [newBranchName, setNewBranchName] = React.useState('');
    const [newBranchCoordinates, setNewBranchCoordinates] = React.useState('');
    const [isAdding, setIsAdding] = React.useState(false);
    const [deletingId, setDeletingId] = React.useState<number | null>(null);
    const [editingId, setEditingId] = React.useState<number | null>(null);
    const [editingName, setEditingName] = React.useState('');
    const [editingCoordinates, setEditingCoordinates] = React.useState('');

    const fetchBranches = React.useCallback(async (search?: string, page: number = 1) => {
        const data = await getBranches(search, page);
        setBranches(data.branches);
        setTotalCount(data.totalCount);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
    }, []);

    React.useEffect(() => {
        fetchBranches();
    }, [fetchBranches]);

    // Close suggestions when clicking outside
    React.useEffect(() => {
        const handleClickOutside = () => {
            setShowSuggestions(false);
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleAddBranch = async () => {
        if (!newBranchName.trim() || !newBranchCoordinates.trim()) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Branch name and coordinates cannot be empty.',
            });
            return;
        }
        setIsAdding(true);
        try {
            const result = await createBranchAction(newBranchName, newBranchCoordinates);
            if (result.success) {
                toast({
                    title: 'Success',
                    description: 'New branch has been added.',
                });
                setNewBranchName('');
                setNewBranchCoordinates('');
                fetchBranches();
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result.message || 'Failed to add branch.',
                });
            }
        } finally {
            setIsAdding(false);
        }
    };

    const handleDeleteBranch = async (id: number) => {
        setDeletingId(id);
        try {
            const result = await deleteBranchAction(id);
            if (result.success) {
                toast({
                    title: 'Success',
                    description: 'Branch has been deleted.',
                });
                fetchBranches();
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result.message || 'Failed to delete branch.',
                });
            }
        } finally {
            setDeletingId(null);
        }
    };

    const handleEditBranch = (branch: { id: number; name: string; coordinates: string | null }) => {
        setEditingId(branch.id);
        setEditingName(branch.name);
        setEditingCoordinates(branch.coordinates || '');
    };

    const handleSaveEdit = async () => {
        if (!editingId) return;

        if (!editingName.trim() || !editingCoordinates.trim()) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Branch name and coordinates cannot be empty.',
            });
            return;
        }

        try {
            const result = await updateBranchAction(editingId, editingName, editingCoordinates);
            if (result.success) {
                toast({
                    title: 'Success',
                    description: 'Branch has been updated.',
                });
                fetchBranches();
                setEditingId(null);
                setEditingName('');
                setEditingCoordinates('');
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: result.message || 'Failed to update branch.',
                });
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Failed to update branch.',
            });
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditingName('');
        setEditingCoordinates('');
    };

    const handleSearchChange = async (value: string) => {
        setSearchQuery(value);
        if (value.trim()) {
            // Get search suggestions (all branch names that match)
            const allBranches = await getBranches(value, 1, 1000); // Get more results for suggestions
            const suggestions = allBranches.branches
                .filter(branch => branch.name.toLowerCase().includes(value.toLowerCase()))
                .map(branch => branch.name)
                .slice(0, 5); // Limit to 5 suggestions
            setSearchSuggestions(suggestions);
            setShowSuggestions(true);
        } else {
            setSearchSuggestions([]);
            setShowSuggestions(false);
            fetchBranches('', 1);
            setCurrentPage(1);
        }
    };

    const handleSearchSubmit = () => {
        fetchBranches(searchQuery, 1);
        setCurrentPage(1);
        setShowSuggestions(false);
    };

    const handleSuggestionSelect = (suggestion: string) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
        fetchBranches(suggestion, 1);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        fetchBranches(searchQuery, page);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">Manage Branches</h1>

            {/* Search Bar */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            placeholder="Search branches..."
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                            className="pl-10"
                        />
                        {showSuggestions && searchSuggestions.length > 0 && (
                            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 mt-1">
                                {searchSuggestions.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSuggestionSelect(suggestion)}
                                    >
                                        {suggestion}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <Button onClick={handleSearchSubmit} variant="outline">
                        Search
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Add Branch Form */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>Add New Branch</CardTitle>
                            <CardDescription>Create a new branch location.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="branch-name">Branch Name</Label>
                                <Input
                                    id="branch-name"
                                    placeholder="e.g., North Campus"
                                    value={newBranchName}
                                    onChange={(e) => setNewBranchName(e.target.value)}
                                />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="branch-coordinates">Coordinates</Label>
                                <Input
                                    id="branch-coordinates"
                                    placeholder="e.g., 14.5547, 121.0244"
                                    value={newBranchCoordinates}
                                    onChange={(e) => setNewBranchCoordinates(e.target.value)}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={handleAddBranch} disabled={isAdding}>
                                {isAdding ? "Adding..." : "Add Branch"}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* Branches Table */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Existing Branches</CardTitle>
                            <CardDescription>The list of all current company branches.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {branches.length > 0 ? (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Branch Name</TableHead>
                                            <TableHead>Coordinates</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {branches.map((branch) => (
                                            <TableRow key={branch.id}>
                                                <TableCell className="font-medium">
                                                    {editingId === branch.id ? (
                                                        <Input
                                                            value={editingName}
                                                            onChange={(e) => setEditingName(e.target.value)}
                                                            className="h-8"
                                                        />
                                                    ) : (
                                                        branch.name
                                                    )}
                                                </TableCell>
                                                <TableCell className="font-mono text-xs">
                                                    {editingId === branch.id ? (
                                                        <Input
                                                            value={editingCoordinates}
                                                            onChange={(e) => setEditingCoordinates(e.target.value)}
                                                            className="h-8"
                                                            placeholder="e.g., 14.5547, 121.0244"
                                                        />
                                                    ) : (
                                                        branch.coordinates
                                                    )}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {editingId === branch.id ? (
                                                        <div className="flex justify-end gap-1">
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={handleSaveEdit}
                                                                className="h-8 w-8 text-green-600"
                                                            >
                                                                <Check className="h-4 w-4" />
                                                            </Button>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={handleCancelEdit}
                                                                className="h-8 w-8 text-gray-600"
                                                            >
                                                                <X className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                    ) : (
                                                        <div className="flex justify-end gap-1">
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() => handleEditBranch(branch)}
                                                                className="h-8 w-8"
                                                            >
                                                                <Edit className="h-4 w-4" />
                                                            </Button>
                                                            <AlertDialog>
                                                                <AlertDialogTrigger asChild>
                                                                    <Button variant="ghost" size="icon" className="text-destructive h-8 w-8" disabled={deletingId === branch.id}>
                                                                        <Trash2 className="h-4 w-4" />
                                                                    </Button>
                                                                </AlertDialogTrigger>
                                                                <AlertDialogContent>
                                                                    <AlertDialogHeader>
                                                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                                        <AlertDialogDescription>
                                                                            This will permanently delete the branch. This action cannot be undone.
                                                                        </AlertDialogDescription>
                                                                    </AlertDialogHeader>
                                                                    <AlertDialogFooter>
                                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                        <AlertDialogAction onClick={() => handleDeleteBranch(branch.id)}>Delete</AlertDialogAction>
                                                                    </AlertDialogFooter>
                                                                </AlertDialogContent>
                                                            </AlertDialog>
                                                        </div>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            ) : (
                                <p className="text-muted-foreground text-center">No branches found. Add one to get started.</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>

           {/* Pagination */}
           {totalPages > 1 && (
               <div className="flex items-center justify-between">
                   <div className="text-sm text-gray-600">
                       Showing {branches.length > 0 ? ((currentPage - 1) * 10) + 1 : 0} to {Math.min(currentPage * 10, totalCount)} of {totalCount} branches
                   </div>
                   <div className="flex items-center gap-2">
                       <Button
                           variant="outline"
                           size="sm"
                           onClick={() => handlePageChange(currentPage - 1)}
                           disabled={currentPage === 1}
                       >
                           <ChevronLeft className="h-4 w-4" />
                           Previous
                       </Button>

                       <div className="flex items-center gap-1">
                           {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                               const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                               if (pageNum > totalPages) return null;
                               return (
                                   <Button
                                       key={pageNum}
                                       variant={pageNum === currentPage ? "default" : "outline"}
                                       size="sm"
                                       onClick={() => handlePageChange(pageNum)}
                                       className="w-8 h-8 p-0"
                                   >
                                       {pageNum}
                                   </Button>
                               );
                           })}
                       </div>

                       <Button
                           variant="outline"
                           size="sm"
                           onClick={() => handlePageChange(currentPage + 1)}
                           disabled={currentPage === totalPages}
                       >
                           Next
                           <ChevronRight className="h-4 w-4" />
                       </Button>
                   </div>
               </div>
           )}
        </div>
    );
}
