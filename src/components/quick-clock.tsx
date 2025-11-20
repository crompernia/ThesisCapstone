"use client";

import * as React from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Clock, X, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function QuickClock() {
    const { toast } = useToast();
    const [open, setOpen] = React.useState(false);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [autoAction, setAutoAction] = React.useState<'in' | 'out' | null>(null);
    const [showClockIn, setShowClockIn] = React.useState(true);
    const videoRef = React.useRef<HTMLVideoElement | null>(null);
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    const [error, setError] = React.useState<string | null>(null);

  const getPosition = async (): Promise<GeolocationPosition> => {
    if (!navigator.geolocation) throw new Error('Geolocation not available');
    return new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, () => reject(new Error('Geolocation permission denied')), { timeout: 4000 });
    });
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
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

  const handleClockIn = async () => {
    setError(null);
    setIsProcessing(true);
    try {
      const pos = await getPosition();
      await startCamera();
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

      // send captured photo + location to verification endpoint
      const verifyRes = await fetch('/api/attendance/verify-face', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dataUri, latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
      });
      const verifyJson = await verifyRes.json();
      if (!verifyRes.ok || !verifyJson.verified) throw new Error(verifyJson?.message || 'Face verification failed');

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
      await startCamera();
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

      const verifyRes = await fetch('/api/attendance/verify-face', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dataUri, latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
      });
      const verifyJson = await verifyRes.json();
      if (!verifyRes.ok || !verifyJson.verified) throw new Error(verifyJson?.message || 'Face verification failed');

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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Attendance</DialogTitle>
            <DialogDescription>Use the camera to clock in/out</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {error && <div className="text-destructive">{error}</div>}
            <div className="relative aspect-video w-full max-w-md mx-auto bg-muted rounded-md overflow-hidden">
              <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
              <canvas ref={canvasRef} className="hidden" />
            </div>
            <div className="flex gap-2 justify-center">
               <Button variant="outline" onClick={handleClockIn} disabled={isProcessing}>{isProcessing ? <Loader2 className="animate-spin" /> : 'Clock In'}</Button>
               <Button variant="outline" onClick={handleClockOut} disabled={isProcessing}>{isProcessing ? <Loader2 className="animate-spin" /> : 'Clock Out'}</Button>
               <Button variant="ghost" onClick={() => setOpen(false)}><X /></Button>
             </div>
          </div>

        </DialogContent>
      </Dialog>
    </>
  );
}
