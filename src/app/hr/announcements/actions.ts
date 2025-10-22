/**
 * @fileoverview This file contains the server actions for the announcements page.
 */
'use server';

import { createAnnouncement, deleteAnnouncement } from '@/lib/data';
import { getCurrentUserId } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function createAnnouncementAction(title: string, content: string, status: string) {
    if (!title || !content || !status) {
        return { success: false, message: 'Title, content, and status are required.' };
    }
    try {
        const userId = await getCurrentUserId();
        await createAnnouncement(title, content, status, userId || undefined);
        revalidatePath('/hr/announcements');
        revalidatePath('/dashboard');
        return { success: true };
    } catch (e) {
        console.error('Failed to create announcement:', e);
        return { success: false, message: 'Failed to create announcement.' };
    }
}

export async function deleteAnnouncementAction(id: number) {
     if (!id) {
        return { success: false, message: 'Announcement ID is required.' };
    }
    try {
        await deleteAnnouncement(id);
        revalidatePath('/hr/announcements');
        revalidatePath('/dashboard');
        return { success: true };
    } catch (e) {
        console.error('Failed to delete announcement:', e);
        return { success: false, message: 'Failed to delete announcement.' };
    }
}
