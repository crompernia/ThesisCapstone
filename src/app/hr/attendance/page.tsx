/**
 * @fileoverview This file defines the Clock In/Out page for HR personnel.
 * It provides HR personnel with the same clock in/out functionality as regular employees,
 * allowing them to track their own attendance.
 */
'use client';
import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Camera, Clock, MapPin, Calendar, Timer } from "lucide-react";
import { useSession } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

type AttendanceRecord = {
  date: string;
  timeIn?: string | null;
  timeOut?: string | null;
  status?: string;
};

type AttendanceSummary = {
  daysAttended: number;
  totalDaysAttended: number;
  lates: number;
  absences: number;
  availableLeaves: number;
  totalHours: number;
  totalWorkingDays: number;
};

export default function HRAttendancePage() {
  React.useEffect(() => {
    document.title = "HR Clock In/Out";
  }, []);

  const { toast } = useToast();
  const [isClocking, setIsClocking] = React.useState(false);
  const [currentAction, setCurrentAction] = React.useState<'clock-in' | 'clock-out' | null>(null);
  const [attendanceSummary, setAttendanceSummary] = React.useState<AttendanceSummary | null>(null);
  const [attendanceRecords, setAttendanceRecords] = React.useState<AttendanceRecord[]>([]);
  const [userInfo, setUserInfo] = React.useState<{ name: string; email: string } | null>(null);
  const [todayStatus, setTodayStatus] = React.useState<'not-started' | 'clocked-in' | 'clocked-out'>('not-started');

  const { data: session } = useSession();

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (session?.user) {
          setUserInfo({
            name: session.user.name || 'HR User',
            email: session.user.email || ''
          });

          // Fetch attendance data from HR-specific endpoint
          const response = await fetch('/api/hr/attendance');
          if (response.ok) {
            const { summary, records } = await response.json();
            setAttendanceSummary(summary);
            setAttendanceRecords(records);

            // Determine today's status
            const today = new Date().toISOString().split('T')[0];
            const todayRecord = records.find((r: any) => r.date === today);
            if (todayRecord) {
              if (todayRecord.timeOut) {
                setTodayStatus('clocked-out');
              } else if (todayRecord.timeIn) {
                setTodayStatus('clocked-in');
              }
            }
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to load attendance data.',
        });
      }
    };
    fetchUserData();
  }, [session, toast]);

  const getPosition = async (): Promise<GeolocationPosition> => {
    if (!navigator.geolocation) throw new Error('Geolocation not available');
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, () => reject(new Error('Geolocation permission denied')), { timeout: 4000 });
    });
  };

  const [showCamera, setShowCamera] = React.useState(false);
  const [pendingAction, setPendingAction] = React.useState<'clock-in' | 'clock-out' | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (e) {
      console.error('Camera access denied');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const s = videoRef.current.srcObject as MediaStream;
      s.getTracks().forEach(t => t.stop());
      videoRef.current.srcObject = null;
    }
  };

  const handleClockAction = async (action: 'clock-in' | 'clock-out') => {
    setPendingAction(action);
    setShowCamera(true);
    await startCamera();
  };

  const handleCameraConfirm = async () => {
    if (!pendingAction) return;

    setIsClocking(true);
    setCurrentAction(pendingAction);

    try {
      // Get geolocation
      const pos = await getPosition();

      // Capture photo
      let dataUri: string | null = null;
      if (videoRef.current && canvasRef.current) {
        const v = videoRef.current;
        const c = canvasRef.current;
        c.width = v.videoWidth;
        c.height = v.videoHeight;
        const ctx = c.getContext('2d');
        ctx?.drawImage(v, 0, 0, v.videoWidth, v.videoHeight);
        dataUri = c.toDataURL('image/jpeg');
      }

      // Verify face first
      const verifyRes = await fetch('/api/attendance/verify-face', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dataUri,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        }),
      });
      const verifyJson = await verifyRes.json();
      if (!verifyRes.ok || !verifyJson.verified) {
        throw new Error(verifyJson?.message || 'Face verification failed');
      }

      // Proceed with clock action
      const clockResponse = await fetch(`/api/attendance/${pendingAction}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        }),
      });

      const result = await clockResponse.json();

      if (!clockResponse.ok) {
        throw new Error(result.error || `Failed to ${pendingAction}`);
      }

      toast({
        title: "Success",
        description: `Successfully ${pendingAction === 'clock-in' ? 'clocked in' : 'clocked out'}.`,
      });

      // Refresh attendance data
      const refreshResponse = await fetch('/api/hr/attendance');
      if (refreshResponse.ok) {
        const { summary, records } = await refreshResponse.json();
        setAttendanceSummary(summary);
        setAttendanceRecords(records);

        // Update today's status
        const today = new Date().toISOString().split('T')[0];
        const todayRecord = records.find((r: any) => r.date === today);
        if (todayRecord) {
          if (todayRecord.timeOut) {
            setTodayStatus('clocked-out');
          } else if (todayRecord.timeIn) {
            setTodayStatus('clocked-in');
          }
        }
      }

      setShowCamera(false);
      setPendingAction(null);

    } catch (error) {
      console.error(`Error ${pendingAction}:`, error);
      const errorMessage = error instanceof Error ? error.message : `Failed to ${pendingAction}. Please try again.`;
      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorMessage,
      });
    } finally {
      setIsClocking(false);
      setCurrentAction(null);
      stopCamera();
    }
  };

  const handleCameraCancel = () => {
    setShowCamera(false);
    setPendingAction(null);
    stopCamera();
  };

  const formatTime = (time: string | null | undefined) => {
    if (!time) return '--:--';
    return new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive'> = {
      'Present': 'default',
      'Late': 'destructive',
      'Absent': 'secondary'
    };
    return <Badge variant={variants[status] || 'secondary'}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Clock In/Out</h1>
        <p className="text-muted-foreground">
          Track your attendance as an HR personnel. Clock in when you start work and clock out when you finish.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Clock In/Out Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock />
              Today's Attendance
            </CardTitle>
            <CardDescription>
              Clock in when you arrive and clock out when you leave.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Current Status */}
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4" />
                <span className="font-medium">Status:</span>
              </div>
              <Badge variant={
                todayStatus === 'clocked-out' ? 'default' :
                todayStatus === 'clocked-in' ? 'secondary' : 'outline'
              }>
                {todayStatus === 'clocked-out' ? 'Completed' :
                 todayStatus === 'clocked-in' ? 'Working' : 'Not Started'}
              </Badge>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                className="flex-1"
                disabled={todayStatus !== 'not-started' || isClocking}
                variant="default"
                onClick={() => handleClockAction('clock-in')}
              >
                <Clock className="mr-2" />
                {isClocking && currentAction === 'clock-in' ? 'Clocking In...' : 'Clock In'}
              </Button>

              <Button
                className="flex-1"
                disabled={todayStatus !== 'clocked-in' || isClocking}
                variant="outline"
                onClick={() => handleClockAction('clock-out')}
              >
                <Clock className="mr-2" />
                {isClocking && currentAction === 'clock-out' ? 'Clocking Out...' : 'Clock Out'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar />
              This Period Summary
            </CardTitle>
            <CardDescription>
              Your attendance summary for the current half-month period.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {attendanceSummary ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Days Attended</span>
                    <span className="font-medium">{attendanceSummary.daysAttended}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Hours</span>
                    <span className="font-medium">{attendanceSummary.totalHours.toFixed(1)}h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Late Minutes</span>
                    <span className="font-medium">{attendanceSummary.lates}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Absences</span>
                    <span className="font-medium">{attendanceSummary.absences}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Available Leaves</span>
                    <span className="font-medium">{attendanceSummary.availableLeaves}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Working Days</span>
                    <span className="font-medium">{attendanceSummary.totalWorkingDays}</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground text-center">Loading attendance data...</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Camera Dialog */}
      {showCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Face Verification</h3>
            <div className="relative aspect-video w-full bg-muted rounded-md overflow-hidden mb-4">
              <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
              <canvas ref={canvasRef} className="hidden" />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={handleCameraCancel}>
                Cancel
              </Button>
              <Button onClick={handleCameraConfirm} disabled={isClocking}>
                {isClocking ? 'Verifying...' : 'Confirm'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Attendance Log Table */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Log</CardTitle>
          <CardDescription>Detailed daily attendance records.</CardDescription>
        </CardHeader>
        <CardContent>
          {attendanceRecords.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time In</TableHead>
                  <TableHead>Time Out</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceRecords.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{record.date}</TableCell>
                    <TableCell>{record.timeIn}</TableCell>
                    <TableCell>{record.timeOut}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={
                        record.status === 'Present' ? 'default' : record.status === 'Late' ? 'secondary' : 'destructive'
                      } className={record.status === 'Present' ? 'bg-green-500' : ''}>
                        {record.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground text-center">No attendance records found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}