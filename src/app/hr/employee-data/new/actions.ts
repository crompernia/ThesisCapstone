/**
 * @fileoverview This file contains server actions for the new employee form.
 */
'use server';

import { getDb } from '@/lib/db';
import { accounts } from '@/lib/schema';
import { hashPassword } from '@/lib/auth';
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
  phone: z.string().min(1),
  sssNumber: z.string().optional(),
  philhealthNumber: z.string().optional(),
  pagibigNumber: z.string().optional(),
  tin: z.string().optional(),
});

export async function addEmployee(formData: FormData) {
  const validatedFields = employeeSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    middleName: formData.get('middleName'),
    gender: formData.get('gender'),
    dob: formData.get('dob'),
    position: formData.get('position'),
    department: formData.get('department'),
    branch: formData.get('branch'),
    hireDate: formData.get('hireDate'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    sssNumber: formData.get('sssNumber'),
    philhealthNumber: formData.get('philhealthNumber'),
    pagibigNumber: formData.get('pagibigNumber'),
    tin: formData.get('tin'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your entries.',
    };
  }

  const {
    firstName,
    lastName,
    middleName,
    gender,
    dob,
    position,
    department,
    branch,
    hireDate,
    email,
    sssNumber,
    philhealthNumber,
    pagibigNumber,
    tin
  } = validatedFields.data;

  // Generate a unique employee number for the new employee (DB will generate the UUID primary key)
  const employeeNumber = `EMP-${String(Date.now()).slice(-5)}`;

  try {
    const db = await getDb();

    // Hash the default password
    const hashedPassword = await hashPassword('password');

    await db.insert(accounts).values({
      employeeNumber,
      firstName,
      lastName,
      middleName,
      gender,
      dateOfBirth: dob,
      position,
      department,
      branch,
      dateHired: hireDate,
      email,
      role: 'Employee',
      status: 'Pending Approval',
      sssNumber,
      philhealthNumber,
      pagibigNumber,
      tin,
      password: hashedPassword,
    });

    revalidatePath('/admin/approvals');
    revalidatePath('/admin/dashboard');

    return { success: true, message: 'Employee submitted for approval.' };
  } catch (error: any) {
    console.error('Database error adding new employee:', error);
    // Check for unique constraint violation
    if (error.code === '23505') {
      return { success: false, message: 'An employee with this email already exists.' };
    }
    return { success: false, message: 'Failed to add new employee due to a database error.' };
  }
}
