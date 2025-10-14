/**
 * @fileoverview This file contains the server actions for the leave approvals page.
 */
'use server';

import { updateLeaveRequestStatus } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export async function updateLeaveRequestStatusAction(requestId: number, status: string) {
    if (!requestId || !status) {
        return { success: false, message: 'Request ID and status are required.' };
    }

    try {
        await updateLeaveRequestStatus(requestId, status);
        revalidatePath('/hr/leave-approvals');
        revalidatePath('/hr/dashboard');
        return { success: true };
    } catch (e) {
        console.error(`Failed to update leave request ${requestId} to ${status}:`, e);
        return { success: false, message: `Failed to update leave request status.` };
    }
}
