/**
 * @fileoverview This file contains server actions for the edit employee form.
 */
'use server';

import { updateEmployee } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const employeeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  middleName: z.string().optional(),
  employeeNumber: z.string().optional().refine((val) => {
    if (!val) return true; // Optional field
    return /^\d{3}-\d{5}$/.test(val);
  }, "Employee number must be in format 000-00000"),
  gender: z.string().min(1),
  dob: z.string().min(1),
  position: z.string().min(1),
  department: z.string().min(1),
  branch: z.string().min(1),
  hireDate: z.string().min(1),
  email: z.string().email(),
});

export async function updateEmployeeAction(id: string, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const photoFile = formData.get('photo') as File | null;

  // Validate form data
  const validatedFields = employeeSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your entries.',
    };
  }

  let photoPath = null;

  // Handle photo upload
  if (photoFile && photoFile.size > 0) {
    try {
      // Validate file type
      if (!photoFile.type.startsWith('image/')) {
        return {
          success: false,
          message: 'Invalid file type. Please upload an image file.',
        };
      }

      // Validate file size (max 5MB)
      if (photoFile.size > 5 * 1024 * 1024) {
        return {
          success: false,
          message: 'File size too large. Please upload an image smaller than 5MB.',
        };
      }

      // Create uploads directory if it doesn't exist
      const uploadsDir = join(process.cwd(), 'public', 'uploads');
      await mkdir(uploadsDir, { recursive: true });

      // Generate unique filename
      const fileExtension = photoFile.name.split('.').pop();
      const fileName = `${id}-${Date.now()}.${fileExtension}`;
      const filePath = join(uploadsDir, fileName);

      // Convert file to buffer and save
      const bytes = await photoFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(filePath, buffer);

      // Set photo path for database
      photoPath = `/uploads/${fileName}`;
    } catch (error) {
      console.error('Error uploading photo:', error);
      return {
        success: false,
        message: 'Failed to upload photo. Please try again.',
      };
    }
  }

  try {
    const result = await updateEmployee(id, { ...validatedFields.data, photo: photoPath } as any);
    if (result.success) {
        revalidatePath('/hr/employee-data');
        revalidatePath(`/hr/employee-data/${id}`);
        revalidatePath(`/hr/employee-data/${id}/edit`);
    }
    return result;
  } catch (error) {
    console.error('Database error updating employee:', error);
    return { success: false, message: 'Failed to update employee due to a database error.' };
  }
}
