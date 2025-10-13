/**
 * @fileoverview This file defines the Branch Allocation page for the Admin portal.
 * It allows administrators to assign specific branches to HR personnel.
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getHrPersonnel, getBranches, updateHrBranchAllocation } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


/**
 * Renders the admin branch allocation page.
 * @returns {JSX.Element} The branch allocation page component.
 */
export default function BranchAllocationPage() {
    React.useEffect(() => {
                    document.title = "Admin Branch Allocation";
                    }, []);
    const { toast } = useToast();
    const [hrPersonnel, setHrPersonnel] = React.useState([]);
    const [branches, setBranches] = React.useState([]);
    const [selectedHr, setSelectedHr] = React.useState(null);
    const [selectedBranches, setSelectedBranches] = React.useState(new Set());

    const fetchData = React.useCallback(async () => {
        const hrData = await getHrPersonnel();
        const branchData = await getBranches();
        setHrPersonnel(hrData);
        setBranches(branchData);
    }, []);

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleManageClick = (hr) => {
        setSelectedHr(hr);
        setSelectedBranches(new Set(hr.managed_branches || []));
    };

    const handleBranchChange = (branchName, isChecked) => {
        setSelectedBranches(prev => {
            const newSet = new Set(prev);
            if (isChecked) {
                newSet.add(branchName);
            } else {
                newSet.delete(branchName);
            }
            return newSet;
        });
    };

    const handleSaveAllocation = async () => {
        if (!selectedHr) return;
        const result = await updateHrBranchAllocation(selectedHr.id, Array.from(selectedBranches));
        if (result.success) {
            toast({
                title: 'Success',
                description: `Branch allocation for ${selectedHr.name} has been updated.`,
            });
            fetchData(); // Refresh data
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.message || 'Failed to update branch allocation.',
            });
        }
    };
    
    // Determine which branches are already assigned to other HR personnel
    const assignedBranchesByOthers = React.useMemo(() => {
        const assignedSet = new Set();
        hrPersonnel.forEach(hr => {
            if (hr.id !== selectedHr?.id) {
                hr.managed_branches?.forEach(branch => assignedSet.add(branch));
            }
        });
        return assignedSet;
    }, [hrPersonnel, selectedHr]);


    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">HR Branch Allocation</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Manage HR Personnel Branches</CardTitle>
                    <CardDescription>Assign the branches that each HR personnel is responsible for. A branch cannot be assigned to more than one HR person.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>HR Personnel</TableHead>
                                <TableHead>Assigned Branches</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {hrPersonnel.map((hr) => (
                                <TableRow key={hr.id}>
                                    <TableCell>
                                        <div className="font-medium">{hr.name}</div>
                                        <div className="text-xs text-muted-foreground">{hr.position}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap gap-2">
                                            {hr.managed_branches?.length > 0 ? (
                                                hr.managed_branches.map(branch => (
                                                    <Badge key={branch} variant="secondary">{branch}</Badge>
                                                ))
                                            ) : (
                                                <span className="text-muted-foreground text-sm">No branches assigned</span>
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedHr(null)}>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" size="sm" onClick={() => handleManageClick(hr)}>
                                                    Manage
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Allocate Branches for {selectedHr?.name}</DialogTitle>
                                                    <DialogDescription>
                                                        Select the branches this HR person will manage. Unavailable branches are already assigned.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="py-4 space-y-4">
                                                    <TooltipProvider>
                                                        {branches.map(branch => {
                                                            const isAssignedToOther = assignedBranchesByOthers.has(branch.name);
                                                            const isChecked = selectedBranches.has(branch.name);
                                                            
                                                            const checkbox = (
                                                                 <div key={branch.id} className="flex items-center space-x-2">
                                                                    <Checkbox
                                                                        id={`branch-${branch.id}`}
                                                                        checked={isChecked}
                                                                        disabled={isAssignedToOther}
                                                                        onCheckedChange={(checked) => handleBranchChange(branch.name, checked)}
                                                                    />
                                                                    <Label htmlFor={`branch-${branch.id}`} className={isAssignedToOther ? 'text-muted-foreground cursor-not-allowed' : ''}>{branch.name}</Label>
                                                                </div>
                                                            );

                                                            if (isAssignedToOther) {
                                                                return (
                                                                    <Tooltip key={branch.id}>
                                                                        <TooltipTrigger asChild>
                                                                            <span>{checkbox}</span>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>
                                                                            <p>This branch is already managed by another HR person.</p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                )
                                                            }
                                                            return checkbox;
                                                        })}
                                                    </TooltipProvider>
                                                </div>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="outline">Cancel</Button>
                                                    </DialogClose>
                                                    <DialogClose asChild>
                                                      <Button onClick={handleSaveAllocation}>Save Changes</Button>
                                                    </DialogClose>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
