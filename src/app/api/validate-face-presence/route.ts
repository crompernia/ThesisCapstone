import { NextResponse } from 'next/server';
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
        console.log(`[validate-face-presence] Download attempt ${attempt + 1} for ${url}: status ${response.statusCode}`);
        if (response.statusCode === 302 || response.statusCode === 301) {
          // Handle redirect
          const redirectUrl = response.headers.location;
          console.log(`[validate-face-presence] Redirect to: ${redirectUrl}`);
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
      name: 'ssd_mobilenetv1_model',
      files: [
        'ssd_mobilenetv1_model-weights_manifest.json',
        'ssd_mobilenetv1_model-shard1',
        'ssd_mobilenetv1_model-shard2'
      ]
    }
  ];

  const baseUrl = 'https://github.com/justadudewhohacks/face-api.js/raw/master/weights/';

  for (const model of models) {
    for (const file of model.files) {
      const filePath = path.join(modelPath, file);
      if (!fs.existsSync(filePath)) {
        console.log(`[validate-face-presence] Downloading ${file}...`);
        const url = baseUrl + file;
        await downloadFile(url, filePath);

        // Validate the downloaded file
        if (file.endsWith('.json')) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            JSON.parse(content); // Validate JSON
          } catch (error) {
            console.error(`[validate-face-presence] Invalid JSON in ${file}:`, error);
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
    const manifestPath = path.join(modelPath, 'ssd_mobilenetv1_model-weights_manifest.json');
    if (fs.existsSync(manifestPath)) {
      const content = fs.readFileSync(manifestPath, 'utf8');
      console.log('[validate-face-presence] Manifest file size:', content.length);
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
function fileToCanvas(file: File): Promise<Canvas> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const img = new Image();
        img.onload = () => {
          const canvas = new Canvas(img.width, img.height);
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          resolve(canvas);
        };
        img.onerror = reject;
        img.src = e.target?.result as string;
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function POST(req: Request) {
  try {
    await loadModels();

    const formData = await req.formData();
    const imageFile = formData.get('image') as File;

    if (!imageFile) {
      return NextResponse.json({ hasFace: false, error: 'No image provided' }, { status: 400 });
    }

    // Convert file to canvas
    const canvas = await fileToCanvas(imageFile);

    // Detect faces
    const detections = await faceapi.detectAllFaces(canvas as any);

    const hasFace = detections.length > 0;

    return NextResponse.json({
      hasFace,
      faceCount: detections.length
    });

  } catch (err: any) {
    console.error('[validate-face-presence] server error', err);
    return NextResponse.json({
      hasFace: false,
      error: err?.message || 'Server error'
    }, { status: 500 });
  }
}