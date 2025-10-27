/**
 * @fileoverview This file contains the server actions for the leave request page.
 */
'use server';

import { createLeaveRequest as createLeaveRequestDb } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const leaveRequestSchema = z.object({
    employeeId: z.string(),
    leaveType: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    reason: z.string().optional(),
});

export async function createLeaveRequest(_prevState: any, formData: any) {
    const validatedFields = leaveRequestSchema.safeParse({
        employeeId: formData.get('employeeId'),
        leaveType: formData.get('leaveType'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate'),
        reason: formData.get('reason'),
    });

    if (!validatedFields.success) {
        return {
            message: 'Invalid form data. Please check your entries.',
        };
    }
    
    try {
        await createLeaveRequestDb(validatedFields.data as any);
        revalidatePath('/dashboard/leave');
        return { message: 'Leave request created successfully.' };
    } catch (e) {
        return { message: 'Failed to create leave request.' };
    }
}
