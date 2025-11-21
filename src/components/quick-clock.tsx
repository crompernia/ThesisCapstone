"use client";

import * as React from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Clock, X, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateDeviceFingerprint } from '@/lib/deviceFingerprint';
import { extractFaceDescriptor } from '@/lib/faceVerification';
import { getOptimizedCameraConstraints, isMobileDevice } from '@/lib/utils';

export default function QuickClock() {
    const { toast } = useToast();
    const [open, setOpen] = React.useState(false);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [autoAction, setAutoAction] = React.useState<'in' | 'out' | null>(null);
    const [showClockIn, setShowClockIn] = React.useState(true);
    const videoRef = React.useRef<HTMLVideoElement | null>(null);
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    const [error, setError] = React.useState<string | null>(null);
    const [orientation, setOrientation] = React.useState<'portrait' | 'landscape'>('portrait');

  const getPosition = async (): Promise<GeolocationPosition> => {
    if (!navigator.geolocation) throw new Error('Geolocation not available');
    return new Promise((resolve, reject) => {
   navigator.geolocation.getCurrentPosition(resolve, () => reject(new Error('Geolocation permission denied')), { timeout: 4000 });
    });
  };

  const startCamera = async () => {
    try {
      const constraints = getOptimizedCameraConstraints();
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        // Add mobile-specific attributes for better performance
        if (isMobileDevice()) {
          videoRef.current.setAttribute('playsinline', 'true');
          videoRef.current.setAttribute('webkit-playsinline', 'true');
        }
      }
    } catch (e) {
      setError('Camera access denied');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const s = videoRef.current.srcObject as MediaStream;
      s.getTracks().forEach(t => t.stop());
      videoRef.current.srcObject = null;
    }
  };

  const checkClockInStatus = async () => {
    try {
      const res = await fetch('/api/attendance/check-status');
      if (res.ok) {
        const data = await res.json();
        setShowClockIn(!data.hasClockedInToday);
      }
    } catch (e) {
      // If error, default to showing both buttons
      setShowClockIn(true);
    }
  };

  React.useEffect(() => {
    // If modal closed, stop camera and clear any auto action
    if (!open) {
      stopCamera();
      setAutoAction(null);
    } else {
      // start camera immediately when opened (for both manual and programmatic open)
      startCamera();
      // Check if user has already clocked in today
      checkClockInStatus();
    }
  }, [open]);

  // Listen for programmatic open events from other pages/components
  React.useEffect(() => {
    const handler = (e: Event) => {
      try {
        const detail = (e as CustomEvent)?.detail;
        const action = detail?.action;
        if (action === 'in' || action === 'out') {
          setAutoAction(action);
          setOpen(true);
        }
      } catch (err) {
        // ignore
      }
    };
    window.addEventListener('quick-clock', handler as EventListener);
    return () => window.removeEventListener('quick-clock', handler as EventListener);
  }, []);

  // Handle orientation changes on mobile devices
  React.useEffect(() => {
    if (!isMobileDevice()) return () => {}; // Return empty cleanup function for non-mobile

    const handleOrientationChange = () => {
      const newOrientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      setOrientation(newOrientation);
    };

    // Set initial orientation
    handleOrientationChange();

    // Listen for orientation changes
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  const handleClockIn = async () => {
    setError(null);
    setIsProcessing(true);
    try {
      const pos = await getPosition();
      const fingerprint = generateDeviceFingerprint();
      await startCamera();

      // Wait for camera to initialize
      await new Promise(resolve => setTimeout(resolve, 1000));
      let dataUri: string | null = null;
      if (videoRef.current && canvasRef.current) {
        const v = videoRef.current;
        const c = canvasRef.current;

        // Wait for video to be ready
        if (v.videoWidth === 0 || v.videoHeight === 0) {
          throw new Error('Camera not ready. Please wait a moment and try again.');
        }

        c.width = v.videoWidth;
        c.height = v.videoHeight;
        const ctx = c.getContext('2d');
        if (!ctx) {
          throw new Error('Canvas context not available');
        }

        ctx.drawImage(v, 0, 0, v.videoWidth, v.videoHeight);
        dataUri = c.toDataURL('image/jpeg');

        console.log('[quick-clock] Image captured, dataUri length:', dataUri?.length);
        console.log('[quick-clock] dataUri starts with:', dataUri?.substring(0, 50));

        // Validate dataUri
        if (!dataUri || dataUri === 'data:,') {
          throw new Error('Failed to capture image from camera. Please check camera permissions.');
        }
      } else {
        throw new Error('Camera not available');
      }

      // Extract face descriptor client-side
      console.log('[quick-clock] Extracting face descriptor from captured image');
      const faceDescriptor = await extractFaceDescriptor(dataUri);
      if (!faceDescriptor) {
        throw new Error('No face detected in captured image. Please ensure your face is clearly visible.');
      }
      console.log('[quick-clock] Face descriptor extracted successfully');

      // Get current user ID for face verification
      const userRes = await fetch('/api/auth/session');
      const userData = await userRes.json();
      const employeeId = userData?.user?.id;
      if (!employeeId) {
        throw new Error('Unable to identify user. Please log in again.');
      }

      // Verify face against stored encoding
      console.log('[quick-clock] Calling validate-face-presence API with descriptor');
      const verifyRes = await fetch('/api/validate-face-presence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ faceDescriptor: Array.from(faceDescriptor), employeeId }),
      });
      const verifyJson = await verifyRes.json();
      console.log('[quick-clock] Validate-face-presence response:', verifyJson);
      if (!verifyRes.ok || !verifyJson.isVerified) {
        throw new Error(verifyJson?.error || verifyJson?.message || 'Face verification failed');
      }

      // Check device registration
      console.log('[quick-clock] Checking device registration');
      const deviceCheckRes = await fetch('/api/attendance/verify-face', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fingerprint,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          faceAlreadyVerified: true  // Face already verified above
        }),
      });
      const deviceCheckJson = await deviceCheckRes.json();
      if (!deviceCheckRes.ok || !deviceCheckJson.verified) {
        if (deviceCheckJson.requiresDeviceRegistration) {
          // Try to register the device
          const registerRes = await fetch('/api/register-device', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fingerprint }),
          });
          const registerJson = await registerRes.json();
          if (registerRes.ok && registerJson.success) {
            toast({ title: "Device Registered", description: "Your device has been registered. Please try clocking in again." });
            setIsProcessing(false);
            return;
          } else {
            throw new Error(registerJson?.message || 'Device registration failed');
          }
        }
        throw new Error(deviceCheckJson?.message || 'Device verification failed');
      }

      const res = await fetch('/api/attendance/clock-in', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }) });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.message || 'Clock-in failed');
      }
      const json = await res.json();
      setOpen(false);
      // notify other parts of the app that quick-clock completed a clock-in
      window.dispatchEvent(new CustomEvent('quick-clock-done', { detail: { action: 'in', status: json.status } }));
      toast({ title: "Clocked In", description: "Successfully clocked in" });
    } catch (e: any) {
      setError(e.message || 'Error');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClockOut = async () => {
    setError(null);
    setIsProcessing(true);
    try {
      // Check if user has clocked in today
      const statusRes = await fetch('/api/attendance/check-status');
      if (statusRes.ok) {
        const statusData = await statusRes.json();
        if (!statusData.hasClockedInToday) {
          toast({ title: "Cannot Clock Out", description: "You are not clocked in", variant: "destructive" });
          setIsProcessing(false);
          return;
        }
      }
      const pos = await getPosition();
      const fingerprint = generateDeviceFingerprint();
      await startCamera();

      // Wait for camera to initialize
      await new Promise(resolve => setTimeout(resolve, 1000));

      let dataUri: string | null = null;
      if (videoRef.current && canvasRef.current) {
        const v = videoRef.current;
        const c = canvasRef.current;

        // Wait for video to be ready
        if (v.videoWidth === 0 || v.videoHeight === 0) {
          throw new Error('Camera not ready. Please wait a moment and try again.');
        }

        c.width = v.videoWidth;
        c.height = v.videoHeight;
        const ctx = c.getContext('2d');
        if (!ctx) {
          throw new Error('Canvas context not available');
        }

        ctx.drawImage(v, 0, 0, v.videoWidth, v.videoHeight);
        dataUri = c.toDataURL('image/jpeg');

        // Validate dataUri
        if (!dataUri || dataUri === 'data:,') {
          throw new Error('Failed to capture image from camera. Please check camera permissions.');
        }
      } else {
        throw new Error('Camera not available');
      }

      // Extract face descriptor client-side
      console.log('[quick-clock] Extracting face descriptor from captured image');
      const faceDescriptor = await extractFaceDescriptor(dataUri);
      if (!faceDescriptor) {
        throw new Error('No face detected in captured image. Please ensure your face is clearly visible.');
      }
      console.log('[quick-clock] Face descriptor extracted successfully');

      // Get current user ID for face verification
      const userRes = await fetch('/api/auth/session');
      const userData = await userRes.json();
      const employeeId = userData?.user?.id;
      if (!employeeId) {
        throw new Error('Unable to identify user. Please log in again.');
      }

      // Verify face against stored encoding
      console.log('[quick-clock] Calling validate-face-presence API with descriptor');
      const verifyRes = await fetch('/api/validate-face-presence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ faceDescriptor: Array.from(faceDescriptor), employeeId }),
      });
      const verifyJson = await verifyRes.json();
      console.log('[quick-clock] Validate-face-presence response:', verifyJson);
      if (!verifyRes.ok || !verifyJson.isVerified) {
        throw new Error(verifyJson?.error || verifyJson?.message || 'Face verification failed');
      }

      // Check device registration
      console.log('[quick-clock] Checking device registration');
      const deviceCheckRes = await fetch('/api/attendance/verify-face', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fingerprint,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          faceAlreadyVerified: true  // Face already verified above
        }),
      });
      const deviceCheckJson = await deviceCheckRes.json();
      if (!deviceCheckRes.ok || !deviceCheckJson.verified) {
        if (deviceCheckJson.requiresDeviceRegistration) {
          // Try to register the device
          const registerRes = await fetch('/api/register-device', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fingerprint }),
          });
          const registerJson = await registerRes.json();
          if (registerRes.ok && registerJson.success) {
            toast({ title: "Device Registered", description: "Your device has been registered. Please try clocking out again." });
            setIsProcessing(false);
            return;
          } else {
            throw new Error(registerJson?.message || 'Device registration failed');
          }
        }
        throw new Error(deviceCheckJson?.message || 'Device verification failed');
      }

      const res = await fetch('/api/attendance/clock-out', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }) });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || 'Clock-out failed');
  setOpen(false);
  // notify other parts of the app that quick-clock completed a clock-out
  window.dispatchEvent(new CustomEvent('quick-clock-done', { detail: { action: 'out', hoursWorked: json.hoursWorked } }));
  toast({ title: "Clocked Out", description: `Hours worked: ${json.hoursWorked}` });
    } catch (e: any) {
      setError(e.message || 'Error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => setOpen(true)} size="icon" className="rounded-full p-3 shadow-lg">
          <Clock />
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-none w-[95vw] h-[90vh] max-h-[90vh] p-0 bg-black/95 backdrop-blur-sm">
          <div className="relative w-full h-full flex flex-col">
            {/* Header overlay */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/70 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h2 className="text-lg font-semibold">Attendance</h2>
                  <p className="text-sm text-white/80">Position your face in the camera</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Camera view - takes up most of the space */}
            <div className="flex-1 relative bg-black rounded-lg overflow-hidden mx-4 mt-16 mb-4">
              {error && (
                <div className="absolute top-4 left-4 right-4 z-20 bg-destructive/90 text-destructive-foreground p-3 rounded-md text-sm">
                  {error}
                </div>
              )}

              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isMobileDevice() && orientation === 'landscape' ? 'rotate-90' : ''
                }`}
                style={{
                  transform: isMobileDevice() && orientation === 'landscape' ? 'rotate(90deg) scale(1.2)' : 'none'
                }}
              />
              <canvas ref={canvasRef} className="hidden" />

              {/* Face guide overlay */}
              <div className="absolute inset-0 border-2 border-dashed border-white/50 rounded-lg pointer-events-none">
                <div className="absolute inset-8 border-2 border-white rounded-full opacity-70"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm font-medium text-center">
                  Position face here
                </div>
              </div>

              {/* Processing overlay */}
              {isProcessing && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                    <p className="text-sm">Processing...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom controls overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="flex gap-3 justify-center">
                <Button
                  variant="outline"
                  onClick={handleClockIn}
                  disabled={isProcessing}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex-1 max-w-xs"
                >
                  {isProcessing ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : <Clock className="h-4 w-4 mr-2" />}
                  Clock In
                </Button>
                <Button
                  variant="outline"
                  onClick={handleClockOut}
                  disabled={isProcessing}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 flex-1 max-w-xs"
                >
                  {isProcessing ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : <Clock className="h-4 w-4 mr-2" />}
                  Clock Out
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
