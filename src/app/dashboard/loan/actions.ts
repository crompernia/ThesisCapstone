/**
 * @fileoverview This file contains the server actions for the loan request page.
 */
'use server';

import { createLoanRequest as createLoanRequestDb } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const loanRequestSchema = z.object({
    employeeId: z.string(),
    amount: z.string().refine((val) => {
        const num = parseFloat(val);
        return !isNaN(num) && num >= 1 && num <= 25000;
    }, { message: "Amount must be between ₱1 and ₱25,000." }),
    months: z.string(),
    interestRate: z.string(),
});

export async function createLoanRequest(_prevState: any, formData: any) {
    const validatedFields = loanRequestSchema.safeParse({
        employeeId: formData.get('employeeId'),
        amount: formData.get('amount'),
        months: formData.get('months'),
        interestRate: formData.get('interestRate'),
    });

    if (!validatedFields.success) {
        return {
            message: 'Invalid form data. Please check your entries.',
        };
    }

    const result = await createLoanRequestDb({
        employeeId: validatedFields.data.employeeId,
        amount: parseFloat(validatedFields.data.amount),
        months: parseInt(validatedFields.data.months),
        interestRate: parseFloat(validatedFields.data.interestRate),
    });

    if (result.success) {
        revalidatePath('/dashboard/loan');
        return { message: 'Loan request created successfully.' };
    } else {
        return { message: result.error || 'Failed to create loan request.' };
    }
}