
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
import { DateTimeDisplay } from "./date-time-display";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";

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
  const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState(false);
  const [forgotUsername, setForgotUsername] = React.useState("");
  const [isForgotLoading, setIsForgotLoading] = React.useState(false);

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
    // Check if it contains ".hr"
    if (username.includes(".hr")) {
      return "hr";
    }
    // Check for admin keywords
    if (username.toLowerCase().includes("super") || username.toLowerCase().includes("admin")) {
      return "admin";
    }
    // Default to employee (uses employee_number for login)
    return "employee";
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
          description: "Please enter a valid Employee Number, HR email (.hr), or Admin email (containing 'admin').",
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
        setIsLoading(false);
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
        // Keep loading until navigation completes
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!forgotUsername.trim()) {
      toast({
        variant: "destructive",
        title: "Username Required",
        description: "Please enter your username.",
      });
      return;
    }

    setIsForgotLoading(true);
    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: forgotUsername }),
      });

      if (response.ok) {
        toast({
          title: "Reset Email Sent",
          description: "If an account with that username exists, a password reset email has been sent.",
        });
        setForgotPasswordOpen(false);
        setForgotUsername("");
      } else {
        const error = await response.json();
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message || "Failed to send reset email.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsForgotLoading(false);
    }
  };

  

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        <DateTimeDisplay />
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
                      placeholder="Employee Number, HR email, or Admin email"
                      {...field}
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
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-2">
              <Button type="submit" className="w-full" size="lg">
                Login
              </Button>
            </div>
            <div className="pt-4 text-center">
              <Dialog open={forgotPasswordOpen} onOpenChange={setForgotPasswordOpen}>
                <DialogTrigger asChild>
                  <Button variant="link" className="p-0 h-auto font-normal">
                    Forgot Password?
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Reset Password</DialogTitle>
                    <DialogDescription>
                      Enter your username to receive a password reset email.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="forgot-username">Username</Label>
                      <Input
                        id="forgot-username"
                        placeholder="Employee Number, HR email, or Admin email"
                        value={forgotUsername}
                        onChange={(e) => setForgotUsername(e.target.value)}
                      />
                    </div>
                    <Button
                      onClick={handleForgotPassword}
                      disabled={isForgotLoading}
                      className="w-full"
                    >
                      {isForgotLoading ? "Sending..." : "Send Reset Email"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
