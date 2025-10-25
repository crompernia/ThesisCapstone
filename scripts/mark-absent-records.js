/**
 * Script to mark absent records for employees who haven't clocked in/out from hire date to present day
 * This script should be run daily at 8:05 PM to insert absent records for missing days
 */

require('dotenv').config({ path: '../.env.local' });
const { getDb } = require('../src/lib/db');
const { eq, and, sql } = require('drizzle-orm');
const { accounts, attendance } = require('../src/lib/schema');

async function markAbsentRecords() {
    console.log('DATABASE_URL loaded:', process.env.DATABASE_URL ? 'Yes' : 'No');
    console.log('URL preview:', process.env.DATABASE_URL?.substring(0, 50));
    console.log('Full URL:', process.env.DATABASE_URL);
    const db = await getDb();

    // Get current date in YYYY-MM-DD format (local date)
    const today = new Date();
    const currentDate = today.toISOString().slice(0, 10); // YYYY-MM-DD

    console.log(`Marking absent records from hire date to present day: ${currentDate} at 8:05 PM`);

    try {
        // Get all active employees with hire date
        const employees = await db
            .select({
                id: accounts.id,
                firstName: accounts.firstName,
                lastName: accounts.lastName,
                dateHired: accounts.dateHired,
            })
            .from(accounts)
            .where(and(eq(accounts.role, 'Employee'), eq(accounts.status, 'Active')));

        console.log(`Found ${employees.length} active employees`);

        let totalAbsentCount = 0;

        for (const employee of employees) {
            const hireDate = new Date(employee.dateHired);
            hireDate.setHours(0, 0, 0, 0);
            const endDate = new Date(today);
            endDate.setHours(0, 0, 0, 0);

            let employeeAbsentCount = 0;

            for (let d = new Date(hireDate); d <= endDate; d.setDate(d.getDate() + 1)) {
                const dateStr = d.toISOString().slice(0, 10);

                // Check if employee has an attendance record for this date
                const existingRecord = await db
                    .select()
                    .from(attendance)
                    .where(and(
                        eq(attendance.employeeId, employee.id),
                        eq(attendance.date, dateStr)
                    ));

                // If no record exists, insert absent record
                if (existingRecord.length === 0) {
                    await db.insert(attendance).values({
                        employeeId: employee.id,
                        date: dateStr,
                        timeIn: null,
                        timeOut: null,
                        status: 'Absent',
                        hoursWorked: '0',
                        notes: 'Auto-marked as absent'
                    });

                    console.log(`Marked ${employee.firstName} ${employee.lastName} as absent for ${dateStr}`);
                    employeeAbsentCount++;
                } else {
                    // Check if the record is incomplete (no timeIn or no timeOut)
                    const record = existingRecord[0];
                    if (!record.timeIn || !record.timeOut) {
                        // Update status to Absent if incomplete
                        await db
                            .update(attendance)
                            .set({
                                status: 'Absent',
                                notes: sql`COALESCE(${attendance.notes}, '') || ' - Marked as absent due to incomplete clock-in/out'`
                            })
                            .where(and(
                                eq(attendance.employeeId, employee.id),
                                eq(attendance.date, dateStr)
                            ));

                        console.log(`Updated incomplete record for ${employee.firstName} ${employee.lastName} to absent for ${dateStr}`);
                        employeeAbsentCount++;
                    }
                }
            }

            console.log(`Marked ${employeeAbsentCount} absent records for ${employee.firstName} ${employee.lastName}`);
            totalAbsentCount += employeeAbsentCount;
        }

        console.log(`Successfully marked ${totalAbsentCount} total absent records`);

    } catch (error) {
        console.error('Error marking absent records:', error);
        throw error;
    }
}

// Run the script if called directly
if (require.main === module) {
    markAbsentRecords()
        .then(() => {
            console.log('Script completed successfully');
            process.exit(0);
        })
        .catch((error) => {
            console.error('Script failed:', error);
            process.exit(1);
        });
}

module.exports = { markAbsentRecords };