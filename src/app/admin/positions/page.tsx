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
import { Trash2, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getPositions } from "@/lib/data";
import { createPositionAction, deletePositionAction } from './actions';
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
    const [positions, setPositions] = React.useState([]);
    const [newPositionTitle, setNewPositionTitle] = React.useState('');
    const [newPositionRate, setNewPositionRate] = React.useState('');
    const [minimumWage, setMinimumWage] = React.useState(25.00); // Default minimum wage
    const [tempMinWage, setTempMinWage] = React.useState(String(minimumWage));

    const fetchPositions = React.useCallback(async () => {
        const data = await getPositions();
        setPositions(data);
    }, []);

    React.useEffect(() => {
        fetchPositions();
    }, [fetchPositions]);

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

    const handleDeletePosition = async (id) => {
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
    
    const formatCurrency = (value) => {
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
                </div>

                {/* Positions Table */}
                <div className="lg:col-span-2">
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
                </div>
            </div>
        </div>
    );
}
