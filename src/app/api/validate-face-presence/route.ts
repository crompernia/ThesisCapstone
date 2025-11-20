import { NextResponse } from 'next/server';
import * as faceapi from 'face-api.js';
import { Canvas, Image, ImageData } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';

// Initialize face-api.js with canvas
const { createCanvas, loadImage } = require('canvas');

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
    const modelPath = path.join(process.cwd(), 'node_modules', 'face-api.js', 'weights');

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