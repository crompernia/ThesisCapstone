import { NextResponse } from 'next/server';
import * as faceapi from 'face-api.js';
import { Canvas, Image, ImageData } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import { getDb } from '@/lib/db';
import { accounts } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { getCurrentUserId } from '@/lib/auth';

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
        console.log(`[store-face-encoding] Download attempt ${attempt + 1} for ${url}: status ${response.statusCode}`);
        if (response.statusCode === 302 || response.statusCode === 301) {
          // Handle redirect
          const redirectUrl = response.headers.location;
          console.log(`[store-face-encoding] Redirect to: ${redirectUrl}`);
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
    }
  ];

  const baseUrl = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/';

  for (const model of models) {
    for (const file of model.files) {
      const filePath = path.join(modelPath, file);
      if (!fs.existsSync(filePath)) {
        console.log(`[store-face-encoding] Downloading ${file}...`);
        const url = baseUrl + file;
        await downloadFile(url, filePath);

        // Validate the downloaded file
        if (file.endsWith('.json')) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            const manifest = JSON.parse(content); // Validate JSON
            console.log(`[store-face-encoding] Manifest for ${model.name}:`, JSON.stringify(manifest, null, 2));
          } catch (error) {
            console.error(`[store-face-encoding] Invalid JSON in ${file}:`, error);
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
  if (modelsLoaded) return;

  try {
    // Use /tmp for serverless environments, fallback to node_modules
    const isServerless = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;
    const modelPath = isServerless
      ? '/tmp/face-api-models'
      : path.join(process.cwd(), 'node_modules', 'face-api.js', 'weights');

    // Ensure weights directory exists
    if (!fs.existsSync(modelPath)) {
      fs.mkdirSync(modelPath, { recursive: true });
    }

    // Download models if not present
    await ensureModelsDownloaded(modelPath);

    // Debug: Check files
    const manifestPath = path.join(modelPath, 'face_landmark_68_model-weights_manifest.json');
    if (fs.existsSync(manifestPath)) {
      const content = fs.readFileSync(manifestPath, 'utf8');
      console.log('[store-face-encoding] Manifest file size:', content.length);
      try {
        JSON.parse(content);
        console.log('[store-face-encoding] Manifest JSON is valid');
      } catch (e) {
        console.error('[store-face-encoding] Manifest JSON is invalid:', e);
        throw e;
      }
    } else {
      console.error('[store-face-encoding] Manifest file does not exist');
    }

    await faceapi.nets.faceLandmark68Net.loadFromDisk(modelPath);
    await faceapi.nets.faceRecognitionNet.loadFromDisk(modelPath);
    modelsLoaded = true;
    console.log('[store-face-encoding] Face-api.js models loaded successfully');
  } catch (error) {
    console.error('[store-face-encoding] Error loading face-api.js models:', error);
    throw error;
  }
}

// Convert uploaded file to canvas
async function fileToCanvas(file: File): Promise<Canvas> {
  try {
    const buffer = await file.arrayBuffer();
    const img = await loadImage(Buffer.from(buffer));
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

    const formData = await req.formData();
    const imageFile = formData.get('image') as File;
    const employeeId = formData.get('employeeId') as string;

    if (!imageFile) {
      return NextResponse.json({ 
        success: false, 
        error: 'No image provided' 
      }, { status: 400 });
    }

    // employeeId is optional - if not provided, we'll return the face encoding for storage

    // Convert file to canvas
    const canvas = await fileToCanvas(imageFile);

    // Detect face and get face descriptors
    const detections = await faceapi.detectAllFaces(canvas as any)
      .withFaceLandmarks()
      .withFaceDescriptors();

    if (detections.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'No face detected in the image' 
      }, { status: 400 });
    }

    if (detections.length > 1) {
      return NextResponse.json({ 
        success: false, 
        error: 'Multiple faces detected. Please provide an image with only one face.' 
      }, { status: 400 });
    }

    // Get the face descriptor (128-dimensional vector)
    const faceDescriptor = detections[0].descriptor;
    
    // Convert the face descriptor array to a string for storage
    const faceEncodingString = JSON.stringify(Array.from(faceDescriptor));

    // If employeeId is provided, store in database; otherwise return the encoding
    if (employeeId && employeeId !== 'temp') {
      console.log('[store-face-encoding] Storing face encoding for employeeId:', employeeId);
      const db = await getDb();
      await db.update(accounts)
        .set({ faceEncoding: faceEncodingString })
        .where(eq(accounts.id, employeeId));
      console.log('[store-face-encoding] Face encoding stored successfully for employeeId:', employeeId);

      return NextResponse.json({
        success: true,
        message: 'Face encoding stored successfully'
      });
    } else {
      console.log('[store-face-encoding] Returning face encoding for temp storage');
      // Return the face encoding for use in employee creation
      return NextResponse.json({
        success: true,
        faceEncoding: faceEncodingString,
        message: 'Face encoding extracted successfully'
      });
    }

  } catch (err: any) {
    console.error('[store-face-encoding] server error', err);
    return NextResponse.json({
      success: false,
      error: err?.message || 'Server error'
    }, { status: 500 });
  }
}