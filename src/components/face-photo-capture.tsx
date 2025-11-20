"use client";

import * as React from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Camera, X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FacePhotoCaptureProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPhotoCaptured: (dataUri: string) => void;
  title?: string;
  description?: string;
}

export default function FacePhotoCapture({
  open,
  onOpenChange,
  onPhotoCaptured,
  title = "Capture Face Reference Photo",
  description = "Please position your face in the center and ensure good lighting for the best results."
}: FacePhotoCaptureProps) {
  const { toast } = useToast();
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [isCapturing, setIsCapturing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [stream, setStream] = React.useState<MediaStream | null>(null);

  const startCamera = async () => {
    try {
      setError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user'
        }
      });

      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err: any) {
      setError('Unable to access camera. Please check permissions.');
      console.error('Camera access error:', err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const validateFace = async (imageData: string): Promise<boolean> => {
    try {
      // Convert base64 to blob for face-api.js validation
      const response = await fetch(imageData);
      const blob = await response.blob();

      // Create FormData to send to our validation endpoint
      const formData = new FormData();
      formData.append('image', blob);

      // Call a simple face detection endpoint (we'll create this)
      const result = await fetch('/api/validate-face-presence', {
        method: 'POST',
        body: formData
      });

      if (!result.ok) {
        throw new Error('Face validation failed');
      }

      const data = await result.json();
      return data.hasFace;
    } catch (err) {
      console.error('Face validation error:', err);
      return false;
    }
  };

  const capturePhoto = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setIsCapturing(true);
    setError(null);

    try {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (!ctx) throw new Error('Canvas context not available');

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw current video frame to canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert to data URL
      const dataUri = canvas.toDataURL('image/jpeg', 0.9);

      // Validate that a face is present
      const hasFace = await validateFace(dataUri);

      if (!hasFace) {
        setError('No face detected. Please ensure your face is clearly visible and try again.');
        setIsCapturing(false);
        return;
      }

      // Success - return the captured photo
      onPhotoCaptured(dataUri);
      onOpenChange(false);

      toast({
        title: "Photo Captured",
        description: "Face reference photo captured successfully.",
      });

    } catch (err: any) {
      setError('Failed to capture photo. Please try again.');
      console.error('Photo capture error:', err);
    } finally {
      setIsCapturing(false);
    }
  };

  React.useEffect(() => {
    if (open) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md text-sm text-destructive">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <div className="relative aspect-video w-full bg-muted rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            <canvas ref={canvasRef} className="hidden" />

            {/* Camera overlay guide */}
            <div className="absolute inset-0 border-2 border-dashed border-primary/50 rounded-lg pointer-events-none">
              <div className="absolute inset-4 border-2 border-primary rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-sm font-medium">
                Position face here
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground text-center">
            Ensure good lighting and position your face within the circle
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isCapturing}
          >
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button
            onClick={capturePhoto}
            disabled={isCapturing || !!error}
          >
            {isCapturing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Capturing...
              </>
            ) : (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Capture Photo
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}