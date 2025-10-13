/**
 * @fileoverview This file contains server actions for the edit employee form.
 */
'use server';

import { updateEmployee } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const employeeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  middleName: z.string().optional(),
  gender: z.string().min(1),
  dob: z.string().min(1),
  position: z.string().min(1),
  department: z.string().min(1),
  branch: z.string().min(1),
  hireDate: z.string().min(1),
  email: z.string().email(),
});

export async function updateEmployeeAction(id, data) {
  const validatedFields = employeeSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your entries.',
    };
  }

  try {
    const result = await updateEmployee(id, validatedFields.data);
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
