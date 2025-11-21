/**
 * @fileoverview Email configuration and sending utilities using Resend
 */
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is required');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send an email using Resend
 */
export async function sendEmail({
  to,
  subject,
  html,
  from = 'HR Department <onboarding@resend.dev>'
}: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) {
  try {
    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    console.log('Email sent successfully:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}