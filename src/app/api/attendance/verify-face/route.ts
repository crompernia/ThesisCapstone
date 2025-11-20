import { NextResponse } from 'next/server';
import { getCurrentUserId } from '@/lib/auth';
import { getDb } from '@/lib/db';
import { accounts } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import * as faceapi from 'face-api.js';
import { Canvas, Image, ImageData } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';

// Configure face-api.js for Node.js
const { createCanvas, loadImage } = require('canvas');

// Monkey patch for Node.js environment
faceapi.env.monkeyPatch({
  Canvas: Canvas as any,
  Image: Image as any,
  ImageData: ImageData as any
});

// Load models once
let modelsLoaded = false;

async function loadModels() {
  if (modelsLoaded) return;

  try {
    // Load models from node_modules/face-api.js/weights
    const modelPath = path.join(process.cwd(), 'node_modules', 'face-api.js', 'weights');

    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromDisk(modelPath),
      faceapi.nets.faceLandmark68Net.loadFromDisk(modelPath),
      faceapi.nets.faceRecognitionNet.loadFromDisk(modelPath)
    ]);

    modelsLoaded = true;
    console.log('[verify-face] Face-api.js models loaded successfully');
  } catch (error) {
    console.error('[verify-face] Error loading face-api.js models:', error);
    throw error;
  }
}

// Convert base64 data URI to canvas
function dataUriToCanvas(dataUri: string): Canvas {
  const base64Data = dataUri.replace(/^data:image\/[a-z]+;base64,/, '');
  const buffer = Buffer.from(base64Data, 'base64');

  // Create image from buffer
  const img = new Image();
  img.src = buffer;

  // Create canvas and draw image
  const canvas = new Canvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  return canvas;
}

// Load image from file path or URL
async function loadImageFromPath(imagePath: string): Promise<Canvas> {
  try {
    // If it's a full URL, we need to handle it differently
    if (imagePath.startsWith('http')) {
      // For now, assume local file paths
      throw new Error('URL images not supported yet');
    }

    // Assume it's a local file path relative to public directory
    const fullPath = path.join(process.cwd(), 'public', imagePath);

    if (!fs.existsSync(fullPath)) {
      throw new Error(`Image file not found: ${fullPath}`);
    }

    const buffer = fs.readFileSync(fullPath);
    const img = new Image();
    img.src = buffer;

    const canvas = new Canvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    return canvas;
  } catch (error) {
    console.error('[verify-face] Error loading image from path:', error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    // Load models if not already loaded
    await loadModels();

    const body = await req.json();
    console.debug('[verify-face] body keys:', Object.keys(body || {}));
    const { dataUri } = body;

    if (!dataUri) {
      return NextResponse.json({ verified: false, message: 'No image provided' }, { status: 400 });
    }

    // Get current user
    const userId = await getCurrentUserId();
    if (!userId) {
      return NextResponse.json({ verified: false, message: 'Not authenticated' }, { status: 401 });
    }

    // Get user's stored photo
    const db = await getDb();
    const userData = await db
      .select({ photo: accounts.photo })
      .from(accounts)
      .where(eq(accounts.id, userId))
      .limit(1);

    if (!userData.length || !userData[0].photo) {
      return NextResponse.json({
        verified: false,
        message: 'No reference photo found. Please contact HR to upload your photo.'
      }, { status: 400 });
    }

    const referencePhotoPath = userData[0].photo;

    try {
      // Load captured image
      const capturedCanvas = dataUriToCanvas(dataUri);

      // Load reference image
      const referenceCanvas = await loadImageFromPath(referencePhotoPath);

      // Detect faces in both images
      const capturedDetection = await faceapi
        .detectSingleFace(capturedCanvas as any)
        .withFaceLandmarks()
        .withFaceDescriptor();

      const referenceDetection = await faceapi
        .detectSingleFace(referenceCanvas as any)
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (!capturedDetection) {
        return NextResponse.json({
          verified: false,
          message: 'No face detected in captured image'
        }, { status: 400 });
      }

      if (!referenceDetection) {
        return NextResponse.json({
          verified: false,
          message: 'No face detected in reference photo'
        }, { status: 400 });
      }

      // Compare face descriptors
      const distance = faceapi.euclideanDistance(
        capturedDetection.descriptor,
        referenceDetection.descriptor
      );

      // Lower distance means better match (typically < 0.6 is a good match)
      const isMatch = distance < 0.6;

      console.log(`[verify-face] Face comparison distance: ${distance}, match: ${isMatch}`);

      return NextResponse.json({
        verified: isMatch,
        confidence: 1 - distance, // Convert distance to confidence score
        message: isMatch ? 'Face verified successfully' : 'Face verification failed'
      });

    } catch (faceError: any) {
      console.error('[verify-face] Face processing error:', faceError);
      return NextResponse.json({
        verified: false,
        message: 'Face processing failed. Please try again.'
      }, { status: 500 });
    }

  } catch (err: any) {
    console.error('[verify-face] server error', err);
    return NextResponse.json({ verified: false, message: err?.message || 'Server error', stack: err?.stack }, { status: 500 });
  }
}
