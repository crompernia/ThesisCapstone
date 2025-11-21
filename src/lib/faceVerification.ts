"use client";

import * as faceapi from 'face-api.js';

// Global variable to track if models are loaded
let modelsLoaded = false;

/**
 * Load face-api.js models required for face verification
 */
export async function loadFaceModels(): Promise<void> {
  if (modelsLoaded) return;

  try {
    // Load models from the public weights directory
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/weights/face-api');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/weights/face-api');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/weights/face-api');

    modelsLoaded = true;
    console.log('Face-api.js models loaded successfully');
  } catch (error) {
    console.error('Error loading face-api.js models:', error);
    throw error;
  }
}

/**
 * Extract face descriptor from an image data URL
 * @param imageData - Base64 data URL of the image
 * @returns Face descriptor as Float32Array or null if no face detected
 */
export async function extractFaceDescriptor(imageData: string): Promise<Float32Array | null> {
  try {
    await loadFaceModels();

    // Create image element from data URL
    const img = await faceapi.fetchImage(imageData);

    // Detect face with landmarks and descriptor
    const detections = await faceapi.detectAllFaces(img)
      .withFaceLandmarks()
      .withFaceDescriptors();

    if (detections.length === 0) {
      console.log('No faces detected in image');
      return null;
    }

    if (detections.length > 1) {
      console.log('Multiple faces detected in image');
      return null;
    }

    // Return the face descriptor
    return detections[0].descriptor;
  } catch (error) {
    console.error('Error extracting face descriptor:', error);
    return null;
  }
}

/**
 * Check if a face is present in an image (basic detection without full verification)
 * @param imageData - Base64 data URL of the image
 * @returns True if exactly one face is detected
 */
export async function detectFacePresence(imageData: string): Promise<boolean> {
  try {
    await loadFaceModels();

    const img = await faceapi.fetchImage(imageData);
    const detections = await faceapi.detectAllFaces(img);

    return detections.length === 1;
  } catch (error) {
    console.error('Error detecting face presence:', error);
    return false;
  }
}