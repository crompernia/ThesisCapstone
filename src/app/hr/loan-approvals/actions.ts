/**
 * @fileoverview This file contains the server actions for the loan approvals page.
 */
'use server';

import { updateLoanRequestStatus, approveLoanRequest, rejectLoanRequest } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export async function updateLoanRequestStatusAction(requestId: number, status: string) {
    if (!requestId || !status) {
        return { success: false, message: 'Request ID and status are required.' };
    }

    try {
        if (status === 'Approved') {
            await approveLoanRequest(requestId);
        } else if (status === 'Rejected') {
            await rejectLoanRequest(requestId);
        } else {
            await updateLoanRequestStatus(requestId, status);
        }
        revalidatePath('/hr/loan-approvals');
        revalidatePath('/hr/dashboard');
        return { success: true };
    } catch (e) {
        console.error(`Failed to update loan request ${requestId} to ${status}:`, e);
        return { success: false, message: `Failed to update loan request status.` };
    }
}