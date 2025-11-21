import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Detects if the current device is a mobile device
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         (window.innerWidth <= 768 && window.innerHeight <= 1024);
}

/**
 * Gets optimized camera constraints for mobile vs desktop
 */
export function getOptimizedCameraConstraints(): MediaStreamConstraints {
  const isMobile = isMobileDevice();

  if (isMobile) {
    return {
      video: {
        width: { ideal: 640, max: 1280 },
        height: { ideal: 480, max: 720 },
        frameRate: { ideal: 15, max: 30 },
        facingMode: 'user',
        aspectRatio: { ideal: 4/3 },
        // Disable audio processing features for better performance
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      },
      audio: false
    };
  }

  // Desktop constraints
  return {
    video: {
      width: { ideal: 640, max: 1280 },
      height: { ideal: 480, max: 720 },
      frameRate: { ideal: 30, max: 60 },
      facingMode: 'user'
    },
    audio: false
  };
}

/**
 * Gets face capture optimized constraints (higher quality for reference photos)
 */
export function getFaceCaptureConstraints(): MediaStreamConstraints {
  const isMobile = isMobileDevice();

  if (isMobile) {
    return {
      video: {
        width: { ideal: 640, max: 1280 },
        height: { ideal: 480, max: 720 },
        frameRate: { ideal: 15, max: 30 },
        facingMode: 'user',
        aspectRatio: { ideal: 4/3 }
      },
      audio: false
    };
  }

  return {
    video: {
      width: { ideal: 640 },
      height: { ideal: 480 },
      facingMode: 'user'
    },
    audio: false
  };
}
