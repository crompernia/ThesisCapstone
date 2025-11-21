/**
 * Test script for email functionality
 * Run with: node test-email.js
 */

const { Resend } = require('resend');
require('dotenv').config();

// Test data - Using verified email for testing
const testEmployee = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'crompernia@gmail.com', // Using verified account email for testing
  employeeNumber: '001-00001',
  defaultPassword: 'doe.01012000',
  position: 'Software Developer',
  department: 'IT',
  branch: 'Main Office'
};

const testRequest = {
  requestType: 'leave',
  employeeName: 'John Doe',
  employeeNumber: '001-00001',
  requestDetails: 'Vacation Leave from Dec 01, 2024 to Dec 05, 2024. Reason: Family vacation',
  submittedAt: 'Nov 21, 2024 11:30 AM'
};

async function testEmailSystem() {
  console.log('🧪 Testing Email System...\n');

  // Check environment variables
  console.log('📋 Environment Check:');
  console.log(`RESEND_API_KEY: ${process.env.RESEND_API_KEY ? '✅ Set' : '❌ Missing'}`);
  console.log(`HR_NOTIFICATION_EMAIL: ${process.env.HR_NOTIFICATION_EMAIL || 'Not set'}\n`);

  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
    console.log('❌ RESEND_API_KEY is not configured. Please set your actual Resend API key in .env');
    console.log('   Get your API key from: https://resend.com/api-keys\n');
    return;
  }

  try {
    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log('✅ Resend client initialized\n');

    // Test Employee Welcome Email
    console.log('📧 Testing Employee Welcome Email...');
    const welcomeEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to the Company</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 5px; margin-bottom: 20px; }
    .content { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; }
    .credentials { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #007bff; }
    .warning { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Our Company!</h1>
      <p>Your employee account has been created successfully.</p>
    </div>

    <div class="content">
      <h2>Hello ${testEmployee.firstName} ${testEmployee.lastName},</h2>

      <p>Welcome to the team! Your employee account has been set up and you can now access our employee portal.</p>

      <div class="credentials">
        <h3>Your Account Details:</h3>
        <p><strong>Employee Number:</strong> ${testEmployee.employeeNumber}</p>
        <p><strong>Email:</strong> ${testEmployee.email}</p>
        <p><strong>Position:</strong> ${testEmployee.position}</p>
        <p><strong>Department:</strong> ${testEmployee.department}</p>
        <p><strong>Branch:</strong> ${testEmployee.branch}</p>
        <p><strong>Temporary Password:</strong> <code>${testEmployee.defaultPassword}</code></p>
      </div>

      <div class="warning">
        <strong>⚠️ Important:</strong> Please log in and change your password immediately for security reasons.
      </div>

      <p>You can access the employee portal at: <a href="http://localhost:9002">http://localhost:9002</a></p>

      <p>If you have any questions or need assistance, please contact the HR department.</p>

      <p>Best regards,<br>The HR Team</p>
    </div>

    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d;">
      <p>This is an automated message. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Send test employee welcome email
    const welcomeResult = await resend.emails.send({
      from: 'HR Department <onboarding@resend.dev>',
      to: testEmployee.email,
      subject: 'Welcome to the Company - Your Account Details',
      html: welcomeEmailHtml
    });

    console.log('✅ Employee welcome email sent:', welcomeResult);

    // Test HR Notification Email
    console.log('\n📧 Testing HR Notification Email...');
    const hrEmailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Leave Request</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #007bff; color: white; padding: 20px; text-align: center; border-radius: 5px; margin-bottom: 20px; }
    .content { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; }
    .details { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; }
    .action-button { display: inline-block; background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Leave Request</h1>
    </div>

    <div class="content">
      <p>A new leave request has been submitted and requires your approval.</p>

      <div class="details">
        <h3>Request Details:</h3>
        <p><strong>Employee:</strong> ${testRequest.employeeName}</p>
        <p><strong>Employee Number:</strong> ${testRequest.employeeNumber}</p>
        <p><strong>Submitted:</strong> ${testRequest.submittedAt}</p>
        <p><strong>Details:</strong> ${testRequest.requestDetails}</p>
      </div>

      <p>Please review and approve or reject this request in the HR portal.</p>

      <a href="http://localhost:9002/hr/leave-approvals" class="action-button">
        Review Leave Request
      </a>

      <p>Best regards,<br>Employee Portal System</p>
    </div>

    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d;">
      <p>This is an automated notification from the employee portal system.</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Send test HR notification email (to verified account email for testing)
    const hrResult = await resend.emails.send({
      from: 'HR Department <onboarding@resend.dev>',
      to: 'crompernia@gmail.com', // Using verified account email for testing
      subject: `New Leave Request Submitted - ${testRequest.employeeName}`,
      html: hrEmailHtml
    });

    console.log('✅ HR notification email sent:', hrResult);

    console.log('\n🎉 Email system test completed successfully!');
    console.log('\n📝 To actually send test emails:');
    console.log('1. Uncomment the email sending code in this script');
    console.log('2. Run: node test-email.js');
    console.log('3. Check your email inbox');

  } catch (error) {
    console.error('❌ Email test failed:', error);
  }
}

// Run the test
testEmailSystem();