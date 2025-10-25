// @ts-nocheck
/**
 * @fileoverview This file defines the page for adding a new employee.
 * It provides a form for HR personnel to enter the details of a new employee.
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
import { ArrowLeft, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { addEmployee } from './actions';
import { getBranches, getDepartmentsForBranchById, getPositionsForDepartment } from '@/lib/data';

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
    phone: z.string().min(1, "Phone number is required."),
    photo: z.any().optional(),
    sssNumber: z.string().optional(),
    philhealthNumber: z.string().optional(),
    pagibigNumber: z.string().optional(),
    tin: z.string().optional(),
});

/**
 * Renders the form to add a new employee.
 * @returns {JSX.Element} The add employee page component.
 */
export default function AddEmployeePage() {
  const [photoPreview, setPhotoPreview] = React.useState(null);
  const [branches, setBranches] = React.useState([]);
  const [departments, setDepartments] = React.useState([]);
  const [positions, setPositions] = React.useState([]);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm({
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
        phone: '',
        photo: null,
        sssNumber: '',
        philhealthNumber: '',
        pagibigNumber: '',
        tin: '',
    }
  });
  
  const watchedBranch = useWatch({ control: form.control, name: 'branch' });
  const watchedDepartment = useWatch({ control: form.control, name: 'department' });


  React.useEffect(() => {
    const fetchBranches = async () => {
        const branchesData = await getBranches();
        setBranches(branchesData);
    };
    fetchBranches();
  }, []);

  React.useEffect(() => {
    const fetchDepartments = async () => {
        if (watchedBranch) {
            // Find the branch ID from the branch name
            const selectedBranch = branches.find(b => b.name === watchedBranch);
            if (selectedBranch) {
                const depts = await getDepartmentsForBranchById(selectedBranch.id);
                setDepartments(depts);
                form.setValue('department', '');
                setPositions([]);
                form.setValue('position', '');
            }
        } else {
            setDepartments([]);
            setPositions([]);
        }
    };
    fetchDepartments();
  }, [watchedBranch, branches, form]);

  React.useEffect(() => {
    const fetchPositions = async () => {
        if (watchedDepartment) {
            const pos = await getPositionsForDepartment(watchedDepartment);
            setPositions(pos);
            form.setValue('position', '');
        } else {
            setPositions([]);
        }
    };
    fetchPositions();
  }, [watchedDepartment, form]);


  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
      form.setValue('photo', file);
    } else {
      setPhotoPreview(null);
      form.setValue('photo', null);
    }
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }
    // We can add photo handling here if needed, e.g., uploading to storage
    // and appending a URL to formData. For now, we pass the data.

    const result = await addEmployee(formData);

    if (result.success) {
        toast({
            title: 'Success',
            description: 'New employee has been submitted for approval.',
        });
        router.push('/hr/employee-data');
    } else {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: result.message || 'Failed to submit employee for approval.',
        });
    }
  };

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

    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                <UserPlus /> Add New Employee
            </CardTitle>
            <CardDescription>
                Fill out the form below to add a new employee profile to the system.
            </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
            {/* Photo Upload Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Employee Photo</h3>
                <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                    <AvatarImage src={photoPreview ?? "/default-avatar.png"} alt="Employee photo preview" />
                    <AvatarFallback>
                    <UserPlus />
                    </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                    <Label htmlFor="photo-upload">Upload a photo</Label>
                    <Input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoChange} />
                    <p className="text-xs text-muted-foreground">
                    PNG, JPG, or GIF up to 5MB. This photo will be used for facial recognition.
                    </p>
                </div>
                </div>
            </div>
            
            {/* Personal Information Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">
                Personal Information <span className="text-red-500">* Required</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl><Input placeholder="Michael" {...field} /></FormControl>
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
                        <FormControl><Input placeholder="Johnson" {...field} /></FormControl>
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
                        <FormControl><Input placeholder="Lee" {...field} /></FormControl>
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
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
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
                <h3 className="text-lg font-medium">
                Employment Information <span className="text-red-500">* Required</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                        control={form.control}
                        name="branch"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Branch</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!watchedBranch || departments.length === 0}>
                                <FormControl>
                                    <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {departments.map(d => (
                                        <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>
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
                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!watchedDepartment || positions.length === 0}>
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

             {/* Government Benefits Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Government Benefits (Optional)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="sssNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>SSS Number</FormLabel>
                                <FormControl><Input placeholder="e.g., 00-0000000-0" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="philhealthNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>PhilHealth Number</FormLabel>
                                <FormControl><Input placeholder="e.g., 00-000000000-0" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="pagibigNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pag-IBIG Number</FormLabel>
                                <FormControl><Input placeholder="e.g., 0000-0000-0000" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tin"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>TIN</FormLabel>
                                <FormControl><Input placeholder="e.g., 000-000-000-000" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">
                Contact Information <span className="text-red-500">* Required</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl><Input type="email" placeholder="michael.johnson@example.com" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl><Input placeholder="+63 555 123 4567" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                </div>
            </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button type="button">Submit for approval</Button>
                        </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure you want to submit for approval?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This will send the new employee profile to an administrator for approval.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={form.handleSubmit(handleSubmit)}>Submit for approval</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardFooter>
        </Card>
      </form>
    </Form>
    </div>
  );
}

    