
"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { useToast } from "../hooks/use-toast";

// Schema for employee login form validation.
const employeeFormSchema = z.object({
  employeeId: z.string().min(1, "Employee ID is required"),
  password: z.string().min(1, "Password is required"),
});

// Schema for HR login form validation.
const hrFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

// Schema for Admin login form validation.
const adminFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

/**
 * Renders a login form with tabs for "Employee", "HR Admin", and "Admin".
 * Handles form submission, validation, and different login methods including geofenced clock-in.
 * @returns {JSX.Element} The login form component.
 */
export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  // Show error message if present in URL
  React.useEffect(() => {
    const error = searchParams.get("error");
    if (error === "unauthorized") {
      toast({
        variant: "destructive",
        title: "Unauthorized",
        description: "You don't have permission to access that page.",
      });
    }
  }, [searchParams, toast]);


  // Form hook for employee login.
  const employeeForm = useForm({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: { employeeId: "", password: "" },
  });

  // Form hook for HR login.
  const hrForm = useForm({
    resolver: zodResolver(hrFormSchema),
    defaultValues: { email: "", password: "" },
  });

  // Form hook for Admin login.
  const adminForm = useForm({
    resolver: zodResolver(adminFormSchema),
    defaultValues: { email: "", password: "" },
  });
  

  
  

  /**
   * Handles standard employee login.
   * Calls NextAuth signIn and navigates to the dashboard on success.
   */
  const handleStandardLogin = async (values: z.infer<typeof employeeFormSchema>) => {
    setIsLoading(true);
    try {
      const result = await signIn("employee-credentials", {
        employeeId: values.employeeId,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: result.error,
        });
      } else if (result?.ok) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleHrLogin = async (values: z.infer<typeof hrFormSchema>) => {
    setIsLoading(true);
    try {
      const result = await signIn("hr-credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: result.error,
        });
      } else if (result?.ok) {
        router.push("/hr/dashboard");
        router.refresh();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdminLogin = async (values: z.infer<typeof adminFormSchema>) => {
    setIsLoading(true);
    try {
      const result = await signIn("admin-credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: result.error,
        });
      } else if (result?.ok) {
        router.push("/admin/dashboard");
        router.refresh();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <>
      <Tabs defaultValue="employee" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="employee">Employee</TabsTrigger>
          <TabsTrigger value="hr">HR Admin</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
        </TabsList>
        {/* Employee Login Tab */}
        <TabsContent value="employee">
          <Card>
            <CardContent className="p-6">
              <Form {...employeeForm}>
                <form onSubmit={employeeForm.handleSubmit(handleStandardLogin)} className="space-y-4">
                  <FormField
                    control={employeeForm.control}
                    name="employeeId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employee ID</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 10023" {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={employeeForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} disabled={isLoading}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-2 pt-2">
                    <Button type="submit" variant="outline" className="w-full" disabled={isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Standard Login
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        {/* HR Admin Login Tab */}
        <TabsContent value="hr">
          <Card>
            <CardContent className="p-6">
              <Form {...hrForm}>
                <form onSubmit={hrForm.handleSubmit(handleHrLogin)} className="space-y-4">
                  <FormField
                    control={hrForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="hr@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={hrForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="pt-2">
                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Login to HR Portal
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Admin Login Tab */}
        <TabsContent value="admin">
          <Card>
            <CardContent className="p-6">
              <Form {...adminForm}>
                <form onSubmit={adminForm.handleSubmit(handleAdminLogin)} className="space-y-4">
                  <FormField
                    control={adminForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="admin@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={adminForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="pt-2">
                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Login to Admin Portal
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
    </>
  );
}
