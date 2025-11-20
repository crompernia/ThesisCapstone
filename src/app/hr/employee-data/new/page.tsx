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
import { ArrowLeft, UserPlus, Camera } from 'lucide-react';
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
import { getAllBranches, getDepartmentsForBranchById, getPositionsForDepartment } from '@/lib/data';
import FacePhotoCapture from '@/components/face-photo-capture';

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
    phone: z.string().min(1, "Phone number is required.").refine((val) => {
        return /^\+63\s\d{3}\s\d{3}\s\d{4}$/.test(val);
    }, "Phone number must be in format +63 XXX XXX XXXX"),
    photo: z.any().optional(),
    sssNumber: z.string().min(1, "SSS Number is required.").refine((val) => {
        return /^\d{2}-\d{7}-\d{1}$/.test(val);
    }, "SSS number must be in format XX-XXXXXXX-X"),
    philhealthNumber: z.string().min(1, "PhilHealth Number is required.").refine((val) => {
        return /^\d{2}-\d{9}-\d{1}$/.test(val);
    }, "PhilHealth number must be in format XX-XXXXXXXXX-X"),
    pagibigNumber: z.string().min(1, "Pag-IBIG Number is required.").refine((val) => {
        return /^\d{4}-\d{4}-\d{4}$/.test(val);
    }, "Pag-IBIG number must be in format XXXX-XXXX-XXXX"),
    tin: z.string().min(1, "TIN is required.").refine((val) => {
        return /^\d{3}-\d{3}-\d{3}-\d{3}$/.test(val);
    }, "TIN must be in format XXX-XXX-XXX-XXX"),
});

/**
 * Renders the form to add a new employee.
 * @returns {JSX.Element} The add employee page component.
 */
export default function AddEmployeePage() {
   const [photoPreview, setPhotoPreview] = React.useState(null);
   const [cameraOpen, setCameraOpen] = React.useState(false);
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
        const branchesData = await getAllBranches();
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

  const handlePhotoCaptured = (dataUri: string) => {
    setPhotoPreview(dataUri);
    // Convert dataUri to File object for form submission
    fetch(dataUri)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], 'face-reference.jpg', { type: 'image/jpeg' });
        form.setValue('photo', file);
      });
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    for (const key in values) {
      if (key === 'photo' && values[key]) {
        // Convert the File object to base64 string for storage
        const file = values[key];
        const base64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
        formData.append(key, base64);
      } else {
        formData.append(key, values[key]);
      }
    }

    const result = await addEmployee(formData);

    if (result.success) {
        toast({
            title: 'Success',
            description: 'New employee account have been created',
        });
        router.push('/hr/employee-data');
    } else {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: result.message || 'Failed to create employee account.',
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
                <div className="space-y-2 flex-1">
                    <div className="flex gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setCameraOpen(true)}
                            className="flex items-center gap-2"
                        >
                            <Camera className="h-4 w-4" />
                            Take Photo
                        </Button>
                        <div className="flex-1">
                            <Label htmlFor="photo-upload" className="text-sm font-medium">Or upload a file</Label>
                            <Input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoChange} className="mt-1" />
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                    Take a photo or upload an image (PNG, JPG, or GIF up to 5MB). This photo will be used for facial recognition during clock-in/out.
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
                 <h3 className="text-lg font-medium">Government Benefits <span className="text-red-500">* Required</span></h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="sssNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>SSS Number</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="12-3456789-0"
                                        {...field}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(/[^0-9-]/g, ''); // Remove non-digits and non-hyphens
                                            // Auto-format as user types
                                            if (value.length > 2 && value[2] !== '-') {
                                                value = value.slice(0, 2) + '-' + value.slice(2);
                                            }
                                            if (value.length > 10 && value[10] !== '-') {
                                                value = value.slice(0, 10) + '-' + value.slice(10);
                                            }
                                            if (value.length > 12) {
                                                value = value.slice(0, 12); // Limit to 12 characters
                                            }
                                            field.onChange(value);
                                        }}
                                    />
                                </FormControl>
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
                                <FormControl>
                                    <Input
                                        placeholder="12-345678901-2"
                                        {...field}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(/[^0-9-]/g, ''); // Remove non-digits and non-hyphens
                                            // Auto-format as user types
                                            if (value.length > 2 && value[2] !== '-') {
                                                value = value.slice(0, 2) + '-' + value.slice(2);
                                            }
                                            if (value.length > 12 && value[12] !== '-') {
                                                value = value.slice(0, 12) + '-' + value.slice(12);
                                            }
                                            if (value.length > 14) {
                                                value = value.slice(0, 14); // Limit to 14 characters
                                            }
                                            field.onChange(value);
                                        }}
                                    />
                                </FormControl>
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
                                <FormControl>
                                    <Input
                                        placeholder="1234-5678-9012"
                                        {...field}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(/[^0-9-]/g, ''); // Remove non-digits and non-hyphens
                                            // Auto-format as user types
                                            if (value.length > 4 && value[4] !== '-') {
                                                value = value.slice(0, 4) + '-' + value.slice(4);
                                            }
                                            if (value.length > 9 && value[9] !== '-') {
                                                value = value.slice(0, 9) + '-' + value.slice(9);
                                            }
                                            if (value.length > 14) {
                                                value = value.slice(0, 14); // Limit to 14 characters
                                            }
                                            field.onChange(value);
                                        }}
                                    />
                                </FormControl>
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
                                <FormControl>
                                    <Input
                                        placeholder="123-456-789-012"
                                        {...field}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(/[^0-9-]/g, ''); // Remove non-digits and non-hyphens
                                            // Auto-format as user types
                                            if (value.length > 3 && value[3] !== '-') {
                                                value = value.slice(0, 3) + '-' + value.slice(3);
                                            }
                                            if (value.length > 7 && value[7] !== '-') {
                                                value = value.slice(0, 7) + '-' + value.slice(7);
                                            }
                                            if (value.length > 11 && value[11] !== '-') {
                                                value = value.slice(0, 11) + '-' + value.slice(11);
                                            }
                                            if (value.length > 15) {
                                                value = value.slice(0, 15); // Limit to 15 characters
                                            }
                                            field.onChange(value);
                                        }}
                                    />
                                </FormControl>
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
                            <FormControl>
                                <Input
                                    placeholder="+63 912 345 6789"
                                    {...field}
                                    onChange={(e) => {
                                        let value = e.target.value.replace(/[^0-9+\s]/g, ''); // Remove non-digits, non-plus, non-space
                                        // Auto-format as Philippine number
                                        if (value.startsWith('+63') || value.startsWith('63')) {
                                            // Remove any existing +63 or 63 prefix to reformat
                                            let cleanValue = value.replace(/^\+?63/, '');
                                            // Remove all spaces and non-digits
                                            cleanValue = cleanValue.replace(/\s/g, '').replace(/[^0-9]/g, '');
                                            // Format as +63 XXX XXX XXXX
                                            if (cleanValue.length > 0) {
                                                value = '+63';
                                                if (cleanValue.length > 0) value += ' ' + cleanValue.slice(0, 3);
                                                if (cleanValue.length > 3) value += ' ' + cleanValue.slice(3, 6);
                                                if (cleanValue.length > 6) value += ' ' + cleanValue.slice(6, 10);
                                            }
                                        } else if (value.length === 0 || value === '+') {
                                            value = '+63 ';
                                        }
                                        if (value.length > 17) {
                                            value = value.slice(0, 17); // Limit to 17 characters (+63 XXX XXX XXXX)
                                        }
                                        field.onChange(value);
                                    }}
                                />
                            </FormControl>
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
                        <Button type="button">Create Account</Button>
                        </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure you want to create account?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This will create the new employee account.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={form.handleSubmit(handleSubmit)} disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? "Creating..." : "Create Account"}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardFooter>
        </Card>
      </form>
    </Form>

    {/* Face Photo Capture Dialog */}
    <FacePhotoCapture
      open={cameraOpen}
      onOpenChange={setCameraOpen}
      onPhotoCaptured={handlePhotoCaptured}
    />
    </div>
  );
}

    