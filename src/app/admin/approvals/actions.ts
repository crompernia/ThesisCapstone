/**
 * @fileoverview This file contains the server actions for the employee approvals page.
 */
'use server';

import { approveEmployee as approveEmployeeDb, rejectEmployee as rejectEmployeeDb } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export async function approveEmployee(employeeId: string) {
    try {
        await approveEmployeeDb(employeeId);
        revalidatePath('/admin/approvals');
        revalidatePath('/admin/dashboard');
        return { success: true, message: 'Employee approved successfully.' };
    } catch (e) {
        return { success: false, message: 'Failed to approve employee.' };
    }
}

export async function rejectEmployee(employeeId: string) {
    try {
        await rejectEmployeeDb(employeeId);
        revalidatePath('/admin/approvals');
        revalidatePath('/admin/dashboard');
        return { success: true, message: 'Employee rejected successfully.' };
    } catch (e) {
        return { success: false, message: 'Failed to reject employee.' };
    }
}
