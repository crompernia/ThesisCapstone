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
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getBranches } from "@/lib/data";
import { createBranchAction, deleteBranchAction } from './actions';
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
    const [newBranchName, setNewBranchName] = React.useState('');
    const [newBranchCoordinates, setNewBranchCoordinates] = React.useState('');
    const [isAdding, setIsAdding] = React.useState(false);
    const [deletingId, setDeletingId] = React.useState<number | null>(null);

    const fetchBranches = React.useCallback(async () => {
        const data = await getBranches();
        setBranches(data);
    }, []);

    React.useEffect(() => {
        fetchBranches();
    }, [fetchBranches]);

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

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">Manage Branches</h1>

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
                                                <TableCell className="font-medium">{branch.name}</TableCell>
                                                <TableCell className="font-mono text-xs">{branch.coordinates}</TableCell>
                                                <TableCell className="text-right">
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            <Button variant="ghost" size="icon" className="text-destructive" disabled={deletingId === branch.id}>
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
        </div>
    );
}
