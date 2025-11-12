/**
 * @fileoverview This file contains the server actions for the overtime approvals page.
 */
'use server';

import { updateOvertimeRequestStatus, approveOvertimeRequest, rejectOvertimeRequest } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export async function updateOvertimeRequestStatusAction(requestId: number, status: string) {
    if (!requestId || !status) {
        return { success: false, message: 'Request ID and status are required.' };
    }

    try {
        if (status === 'Approved') {
            await approveOvertimeRequest(requestId);
        } else if (status === 'Rejected') {
            await rejectOvertimeRequest(requestId);
        } else {
            await updateOvertimeRequestStatus(requestId, status);
        }
        revalidatePath('/hr/overtime-approvals');
        revalidatePath('/hr/dashboard');
        return { success: true };
    } catch (e) {
        console.error(`Failed to update overtime request ${requestId} to ${status}:`, e);
        return { success: false, message: `Failed to update overtime request status.` };
    }
}