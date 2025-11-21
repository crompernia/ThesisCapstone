/**
 * @fileoverview This file defines the Branch Allocation page for the HR portal.
 * It allows HR personnel to assign specific branches to other HR personnel.
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
import { getHrPersonnel, getAllBranches, updateHrBranchAllocation } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";


/**
 * Renders the admin branch allocation page.
 * @returns {JSX.Element} The branch allocation page component.
 */
export default function BranchAllocationPage() {
    React.useEffect(() => {
                    document.title = "HR Branch Allocation";
                    }, []);
    const { toast } = useToast();
    const [hrPersonnel, setHrPersonnel] = React.useState<{ id: string; name: string; position: string | null; managed_branches: string[] }[]>([]);
    const [branches, setBranches] = React.useState<{ id: number; name: string; coordinates: string | null }[]>([]);
    const [selectedHr, setSelectedHr] = React.useState<{ id: string; name: string; position: string | null; managed_branches: string[] } | null>(null);
    const [selectedBranches, setSelectedBranches] = React.useState(new Set());
    const [isSaving, setIsSaving] = React.useState(false);

    const fetchData = React.useCallback(async () => {
        const hrData = await getHrPersonnel();
        const branchData = await getAllBranches();
        setHrPersonnel(hrData);
        setBranches(branchData);
    }, []);

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleManageClick = (hr: { id: string; name: string; position: string | null; managed_branches: string[] }) => {
        setSelectedHr(hr);
        setSelectedBranches(new Set(hr.managed_branches || []));
    };

    const handleBranchChange = (branchName: string, isChecked: boolean) => {
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
        setIsSaving(true);
        try {
            const result = await updateHrBranchAllocation(selectedHr.id, Array.from(selectedBranches) as string[]);
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
                    description: (result as any).message || 'Failed to update branch allocation.',
                });
            }
        } finally {
            setIsSaving(false);
        }
    };
    


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
                                                    <Badge key={branch} variant="secondary" className="">{branch}</Badge>
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
                                                        Select the branches this HR person will manage. Only unassigned branches are shown.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="py-4 space-y-3">
                                                    {branches.filter(branch => !hrPersonnel.some(hr => hr.id !== selectedHr?.id && hr.managed_branches?.includes(branch.name))).map(branch => {
                                                        const isChecked = selectedBranches.has(branch.name);
                                                        
                                                        return (
                                                            <div key={branch.id} className="flex items-center space-x-2">
                                                                <Checkbox {...({checked: isChecked, onCheckedChange: (checked: boolean) => handleBranchChange(branch.name, checked)} as any)} />
                                                                <Label htmlFor={`branch-${branch.id}`}>{branch.name}</Label>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="outline">Cancel</Button>
                                                    </DialogClose>
                                                    <DialogClose asChild>
                                                      <Button onClick={handleSaveAllocation} disabled={isSaving}>
                                                        {isSaving ? "Saving..." : "Save Changes"}
                                                      </Button>
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
