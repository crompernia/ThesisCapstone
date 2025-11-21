/**
 * @fileoverview This file contains the server actions for the overtime request page.
 */
'use server';

import { createOvertimeRequest as createOvertimeRequestDb } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const overtimeRequestSchema = z.object({
    employeeId: z.string(),
    date: z.string(),
    hoursRequested: z.string().refine(val => {
        const num = parseFloat(val);
        return !isNaN(num) && num >= 1 && num <= 4;
    }, { message: "Hours must be between 1 and 4" }),
    reason: z.string().optional(),
});

export async function createOvertimeRequest(_prevState: any, formData: any) {
    const validatedFields = overtimeRequestSchema.safeParse({
        employeeId: formData.get('employeeId'),
        date: formData.get('date'),
        hoursRequested: formData.get('hoursRequested'),
        reason: formData.get('reason'),
    });

    if (!validatedFields.success) {
        return {
            message: validatedFields.error.errors.map(err => err.message).join(', '),
        };
    }

    try {
        await createOvertimeRequestDb(validatedFields.data as any);
        revalidatePath('/dashboard/overtime');
        return { message: 'Overtime request created successfully.' };
    } catch (e) {
        return { message: 'Failed to create overtime request.' };
    }
}