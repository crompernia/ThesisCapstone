import { NextResponse } from 'next/server';
import { getCurrentUserId } from '@/lib/auth';
import { getDb } from '@/lib/db';
import { accounts } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { hashFingerprint } from '@/lib/deviceFingerprint';
import * as faceapi from 'face-api.js';
import { Canvas, Image, ImageData } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

// Initialize face-api.js with canvas
const { createCanvas, loadImage } = require('canvas');

faceapi.env.monkeyPatch({
  Canvas: Canvas as any,
  Image: Image as any,
  ImageData: ImageData as any
});

// Download file from URL to path with redirect handling
async function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const request = (url: string, attempt: number = 0) => {
      if (attempt > 3) {
        reject(new Error(`Failed to download ${url} after 3 attempts`));
        return;
      }

      const tempDest = dest + '.tmp';
      const file = fs.createWriteStream(tempDest);

      const req = https.get(url, (response) => {
        console.log(`[verify-face] Download attempt ${attempt + 1} for ${url}: status ${response.statusCode}`);
        if (response.statusCode === 302 || response.statusCode === 301) {
          // Handle redirect
          const redirectUrl = response.headers.location;
          console.log(`[verify-face] Redirect to: ${redirectUrl}`);
          if (redirectUrl) {
            file.close();
            fs.unlink(tempDest, () => {}); // Clean up partial file
            request(redirectUrl, attempt + 1); // Retry with new URL
            return;
          }
        }
        if (response.statusCode !== 200) {
          file.close();
          fs.unlink(tempDest, () => {}); // Clean up partial file
          reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
          return;
        }

        response.pipe(file);
        file.on('finish', () => {
          file.close();
          // Move temp file to final destination
          fs.rename(tempDest, dest, (err) => {
            if (err) {
              fs.unlink(tempDest, () => {});
              reject(err);
            } else {
              resolve();
            }
          });
        });
      });

      req.on('error', (err) => {
        file.close();
        fs.unlink(tempDest, () => {}); // Delete the file on error
        reject(err);
      });

      file.on('error', (err) => {
        fs.unlink(tempDest, () => {});
        reject(err);
      });
    };
    request(url, 0);
  });
}

// Ensure models are downloaded
async function ensureModelsDownloaded(modelPath: string): Promise<void> {
  const models = [
    {
      name: 'face_landmark_68_model',
      files: [
        'face_landmark_68_model-weights_manifest.json',
        'face_landmark_68_model-shard1'
      ]
    },
    {
      name: 'face_recognition_model',
      files: [
        'face_recognition_model-weights_manifest.json',
        'face_recognition_model-shard1',
        'face_recognition_model-shard2'
      ]
    },
    {
      name: 'ssd_mobilenetv1_model',
      files: [
        'ssd_mobilenetv1_model-weights_manifest.json',
        'ssd_mobilenetv1_model-shard1',
        'ssd_mobilenetv1_model-shard2'
      ]
    }
  ];

  const baseUrl = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/';

  for (const model of models) {
    for (const file of model.files) {
      const filePath = path.join(modelPath, file);
      if (!fs.existsSync(filePath)) {
        console.log(`[verify-face] Downloading ${file}...`);
        const url = baseUrl + file;
        await downloadFile(url, filePath);

        // Validate the downloaded file
        if (file.endsWith('.json')) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            JSON.parse(content); // Validate JSON
          } catch (error) {
            console.error(`[verify-face] Invalid JSON in ${file}:`, error);
            fs.unlinkSync(filePath); // Delete invalid file
            throw error;
          }
        }
      }
    }
  }
}

// Load models once
let modelsLoaded = false;

async function loadModels() {
  if (modelsLoaded) {
    console.log('[verify-face] Models already loaded');
    return;
  }

  try {
    // Use /tmp for serverless environments, fallback to local weights folder
    const isServerless = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;
    const modelPath = isServerless
      ? '/tmp/face-api-models'
      : path.join(process.cwd(), 'weights', 'face-api');

    console.log('[verify-face] Model path:', modelPath);

    // Ensure weights directory exists
    if (!fs.existsSync(modelPath)) {
      console.log('[verify-face] Creating model directory');
      fs.mkdirSync(modelPath, { recursive: true });
    }

    // Download models if not present
    await ensureModelsDownloaded(modelPath);

    console.log('[verify-face] Loading SSD MobileNet v1...');
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(modelPath);
    console.log('[verify-face] Loading face landmark 68...');
    await faceapi.nets.faceLandmark68Net.loadFromDisk(modelPath);
    console.log('[verify-face] Loading face recognition...');
    await faceapi.nets.faceRecognitionNet.loadFromDisk(modelPath);
    modelsLoaded = true;
    console.log('[verify-face] All face-api.js models loaded successfully');
  } catch (error) {
    console.error('[verify-face] Error loading face-api.js models:', error);
    throw error;
  }
}

// Convert dataUri to canvas
async function dataUriToCanvas(dataUri: string): Promise<Canvas> {
  try {
    // Remove data URL prefix
    const base64Data = dataUri.replace(/^data:image\/[a-z]+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const img = await loadImage(buffer);
    const canvas = new Canvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return canvas;
  } catch (error) {
    throw error;
  }
}


export async function POST(req: Request) {
  try {
    await loadModels();

    const body = await req.json();
    console.debug('[verify-face] body keys:', Object.keys(body || {}));
    const { fingerprint, dataUri, faceAlreadyVerified } = body;

    if (!fingerprint) {
      return NextResponse.json({ verified: false, message: 'No device fingerprint provided' }, { status: 400 });
    }

    // Get current user
    const userId = await getCurrentUserId();
    if (!userId) {
      return NextResponse.json({ verified: false, message: 'Not authenticated' }, { status: 401 });
    }

    // Get user's registered devices and face encoding
    console.log('[verify-face] Retrieving data for userId:', userId);
    const db = await getDb();
    const userData = await db
      .select({ registeredDevices: accounts.registeredDevices, faceEncoding: accounts.faceEncoding })
      .from(accounts)
      .where(eq(accounts.id, userId))
      .limit(1);

    console.log('[verify-face] Query result:', userData.length > 0 ? 'found' : 'not found');
    if (userData.length > 0) {
      console.log('[verify-face] Face encoding present:', !!userData[0].faceEncoding);
    }

    if (!userData.length) {
      return NextResponse.json({
        verified: false,
        message: 'User not found'
      }, { status: 400 });
    }

    const registeredDevices = userData[0].registeredDevices || [];
    const storedFaceEncoding = userData[0].faceEncoding;
    const currentFingerprintHash = hashFingerprint(fingerprint);

    // Check if device is registered
    const isDeviceRegistered = Array.isArray(registeredDevices) &&
      registeredDevices.includes(currentFingerprintHash);

    console.log(`[verify-face] Device registered: ${isDeviceRegistered}, Photo provided: ${!!dataUri}, Face encoding stored: ${!!storedFaceEncoding}, Face already verified: ${faceAlreadyVerified}`);

    if (!isDeviceRegistered) {
      return NextResponse.json({
        verified: false,
        requiresDeviceRegistration: true,
        message: 'Device not recognized. Please register this device first.'
      });
    }

    // If face is already verified client-side, skip face verification
    if (faceAlreadyVerified) {
      console.log('[verify-face] Face already verified client-side, skipping face verification');
    } else {
      // Require face encoding for verification
      if (!storedFaceEncoding) {
        console.log('[verify-face] No stored face encoding found for employee');
        return NextResponse.json({
          verified: false,
          message: 'Face verification required but no face data stored. Please contact HR to set up face recognition.'
        }, { status: 400 });
      }

      // If no photo provided, require it for face verification
      if (!dataUri) {
        return NextResponse.json({
          verified: false,
          message: 'Photo required for face verification'
        }, { status: 400 });
      }
    }

    // Extract face descriptor from captured photo (skip if already verified)
    let capturedDescriptor: Float32Array | null = null;
    if (!faceAlreadyVerified) {
      try {
        console.log('[verify-face] Starting face detection on captured image');
        const canvas = await dataUriToCanvas(dataUri);
        console.log('[verify-face] Canvas created, dimensions:', canvas.width, 'x', canvas.height);
        const detections = await faceapi.detectAllFaces(canvas as any)
          .withFaceLandmarks()
          .withFaceDescriptors();

        console.log('[verify-face] Face detection completed, detections found:', detections.length);

        if (detections.length === 0) {
          console.log('[verify-face] No faces detected - rejecting verification');
          return NextResponse.json({
            verified: false,
            message: 'No face detected in the captured photo'
          }, { status: 400 });
        }

        if (detections.length > 1) {
          console.log('[verify-face] Multiple faces detected:', detections.length, '- rejecting');
          return NextResponse.json({
            verified: false,
            message: 'Multiple faces detected. Please ensure only one face is visible.'
          }, { status: 400 });
        }

        // Check face size and confidence - reject if face is too small or low confidence (likely false positive)
        const detection = detections[0].detection;
        const faceBox = detection.box;
        const faceArea = faceBox.width * faceBox.height;
        const confidence = detection.score;
        const minFaceArea = 10000; // Minimum area for valid face (adjust as needed)
        const minConfidence = 0.8; // Minimum confidence score
        console.log('[verify-face] Detected face box:', faceBox, 'area:', faceArea, 'confidence:', confidence);

        if (faceArea < minFaceArea || confidence < minConfidence) {
          console.log('[verify-face] Face too small or low confidence (area:', faceArea, 'confidence:', confidence, ') - rejecting');
          return NextResponse.json({
            verified: false,
            message: 'Face detected is not clear enough. Please ensure your face is clearly visible and well-lit.'
          }, { status: 400 });
        }

        console.log('[verify-face] Single valid face detected, proceeding with verification');
        capturedDescriptor = detections[0].descriptor;
      } catch (error) {
        console.error('[verify-face] Error processing captured photo:', error);
        return NextResponse.json({
          verified: false,
          message: 'Failed to process captured photo'
        }, { status: 500 });
      }
    }

    // Compare with stored face encoding (skip if already verified)
    if (!faceAlreadyVerified) {
      try {
        const storedDescriptor = new Float32Array(JSON.parse(storedFaceEncoding));
        const distance = faceapi.euclideanDistance(capturedDescriptor!, storedDescriptor);

        console.log(`[verify-face] Face distance: ${distance}`);

        // Threshold for face similarity (lower is more similar)
        const SIMILARITY_THRESHOLD = 0.6;

        if (distance > SIMILARITY_THRESHOLD) {
          return NextResponse.json({
            verified: false,
            message: 'Face verification failed. The captured face does not match the registered face.'
          });
        }

      } catch (error) {
        console.error('[verify-face] Error comparing faces:', error);
        return NextResponse.json({
          verified: false,
          message: 'Failed to compare faces'
        }, { status: 500 });
      }
    }

    // Both device and face verified
    return NextResponse.json({
      verified: true,
      message: 'Device and face verified successfully'
    });

  } catch (err: any) {
    console.error('[verify-face] server error', err);
    return NextResponse.json({ verified: false, message: err?.message || 'Server error', stack: err?.stack }, { status: 500 });
  }
}
