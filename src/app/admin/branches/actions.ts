/**
 * @fileoverview This file contains the server actions for the branches management page.
 */
'use server';

import { createBranch, deleteBranch } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export async function createBranchAction(branchName: string, coordinates: string) {
    if (!branchName || !coordinates) {
        return { success: false, message: 'Branch name and coordinates are required.' };
    }
    try {
        await createBranch(branchName, coordinates);
        revalidatePath('/admin/branches');
        revalidatePath('/admin/branch-allocation');
        return { success: true };
    } catch (e: any) {
        return { success: false, message: e.message || 'Failed to create branch.' };
    }
}

export async function deleteBranchAction(id: number) {
    if (!id) {
        return { success: false, message: 'Branch ID is required.' };
    }
    try {
        await deleteBranch(id);
        revalidatePath('/admin/branches');
        revalidatePath('/admin/branch-allocation');
        return { success: true };
    } catch (e: any) {
        return { success: false, message: e.message || 'Failed to delete branch.' };
    }
}
