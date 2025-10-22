/**
 * @fileoverview This file defines the page for editing an existing employee's profile.
 * It provides a form for HR personnel, pre-filled with the employee's details.
 */
'use client';

import * as React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowLeft, UserPlus, Save } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { getEmployeeById, getBranches, getDepartmentsForBranch, getPositionsForDepartment } from '@/lib/data';
import { updateEmployeeAction } from './actions';
import { Skeleton } from '@/components/ui/skeleton';

const employeeSchema = z.object({
    firstName: z.string().min(1, "First name is required."),
    lastName: z.string().min(1, "Last name is required."),
    middleName: z.string().optional(),
    gender: z.string().min(1, "Gender is required."),
    dob: z.string().min(1, "Date of birth is required."),
    branch: z.string().min(1, "Branch is required."),
    department: z.string().min(1, "Department is required."),
    position: z.string().min(1, "Position is required."),
    hireDate: z.string().min(1, "Date of hire is required."),
    email: z.string().email("Invalid email address."),
});

/**
 * Renders the form to edit an employee.
 * @returns {JSX.Element} The edit employee page component.
 */
type FormValues = {
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: string;
    dob: string;
    branch: string;
    department: string;
    position: string;
    hireDate: string;
    email: string;
}

type Branch = { id: number; name: string; coordinates?: string | null }

export default function EditEmployeePage({ params }: { params: { id: string } }) {
    const [photoPreview, setPhotoPreview] = React.useState<string | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [branches, setBranches] = React.useState<Branch[]>([]);
    const [departments, setDepartments] = React.useState<string[]>([]);
    const [positions, setPositions] = React.useState<string[]>([]);
  const router = useRouter();
  const { toast } = useToast();

    const form = useForm<FormValues>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
        firstName: '',
        lastName: '',
        middleName: '',
        gender: '',
        dob: '',
        branch: '',
        department: '',
        position: '',
        hireDate: '',
        email: '',
    }
  });

  const watchedBranch = useWatch({ control: form.control, name: 'branch' });
  const watchedDepartment = useWatch({ control: form.control, name: 'department' });

  React.useEffect(() => {
    const fetchInitialData = async () => {
        setIsLoading(true);
        try {
            const [employee, branchesData] = await Promise.all([
                getEmployeeById(params.id),
                getBranches()
            ]);
            
            if (employee) {
                // Set initial form values
                form.reset({
                    firstName: (employee as any).firstName ?? (employee as any).first_name ?? '',
                    lastName: (employee as any).lastName ?? (employee as any).last_name ?? '',
                    middleName: (employee as any).middleName ?? (employee as any).middle_name ?? '',
                    gender: (employee as any).gender ?? '',
                    dob: (employee as any).date_of_birth ?? (employee as any).dateOfBirth ?? '',
                    branch: (employee as any).branch ?? '',
                    department: (employee as any).department ?? '',
                    position: (employee as any).position ?? '',
                    hireDate: (employee as any).date_hired ?? (employee as any).dateHired ?? '',
                    email: (employee as any).email ?? '',
                });

                setPhotoPreview(`https://i.pravatar.cc/150?u=${(employee as any).email}`);
                setBranches(branchesData);

                // Fetch and set departments and positions based on initial employee data
                if ((employee as any).branch) {
                    const depts = await getDepartmentsForBranch((employee as any).branch);
                    setDepartments(depts || []);
                }
                if ((employee as any).department) {
                    const pos = await getPositionsForDepartment((employee as any).department);
                    setPositions(pos || []);
                }

            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: 'Failed to fetch employee data.',
                });
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'An error occurred while fetching data.',
            });
        }
        setIsLoading(false);
    };
    fetchInitialData();
  }, [params.id, form, toast]);

  React.useEffect(() => {
        const fetchDepartments = async () => {
        if (watchedBranch) {
            const depts = await getDepartmentsForBranch(watchedBranch);
            setDepartments(depts);
            form.setValue('department', ''); // Reset department on branch change
            setPositions([]); // Clear positions
            form.setValue('position', ''); // Reset position
        } else {
            setDepartments([]);
            setPositions([]);
        }
    };
    fetchDepartments();
  }, [watchedBranch, form]);

  React.useEffect(() => {
      const fetchPositions = async () => {
        if (watchedDepartment) {
            const pos = await getPositionsForDepartment(watchedDepartment);
            setPositions(pos);
            form.setValue('position', ''); // Reset position on department change
        } else {
            setPositions([]);
        }
    };
    fetchPositions();
  }, [watchedDepartment, form]);


    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(typeof reader.result === 'string' ? reader.result : null);
            };
      reader.readAsDataURL(file);
    }
  };

    const handleSubmit = async (values: FormValues) => {
        const result = await updateEmployeeAction(params.id, values as any);

    if (result.success) {
        toast({
            title: 'Success',
            description: 'Employee profile has been updated.',
        });
        router.push(`/hr/employee-data/${params.id}`);
    } else {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: result.message || 'Failed to update employee profile.',
        });
    }
  };

  if (isLoading) {
    return (
        <div className="space-y-6">
             <div>
                <Button asChild variant="outline" size="sm">
                <Link href="/hr/employee-data">
                    <ArrowLeft className="mr-2" />
                    Back to Employee List
                </Link>
                </Button>
            </div>
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                         <Skeleton className="h-24 w-24 rounded-full" />
                         <div className="space-y-2 flex-1">
                             <Skeleton className="h-6 w-1/4" />
                             <Skeleton className="h-10 w-full" />
                         </div>
                    </div>
                     <Skeleton className="h-10 w-full" />
                     <Skeleton className="h-10 w-full" />
                     <Skeleton className="h-10 w-full" />
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Skeleton className="h-10 w-24" />
                </CardFooter>
            </Card>
        </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <Button asChild variant="outline" size="sm">
          <Link href={`/hr/employee-data/${params.id}`}>
            <ArrowLeft className="mr-2" />
            Back to Profile
          </Link>
        </Button>
      </div>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                <UserPlus /> Edit Employee Profile
            </CardTitle>
            <CardDescription>
                Update the employee's information below.
            </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
            {/* Photo Upload Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Employee Photo</h3>
                <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                    <AvatarImage src={photoPreview ?? undefined} alt="Employee photo preview" />
                    <AvatarFallback>
                    <UserPlus />
                    </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                    <Label htmlFor="photo-upload">Upload new photo</Label>
                    <Input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoChange} />
                </div>
                </div>
            </div>
            
            {/* Personal Information Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="middleName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Middle Name</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Male">Male</SelectItem>
                                    <SelectItem value="Female">Female</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date of Birth</FormLabel>
                            <FormControl><Input type="date" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
            </div>

            {/* Employment Details Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Employment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                        control={form.control}
                        name="branch"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Branch</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger><SelectValue placeholder="Select branch" /></SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {branches.map(b => (
                                        <SelectItem key={b.id} value={b.name}>{b.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Department</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value} disabled={!watchedBranch || departments.length === 0}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {departments.map(d => (
                                            <SelectItem key={d} value={d}>{d}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Position</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value} disabled={!watchedDepartment || positions.length === 0}>
                                    <FormControl>
                                        <SelectTrigger><SelectValue placeholder="Select position" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {positions.map(p => (
                                            <SelectItem key={p} value={p}>{p}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="hireDate"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date of Hire</FormLabel>
                            <FormControl><Input type="date" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl><Input type="email" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                </div>
            </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                 <Button type="submit" disabled={form.formState.isSubmitting}>
                    <Save className="mr-2"/>
                    Save Changes
                </Button>
            </CardFooter>
        </Card>
      </form>
    </Form>
    </div>
  );
}

    