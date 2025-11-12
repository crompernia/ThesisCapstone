/**
 * @fileoverview This file contains the server actions for the branch allocation page.
 */
'use server';

import { updateHrBranchAllocation as updateHrBranchAllocationDb } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export async function updateHrBranchAllocation(hrId: string, branches: string[]) {
    try {
        await updateHrBranchAllocationDb(hrId, branches);
        revalidatePath('/hr/branch-allocation');
        return { success: true, message: 'Branch allocation updated successfully.' };
    } catch (e) {
        return { success: false, message: 'Failed to update branch allocation.' };
    }
}
