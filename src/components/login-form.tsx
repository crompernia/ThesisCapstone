
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
import { Card, CardContent } from "./ui/card";
import { useToast } from "../hooks/use-toast";

// Unified schema for login form validation.
const loginFormSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

/**
 * Renders a unified login form that automatically determines user role based on input.
 * Handles form submission, validation, and redirects to appropriate dashboard.
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

  // Unified form hook.
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { username: "", password: "" },
  });
  

  
  

  /**
   * Determines user role based on username input.
   * @param username - The username entered by the user
   * @returns The determined role: "employee", "hr", or "admin"
   */
  const determineRole = (username: string): "employee" | "hr" | "admin" | null => {
    // Check if it's an employee ID (numeric only)
    if (/^\d+$/.test(username)) {
      return "employee";
    }
    // Check if it contains ".hr"
    if (username.includes(".hr")) {
      return "hr";
    }
    // Check for specific super admin email
    if (username.toLowerCase() === "super@example.com") {
      return "admin";
    }
    // Check if it contains both "super" and "admin" (highest priority)
    if (username.toLowerCase().includes("super") && username.toLowerCase().includes("admin")) {
      return "admin";
    }
    // Check if it contains "admin"
    if (username.toLowerCase().includes("admin")) {
      return "admin";
    }
    return null;
  };

  /**
   * Handles unified login for all user types.
   * Determines role from username and calls appropriate authentication provider.
   */
  const handleLogin = async (values: z.infer<typeof loginFormSchema>) => {
    setIsLoading(true);
    try {
      const role = determineRole(values.username);

      if (!role) {
        toast({
          variant: "destructive",
          title: "Invalid Username",
          description: "Please enter a valid Employee ID, HR email (.hr), or Admin email (containing 'admin').",
        });
        setIsLoading(false);
        return;
      }

      let providerId: string;
      let credentials: any;

      switch (role) {
        case "employee":
          providerId = "employee-credentials";
          credentials = { employeeId: values.username, password: values.password };
          break;
        case "hr":
          providerId = "hr-credentials";
          credentials = { email: values.username, password: values.password };
          break;
        case "admin":
          providerId = "admin-credentials";
          credentials = { email: values.username, password: values.password };
          break;
      }

      const result = await signIn(providerId, {
        ...credentials,
        redirect: false,
      });

      if (result?.error) {
        console.error("Login error:", result.error);
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: result.error || "Invalid credentials. Please check your username and password.",
        });
      } else if (result?.ok) {
        // Redirect based on role
        switch (role) {
          case "employee":
            router.push("/dashboard");
            break;
          case "hr":
            router.push("/hr/dashboard");
            break;
          case "admin":
            router.push("/admin/dashboard");
            break;
        }
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
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Employee ID (e.g., 10023), HR email (.hr), or Admin email (admin)"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
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
            <div className="pt-2">
              <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Login
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
