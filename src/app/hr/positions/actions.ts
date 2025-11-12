/**
 * @fileoverview This file contains the server actions for the positions management page.
 */
'use server';

import { createPosition, deletePosition, createDepartment, allocatePositionToDepartment, removePositionFromDepartment } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export async function createPositionAction(title: string, rate: string) {
    const rateNumber = parseFloat(rate);
    if (!title || isNaN(rateNumber) || rateNumber <= 0) {
        return { success: false, message: 'Valid position title and a positive rate are required.' };
    }
    try {
        await createPosition(title, rate);
        revalidatePath('/hr/positions');
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
        revalidatePath('/hr/positions');
        return { success: true };
    } catch (e: any) {
        return { success: false, message: e.message || 'Failed to delete position.' };
    }
}

export async function createDepartmentAction(name: string, branchId: number) {
    if (!name || !branchId) {
        return { success: false, message: 'Department name and branch ID are required.' };
    }
    try {
        await createDepartment(name, branchId);
        revalidatePath('/hr/positions');
        return { success: true };
    } catch (e: any) {
        return { success: false, message: e.message || 'Failed to create department.' };
    }
}

export async function allocatePositionAction(positionId: number, departmentId: number) {
    if (!positionId || !departmentId) {
        return { success: false, message: 'Position ID and department ID are required.' };
    }
    try {
        await allocatePositionToDepartment(positionId, departmentId);
        revalidatePath('/hr/positions');
        return { success: true };
    } catch (e: any) {
        return { success: false, message: e.message || 'Failed to allocate position.' };
    }
}

export async function removeAllocationAction(allocationId: number) {
    if (!allocationId) {
        return { success: false, message: 'Allocation ID is required.' };
    }
    try {
        await removePositionFromDepartment(allocationId);
        revalidatePath('/hr/positions');
        return { success: true };
    } catch (e: any) {
        return { success: false, message: e.message || 'Failed to remove allocation.' };
    }
}
