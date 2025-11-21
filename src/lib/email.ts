/**
 * @fileoverview Email configuration and sending utilities using Resend
 */
import { Resend } from 'resend';

// Check if email is configured
const isEmailConfigured = !!process.env.RESEND_API_KEY;

// Create Resend client only if API key is available
let resendInstance: Resend | null = null;
if (isEmailConfigured) {
  resendInstance = new Resend(process.env.RESEND_API_KEY!);
}

export const resend = resendInstance;
export const emailEnabled = isEmailConfigured;

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
  // Check if email is configured
  if (!emailEnabled || !resend) {
    console.log('Email not configured, skipping email send');
    return { success: false, error: 'Email not configured' };
  }

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