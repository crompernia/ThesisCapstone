
"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Camera, Loader2, Compass, X, UserSquare } from "lucide-react";
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
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "./ui/alert-dialog";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

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
  const [clockInStatus, setClockInStatus] = React.useState("idle");
  const [clockInError, setClockInError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasCameraPermission, setHasCameraPermission] = React.useState(false);

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

  const videoRef = React.useRef<HTMLVideoElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

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
   * Request camera permission and start video stream.
   */
  React.useEffect(() => {
    async function getCameraPermission() {
        if (clockInStatus !== 'capturing_face') return;

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setHasCameraPermission(true);
        } catch (error) {
            console.error("Error accessing camera:", error);
            setHasCameraPermission(false);
            setClockInError("Camera access denied. Please enable camera permissions.");
            setClockInStatus("error");
        }
    }
    getCameraPermission();

    // Cleanup function to stop video stream
    return () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
        }
    };
  }, [clockInStatus]);

  /**
   * Handles the geofenced clock-in process.
   * Gets user's location and simulates verification.
   */
  const handleClockIn = async () => {
    setClockInStatus("getting_location");
    setClockInError(null);

    if (!navigator.geolocation) {
        setClockInError("Geolocation is not supported by your browser.");
        setClockInStatus("error");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (_position) => {
            setClockInStatus("verifying_location");

            // Simulating server verification delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            const isWithinGeofence = true; // Simulate a successful check

            if (isWithinGeofence) {
                setClockInStatus("capturing_face");
            } else {
                setClockInError("You are not within the allowed geofence for clock-in.");
                setClockInStatus("error");
            }
        },
        (error) => {
            let message = "An unknown error occurred while getting your location.";
            if (error.code === error.PERMISSION_DENIED) {
                message = "Location access denied. Please enable location permissions to clock in.";
            } else if (error.code === error.POSITION_UNAVAILABLE) {
                message = "Your location information is currently unavailable.";
            }
            setClockInError(message);
            setClockInStatus("error");
        }
    );
  };
  
  /**
   * Captures a photo from the video stream and proceeds with verification.
   */
  const handleCaptureAndVerify = async () => {
    if (videoRef.current && canvasRef.current) {
        setClockInStatus("verifying_face");
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        
        const _photoDataUri = canvas.toDataURL('image/jpeg');

        // within the application, you would send this `_photoDataUri` to your server
        // for facial recognition against the employee's stored photo.
        
        // Simulating server verification delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        const isFaceVerified = true; // Simulate successful verification

        if (isFaceVerified) {
             setClockInStatus("success");
             toast({
                title: "Clock-In Successful",
                description: "Your attendance and identity have been verified.",
            });
            await new Promise(resolve => setTimeout(resolve, 1500));
            router.push("/dashboard");
        } else {
            setClockInError("Facial recognition failed. Please try again.");
            setClockInStatus("error");
        }
    }
  };

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
  }

  /**
   * Handles HR admin login.
   * Calls NextAuth signIn and navigates to the HR dashboard on success.
   */
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
  }

  /**
   * Handles admin login.
   * Calls NextAuth signIn and navigates to the admin dashboard on success.
   */
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
  }
  
  const isClockingIn = clockInStatus !== "idle" && clockInStatus !== "success";

  const closeDialog = () => {
    setClockInStatus("idle");
    setClockInError(null);
  }

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
                          <Input placeholder="e.g., 10023" {...field} disabled={isClockingIn} />
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
                          <Input type="password" placeholder="••••••••" {...field} disabled={isClockingIn}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-2 pt-2">
                     <Button onClick={handleClockIn} type="button" className="w-full" size="lg" disabled={isClockingIn}>
                        {isClockingIn ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Camera className="mr-2 h-4 w-4" />}
                        Clock In (Geofenced)
                    </Button>
                    <Button type="submit" variant="outline" className="w-full" disabled={isLoading || isClockingIn}>
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
      {/* Dialog for Clock-In Process */}
      <AlertDialog open={isClockingIn} onOpenChange={(open) => { if(!open) closeDialog(); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">Clock-In Verification</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="text-center text-muted-foreground space-y-4">
                  {(clockInStatus === 'getting_location' || clockInStatus === 'verifying_location') && (
                      <>
                          <div className="flex justify-center my-4">
                              <Compass className="w-12 h-12 animate-pulse text-primary"/>
                          </div>
                          <p>{clockInStatus === 'getting_location' ? 'Requesting location access...' : 'Verifying your location...'}</p>
                      </>
                  )}
                  {clockInStatus === 'capturing_face' && (
                      <div className="space-y-4">
                           <div className="flex justify-center my-4">
                                <UserSquare className="w-12 h-12 text-primary"/>
                           </div>
                           <p>Location verified. Now, please take a photo for facial recognition.</p>
                            <div className="relative aspect-video w-full max-w-sm mx-auto bg-muted rounded-md overflow-hidden">
                                <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
                                <canvas ref={canvasRef} className="hidden" />
                                {!hasCameraPermission && <div className="absolute inset-0 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin"/></div>}
                            </div>
                           {!hasCameraPermission && (
                                <Alert variant="destructive">
                                    <AlertTitle>Camera Access Required</AlertTitle>
                                    <AlertDescription>
                                        Please allow camera access to use this feature.
                                    </AlertDescription>
                                </Alert>
                            )}
                      </div>
                  )}
                  {clockInStatus === 'verifying_face' && (
                     <>
                         <div className="flex justify-center my-4">
                             <Loader2 className="w-12 h-12 animate-spin text-primary"/>
                         </div>
                         <p>Verifying your identity... Please wait.</p>
                    </>
                  )}
                  {clockInStatus === 'error' && (
                      <>
                          <div className="flex justify-center my-4">
                              <X className="w-12 h-12 text-destructive"/>
                          </div>
                          <p className="text-destructive font-medium">{clockInError}</p>
                      </>
                  )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
             {clockInStatus === 'capturing_face' && (
                <Button onClick={handleCaptureAndVerify} disabled={!hasCameraPermission} className="w-full">
                    <Camera className="mr-2"/>
                    Take Photo & Verify
                </Button>
            )}
            {clockInStatus === 'error' && (
                <Button variant="outline" onClick={closeDialog}>Close</Button>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
