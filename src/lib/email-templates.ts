/**
 * @fileoverview Email templates for various notifications
 */

/**
 * Welcome email template for new employees
 */
export function createEmployeeWelcomeEmail(employeeData: {
  firstName: string;
  lastName: string;
  email: string;
  employeeNumber: string;
  defaultPassword: string;
  position: string;
  department: string;
  branch: string;
}) {
  const { firstName, lastName, email, employeeNumber, defaultPassword, position, department, branch } = employeeData;

  return {
    subject: 'Welcome to the Company - Your Account Details',
    html: `
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
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Our Company!</h1>
      <p>Your employee account has been created successfully.</p>
    </div>

    <div class="content">
      <h2>Hello ${firstName} ${lastName},</h2>

      <p>Welcome to the team! Your employee account has been set up and you can now access our employee portal.</p>

      <div class="credentials">
        <h3>Your Account Details:</h3>
        <p><strong>Employee Number:</strong> ${employeeNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Branch:</strong> ${branch}</p>
        <p><strong>Temporary Password:</strong> <code>${defaultPassword}</code></p>
      </div>

      <div class="warning">
        <strong>⚠️ Important:</strong> Please log in to the employee portal and change your password immediately for security reasons.
      </div>

      <p>You can access the employee portal at: <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:9002'}">${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:9002'}</a></p>

      <p>If you have any questions or need assistance, please contact the HR department.</p>

      <p>Best regards,<br>The HR Team</p>
    </div>

    <div class="footer">
      <p>This is an automated message. Please do not reply to this email.</p>
      <p>If you did not expect this email, please contact HR immediately.</p>
    </div>
  </div>
</body>
</html>
    `.trim()
  };
}

/**
 * Notification email template for HR when employee submits a request
 */
export function createHRNotificationEmail(notificationData: {
  requestType: 'leave' | 'loan' | 'overtime';
  employeeName: string;
  employeeNumber: string;
  requestDetails: string;
  submittedAt: string;
}) {
  const { requestType, employeeName, employeeNumber, requestDetails, submittedAt } = notificationData;

  const requestTypeLabels = {
    leave: 'Leave Request',
    loan: 'Loan Request',
    overtime: 'Overtime Request'
  };

  return {
    subject: `New ${requestTypeLabels[requestType]} Submitted - ${employeeName}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New ${requestTypeLabels[requestType]}</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #007bff; color: white; padding: 20px; text-align: center; border-radius: 5px; margin-bottom: 20px; }
    .content { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; }
    .details { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; }
    .action-button { display: inline-block; background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New ${requestTypeLabels[requestType]}</h1>
    </div>

    <div class="content">
      <p>A new ${requestTypeLabels[requestType].toLowerCase()} has been submitted and requires your approval.</p>

      <div class="details">
        <h3>Request Details:</h3>
        <p><strong>Employee:</strong> ${employeeName}</p>
        <p><strong>Employee Number:</strong> ${employeeNumber}</p>
        <p><strong>Submitted:</strong> ${submittedAt}</p>
        <p><strong>Details:</strong> ${requestDetails}</p>
      </div>

      <p>Please review and approve or reject this request in the HR portal.</p>

      <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:9002'}/hr/${requestType}-approvals" class="action-button">
        Review ${requestTypeLabels[requestType]}
      </a>

      <p>Best regards,<br>Employee Portal System</p>
    </div>

    <div class="footer">
      <p>This is an automated notification from the employee portal system.</p>
    </div>
  </div>
</body>
</html>
    `.trim()
  };
}