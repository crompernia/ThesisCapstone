import { NextResponse } from 'next/server';
import * as faceapi from 'face-api.js';
import { Canvas, Image, ImageData } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import { getDb } from '@/lib/db';
import { accounts } from '@/lib/schema';
import { eq } from 'drizzle-orm';

// Initialize face-api.js with canvas
const { createCanvas, loadImage } = require('canvas');

faceapi.env.monkeyPatch({
  Canvas: Canvas as any,
  Image: Image as any,
  ImageData: ImageData as any
});

// Download file from URL to path
async function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const tempDest = dest + '.tmp';
    const file = fs.createWriteStream(tempDest);

    console.log(`[validate-face-presence] Starting download for ${url} to ${tempDest}`);

    const req = https.get(url, (response) => {
      console.log(`[validate-face-presence] Download for ${url}: status ${response.statusCode}, content-length: ${response.headers['content-length']}`);
      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(tempDest, () => {}); // Clean up partial file
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      response.on('data', (chunk) => {
        file.write(chunk);
      });

      response.on('end', () => {
        file.end();
        console.log(`[validate-face-presence] Response ended, checking temp file size`);
        const stats = fs.statSync(tempDest);
        console.log(`[validate-face-presence] Temp file size: ${stats.size}`);
        // Move temp file to final destination
        fs.rename(tempDest, dest, (err) => {
          if (err) {
            console.error(`[validate-face-presence] Rename failed: ${err}`);
            fs.unlink(tempDest, () => {});
            reject(err);
          } else {
            console.log(`[validate-face-presence] Download completed successfully for ${url}`);
            resolve();
          }
        });
      });
    });

    req.on('error', (err) => {
      console.error(`[validate-face-presence] Request error for ${url}: ${err}`);
      file.close();
      fs.unlink(tempDest, () => {}); // Delete the file on error
      reject(err);
    });

    file.on('error', (err) => {
      console.error(`[validate-face-presence] File write error for ${url}: ${err}`);
      fs.unlink(tempDest, () => {});
      reject(err);
    });
  });
}

// Ensure models are downloaded
async function ensureModelsDownloaded(modelPath: string): Promise<void> {
  const models = [
    {
      name: 'ssd_mobilenetv1_model',
      files: [
        'ssd_mobilenetv1_model-weights_manifest.json',
        'ssd_mobilenetv1_model-shard1',
        'ssd_mobilenetv1_model-shard2'
      ]
    }
  ];

  const baseUrl = 'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/weights/';

  console.log('[validate-face-presence] ensureModelsDownloaded called with modelPath:', modelPath);

  for (const model of models) {
    for (const file of model.files) {
      const filePath = path.join(modelPath, file);
      const exists = fs.existsSync(filePath);
      console.log(`[validate-face-presence] Checking file: ${filePath}, exists: ${exists}`);
      let needsDownload = !exists;
      if (exists) {
        const stats = fs.statSync(filePath);
        console.log(`[validate-face-presence] File ${file} exists, size: ${stats.size}`);
        if (stats.size === 0) {
          console.log(`[validate-face-presence] File ${file} is empty, deleting and will download`);
          fs.unlinkSync(filePath);
          needsDownload = true;
        }
      }
      if (needsDownload) {
        console.log(`[validate-face-presence] Downloading ${file}...`);
        const url = baseUrl + file;
        console.log(`[validate-face-presence] Download URL: ${url}`);
        try {
          await downloadFile(url, filePath);
          console.log(`[validate-face-presence] Download completed for ${file}`);
        } catch (downloadError) {
          console.error(`[validate-face-presence] Download failed for ${file}:`, downloadError);
          throw downloadError;
        }

        // Validate the downloaded file
        if (file.endsWith('.json')) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            console.log(`[validate-face-presence] Validating JSON for ${file}, content length: ${content.length}`);
            JSON.parse(content); // Validate JSON
            console.log(`[validate-face-presence] JSON validation passed for ${file}`);
          } catch (error) {
            console.error(`[validate-face-presence] Invalid JSON in ${file}:`, error);
            fs.unlinkSync(filePath); // Delete invalid file
            throw error;
          }
        } else {
          const stats = fs.statSync(filePath);
          console.log(`[validate-face-presence] Non-JSON file ${file} downloaded, size: ${stats.size}`);
        }
      } else {
        console.log(`[validate-face-presence] File ${file} already exists and is valid`);
      }
    }
  }
}

// Load models once
let modelsLoaded = false;

async function loadModels() {
  if (modelsLoaded) return;

  try {
    // Use /tmp for serverless environments, fallback to local weights directory
    const isServerless = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;
    const modelPath = isServerless
      ? '/tmp/face-api-models'
      : path.join(process.cwd(), 'weights', 'face-api');

    console.log('[validate-face-presence] isServerless:', isServerless);
    console.log('[validate-face-presence] modelPath:', modelPath);

    // Ensure weights directory exists
    if (!fs.existsSync(modelPath)) {
      console.log('[validate-face-presence] Creating modelPath directory');
      fs.mkdirSync(modelPath, { recursive: true });
    } else {
      console.log('[validate-face-presence] modelPath directory exists');
    }

    // Download models if not present
    await ensureModelsDownloaded(modelPath);

    // Debug: Check files
    const manifestPath = path.join(modelPath, 'ssd_mobilenetv1_model-weights_manifest.json');
    console.log('[validate-face-presence] Checking manifestPath:', manifestPath);
    if (fs.existsSync(manifestPath)) {
      const stats = fs.statSync(manifestPath);
      console.log('[validate-face-presence] Manifest file exists, size:', stats.size);
      const content = fs.readFileSync(manifestPath, 'utf8');
      console.log('[validate-face-presence] Manifest file size (read):', content.length);
      console.log('[validate-face-presence] Manifest content preview:', content.substring(0, 100));
      try {
        JSON.parse(content);
        console.log('[validate-face-presence] Manifest JSON is valid');
      } catch (e) {
        console.error('[validate-face-presence] Manifest JSON is invalid:', e);
        throw e;
      }
    } else {
      console.error('[validate-face-presence] Manifest file does not exist');
    }

    await faceapi.nets.ssdMobilenetv1.loadFromDisk(modelPath);
    modelsLoaded = true;
    console.log('[validate-face-presence] Face-api.js models loaded successfully');
  } catch (error) {
    console.error('[validate-face-presence] Error loading face-api.js models:', error);
    throw error;
  }
}

// Convert uploaded file to canvas
async function fileToCanvas(file: File): Promise<Canvas> {
  try {
    const buffer = await file.arrayBuffer();
    const img = await loadImage(Buffer.from(buffer));
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return canvas;
  } catch (error) {
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';

    if (contentType.includes('multipart/form-data')) {
      // Handle FormData requests (legacy presence check)
      const formData = await req.formData();
      const imageFile = formData.get('image') as File;
      const employeeId = formData.get('employeeId') as string;

      if (!imageFile) {
        return NextResponse.json({
          isVerified: false,
          hasFace: false,
          error: 'No image provided'
        }, { status: 400 });
      }

      // Convert file to canvas
      const canvas = await fileToCanvas(imageFile);

      // If no employeeId, just check for face presence
      if (!employeeId) {
        const detections = await faceapi.detectAllFaces(canvas as any);
        const hasFace = detections.length === 1;
        return NextResponse.json({
          hasFace,
          faceCount: detections.length
        });
      }

      // Legacy verification mode (should not be used with new client-side extraction)
      await loadModels();
      const detections = await faceapi.detectAllFaces(canvas as any)
        .withFaceLandmarks()
        .withFaceDescriptors();

      if (detections.length === 0) {
        return NextResponse.json({
          isVerified: false,
          error: 'No face detected in the image'
        }, { status: 400 });
      }

      if (detections.length > 1) {
        return NextResponse.json({
          isVerified: false,
          error: 'Multiple faces detected. Please provide an image with only one face.'
        }, { status: 400 });
      }

      const capturedFaceDescriptor = detections[0].descriptor;

      // Retrieve and compare with stored encoding
      const db = await getDb();
      const employee = await db.select().from(accounts).where(eq(accounts.id, employeeId)).limit(1);

      if (employee.length === 0) {
        return NextResponse.json({
          isVerified: false,
          error: 'Employee not found'
        }, { status: 404 });
      }

      const storedFaceEncoding = (employee[0] as any).faceEncoding;
      if (!storedFaceEncoding) {
        return NextResponse.json({
          isVerified: false,
          error: 'No face encoding found for this employee. Please capture face data first.'
        }, { status: 400 });
      }

      let storedDescriptor: Float32Array;
      try {
        const storedArray = JSON.parse(storedFaceEncoding);
        storedDescriptor = new Float32Array(storedArray);
      } catch (error) {
        console.error('[validate-face-presence] Error parsing stored face encoding:', error);
        return NextResponse.json({
          isVerified: false,
          error: 'Invalid face encoding data stored for employee'
        }, { status: 500 });
      }

      const distance = faceapi.euclideanDistance(capturedFaceDescriptor, storedDescriptor);
      const threshold = 0.6;
      const isVerified = distance < threshold;

      console.log(`[validate-face-presence] Face verification - Distance: ${distance.toFixed(4)}, Threshold: ${threshold}, Verified: ${isVerified}`);

      return NextResponse.json({
        isVerified,
        distance: parseFloat(distance.toFixed(4)),
        threshold,
        faceCount: detections.length,
        message: isVerified ? 'Face verified successfully' : 'Face verification failed'
      });

    } else {
      // Handle JSON requests (new client-side descriptor verification)
      const body = await req.json();
      const { faceDescriptor, employeeId } = body;

      if (!faceDescriptor || !employeeId) {
        return NextResponse.json({
          isVerified: false,
          error: 'Face descriptor and employeeId required'
        }, { status: 400 });
      }

      // Parse the provided face descriptor
      let capturedDescriptor: Float32Array;
      try {
        capturedDescriptor = new Float32Array(faceDescriptor);
      } catch (error) {
        return NextResponse.json({
          isVerified: false,
          error: 'Invalid face descriptor format'
        }, { status: 400 });
      }

      // Retrieve the stored face encoding from the database
      const db = await getDb();
      const employee = await db.select().from(accounts).where(eq(accounts.id, employeeId)).limit(1);

      if (employee.length === 0) {
        return NextResponse.json({
          isVerified: false,
          error: 'Employee not found'
        }, { status: 404 });
      }

      const storedFaceEncoding = (employee[0] as any).faceEncoding;
      if (!storedFaceEncoding) {
        return NextResponse.json({
          isVerified: false,
          error: 'No face encoding found for this employee. Please capture face data first.'
        }, { status: 400 });
      }

      // Parse the stored face encoding
      let storedDescriptor: Float32Array;
      try {
        const storedArray = JSON.parse(storedFaceEncoding);
        storedDescriptor = new Float32Array(storedArray);
      } catch (error) {
        console.error('[validate-face-presence] Error parsing stored face encoding:', error);
        return NextResponse.json({
          isVerified: false,
          error: 'Invalid face encoding data stored for employee'
        }, { status: 500 });
      }

      // Calculate the Euclidean distance between the two face descriptors
      const distance = faceapi.euclideanDistance(capturedDescriptor, storedDescriptor);

      // Set a threshold for face recognition (0.6 is a common threshold for face-api.js)
      const threshold = 0.6;
      const isVerified = distance < threshold;

      console.log(`[validate-face-presence] Face verification - Distance: ${distance.toFixed(4)}, Threshold: ${threshold}, Verified: ${isVerified}`);

      return NextResponse.json({
        isVerified,
        distance: parseFloat(distance.toFixed(4)),
        threshold,
        message: isVerified ? 'Face verified successfully' : 'Face verification failed'
      });
    }

  } catch (err: any) {
    console.error('[validate-face-presence] server error', err);
    return NextResponse.json({
      isVerified: false,
      error: err?.message || 'Server error'
    }, { status: 500 });
  }
}