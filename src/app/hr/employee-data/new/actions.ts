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
import { sql } from 'drizzle-orm';

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
  faceEncoding: z.string().optional(), // Face encoding data for verification
  sssNumber: z.string().min(1).refine((val) => /^\d{2}-\d{7}-\d{1}$/.test(val), "SSS number must be in format XX-XXXXXXX-X"),
  philhealthNumber: z.string().min(1).refine((val) => /^\d{2}-\d{9}-\d{1}$/.test(val), "PhilHealth number must be in format XX-XXXXXXXXX-X"),
  pagibigNumber: z.string().min(1).refine((val) => /^\d{4}-\d{4}-\d{4}$/.test(val), "Pag-IBIG number must be in format XXXX-XXXX-XXXX"),
  tin: z.string().min(1).refine((val) => /^\d{3}-\d{3}-\d{3}-\d{3}$/.test(val), "TIN must be in format XXX-XXX-XXX-XXX"),
});

export async function addEmployee(formData: FormData) {
  console.log('addEmployee: Starting employee creation process');

  console.log('addEmployee: faceEncoding from formData:', formData.get('faceEncoding'));

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
   faceEncoding: formData.get('faceEncoding') || undefined,
   sssNumber: formData.get('sssNumber') || undefined,
   philhealthNumber: formData.get('philhealthNumber') || undefined,
   pagibigNumber: formData.get('pagibigNumber') || undefined,
   tin: formData.get('tin') || undefined,
 });

  if (!validatedFields.success) {
    console.error('addEmployee: Validation failed:', validatedFields.error);
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
    faceEncoding,
    sssNumber,
    philhealthNumber,
    pagibigNumber,
    tin
  } = validatedFields.data;

  console.log('addEmployee: Validation passed, faceEncoding present:', !!faceEncoding);
  console.log('addEmployee: Validation passed, data:', { firstName, lastName, email, position, department, branch });

  // Generate a sequential numeric employee number (DB will generate the UUID primary key)
  // Strategy: read existing employeeNumber values, extract numeric parts and pick max numeric value + 1
  try {
    console.log('addEmployee: Attempting to get database connection');
    const db = await getDb();
    console.log('addEmployee: Database connection successful');

    console.log('addEmployee: Querying existing employee numbers');
    // Query existing employee numbers to find the max numeric value
    const existingNumbers = await db.select({ employeeNumber: accounts.employeeNumber }).from(accounts).where(sql`${accounts.employeeNumber} IS NOT NULL`);
    console.log('addEmployee: Found', existingNumbers.length, 'existing employee numbers');

    let maxNumeric = 2; // BOD has 001-00000 to 001-00002, so start from 00003
    for (const row of existingNumbers) {
        if (row.employeeNumber && row.employeeNumber.startsWith('001-')) {
            const numericPart = row.employeeNumber.split('-')[1];
            const num = parseInt(numericPart, 10);
            if (!isNaN(num) && num > maxNumeric) {
                maxNumeric = num;
            }
        }
    }
    const employeeNumber = "001-" + String(maxNumeric + 1).padStart(5, '0');
    console.log('addEmployee: Generated employee number:', employeeNumber);

    console.log('addEmployee: Generating default password');
    // Generate default password: lastName.toLowerCase() + '.' + MMDDYYYY
    const [year, month, day] = dob.split('-');
    const formattedDob = month.padStart(2, '0') + day.padStart(2, '0') + year;
    const defaultPassword = lastName.toLowerCase() + '.' + formattedDob;
    console.log('addEmployee: Default password generated:', defaultPassword);

    // Hash the default password
    const hashedPassword = await hashPassword(defaultPassword);
    console.log('addEmployee: Password hashed successfully');

    const insertData = {
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
      status: 'Active',
      sssNumber,
      philhealthNumber,
      pagibigNumber,
      tin,
      photo: photo || null,
      faceEncoding: faceEncoding || null,
      password: hashedPassword,
    };
    console.log('addEmployee: Preparing to insert data:', insertData);

    console.log('addEmployee: Executing insert query');
    await db.insert(accounts).values(insertData);
    console.log('addEmployee: Insert successful');

    revalidatePath('/admin/dashboard');

    return { success: true, message: 'Employee created successfully.' };
  } catch (error: any) {
    console.error('Database error adding new employee:', error);
    console.error('Error details:', error.message, error.code, error.detail, error.stack);
    // Check for unique constraint violation
    if (error.code === '23505') {
      if (error.constraint === 'accounts_email_unique') {
        return { success: false, message: 'An employee with this email already exists.' };
      } else if (error.constraint === 'accounts_employee_number_unique') {
        return { success: false, message: 'An employee with this employee number already exists.' };
      }
      return { success: false, message: 'A unique constraint violation occurred.' };
    }
    return { success: false, message: 'Failed to add new employee due to a database error.' };
  }
}
