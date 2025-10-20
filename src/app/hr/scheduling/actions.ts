"use server";

import { publishSchedule } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export async function publishScheduleAction(scheduleItems: { employeeId: string; shifts: string[] }[], weekStart: string) {
    if (!scheduleItems || !Array.isArray(scheduleItems) || !weekStart) {
        return { success: false, message: 'Invalid schedule payload.' };
    }
    try {
        await publishSchedule(scheduleItems, weekStart);
        revalidatePath('/hr/scheduling');
        revalidatePath('/dashboard');
        return { success: true };
    } catch (e) {
        console.error('publishScheduleAction error', e);
        return { success: false, message: 'Failed to publish schedule.' };
    }
}
