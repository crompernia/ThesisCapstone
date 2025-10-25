# Attendance Absent Records Scheduler

This document explains how to set up automatic marking of absent records for employees who haven't clocked in/out by 8:05 PM daily.

## Overview

The system automatically marks employees as absent if they haven't created an attendance record for the current day by 8:05 PM. This ensures that attendance logs are complete and accurate.

## Components

### 1. Mark Absent Records Script (`scripts/mark-absent-records.js`)
- Checks all active employees
- For each employee, verifies if they have an attendance record for the current day
- If no record exists, inserts an absent record with:
  - `status: 'Absent'`
  - `timeIn: null`
  - `timeOut: null`
  - `hoursWorked: '0'`
  - `notes: 'Auto-marked as absent at 8:05 PM'`
- If a record exists but is incomplete (missing timeIn or timeOut), updates it to absent

### 2. NPM Script
Added to `package.json`:
```json
"attendance:mark-absent": "npx tsx scripts/mark-absent-records.js"
```

### 3. Windows Scheduler Script (`schedule-absent-records.bat`)
A batch file that creates a Windows Task Scheduler task to run the script daily at 8:05 PM.

## Setup Instructions

### Step 1: Manual Testing
Before scheduling, test the script manually:
```bash
npm run attendance:mark-absent
```

### Step 2: Schedule the Task (Windows)
1. Run the batch file as Administrator:
   ```
   schedule-absent-records.bat
   ```
   This creates a scheduled task called "MarkAbsentRecords" that runs daily at 8:05 PM.

2. Alternatively, manually create the task:
   - Open Windows Task Scheduler
   - Create a new task
   - Set trigger to "Daily" at 8:05 PM
   - Set action to "Start a program"
   - Program: `cmd`
   - Arguments: `/c cd /d "C:\path\to\your\project\ThesisCapstone" && npm run attendance:mark-absent`

### Step 3: Verify Setup
- Check Windows Task Scheduler to confirm the task is created
- Monitor the task history to ensure it's running successfully
- Check database attendance records to verify absent records are being created

## Database Schema

The script works with the existing `attendance` table:
- `employeeId` (uuid, foreign key to accounts)
- `date` (date)
- `timeIn` (timestamp)
- `timeOut` (timestamp)
- `status` (varchar, default 'Present')
- `hoursWorked` (numeric)
- `notes` (text)

## Error Handling

- The script logs all operations to the console
- Database connection errors are caught and logged
- The script exits with code 1 on failure, 0 on success

## Time Zone Considerations

The script uses the server's local date (`today.toISOString().slice(0, 10)`) to determine the current day. Ensure the server is running in the correct time zone (Asia/Singapore, UTC+8).

## Maintenance

- Monitor the scheduled task regularly
- Check logs for any failures
- Update the script if attendance logic changes
- Ensure database credentials remain valid

## Troubleshooting

### Task Not Running
- Check if the task is enabled in Task Scheduler
- Verify the path to the project directory
- Ensure Node.js and npm are in the system PATH
- Check Windows Event Viewer for task execution errors

### Database Connection Issues
- Verify DATABASE_URL in .env files
- Ensure database server is running
- Check network connectivity to database

### Script Errors
- Run manually to see detailed error messages
- Check console output for specific error details
- Verify all dependencies are installed (`npm install`)