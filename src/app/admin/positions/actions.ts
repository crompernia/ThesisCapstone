/**
 * @fileoverview This file contains the server actions for the positions management page.
 */
'use server';

import { createPosition, deletePosition } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export async function createPositionAction(title: string, rate: string) {
    const rateNumber = parseFloat(rate);
    if (!title || isNaN(rateNumber) || rateNumber <= 0) {
        return { success: false, message: 'Valid position title and a positive rate are required.' };
    }
    try {
        await createPosition(title, rate);
        revalidatePath('/admin/positions');
        return { success: true };
    } catch (e: any) {
        return { success: false, message: e.message || 'Failed to create position.' };
    }
}

export async function deletePositionAction(id: number) {
    if (!id) {
        return { success: false, message: 'Position ID is required.' };
    }
    try {
        await deletePosition(id);
        revalidatePath('/admin/positions');
        return { success: true };
    } catch (e: any) {
        return { success: false, message: e.message || 'Failed to delete position.' };
    }
}
