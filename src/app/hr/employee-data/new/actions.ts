/**
 * @fileoverview This file contains server actions for the new employee form.
 */
'use server';

import { getDb } from '@/lib/db';
import { accounts } from '@/lib/schema';
import { hashPassword } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { randomUUID } from 'crypto';

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
  photo: z.any().optional(),
  sssNumber: z.string().optional(),
  philhealthNumber: z.string().optional(),
  pagibigNumber: z.string().optional(),
  tin: z.string().optional(),
});

export async function addEmployee(formData: FormData) {
  const validatedFields = employeeSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    middleName: formData.get('middleName') || undefined,
    gender: formData.get('gender'),
    dob: formData.get('dob'),
    position: formData.get('position'),
    department: formData.get('department'),
    branch: formData.get('branch'),
    hireDate: formData.get('hireDate'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    photo: formData.get('photo') || undefined,
    sssNumber: formData.get('sssNumber') || undefined,
    philhealthNumber: formData.get('philhealthNumber') || undefined,
    pagibigNumber: formData.get('pagibigNumber') || undefined,
    tin: formData.get('tin') || undefined,
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
    phone,
    photo,
    sssNumber,
    philhealthNumber,
    pagibigNumber,
    tin
  } = validatedFields.data;

  // Generate a sequential numeric employee number (DB will generate the UUID primary key)
  // Strategy: read existing employeeNumber values, extract numeric parts and pick max numeric value + 1
  try {
    const db = await getDb();

    const existing = await db.select({ employeeNumber: accounts.employeeNumber }).from(accounts);
    let maxNumeric = 10000; // start below 10001 so first generated will be 10001 when no seeds exist
    for (const row of existing) {
      const val = (row as any).employeeNumber as string | undefined;
      if (!val) continue;
      // extract all digits in the string and join them to form a number
      const digits = val.match(/\d+/g);
      if (!digits) continue;
      const n = parseInt(digits.join(''), 10);
      if (!Number.isNaN(n) && n > maxNumeric) maxNumeric = n;
    }

    const nextNum = maxNumeric + 1;
    const employeeNumber = String(nextNum);

    // Hash the default password
    const hashedPassword = await hashPassword('password');

    await db.insert(accounts).values({
      id: randomUUID(),
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
      photo,
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
