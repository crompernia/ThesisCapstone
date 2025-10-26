/**
 * Script to update existing attendance records to properly reflect late status
 * based on scheduled shift times and actual clock-in times.
 */

const { Client } = require('pg');
require('dotenv/config');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function updateAttendanceStatus() {
  try {
    await client.connect();
    console.log('Connected to database');

    // Get all attendance records with timeIn that are currently marked as 'Present'
    const attendanceRecords = await client.query(`
      SELECT
        a.id,
        a.employee_id,
        a.date,
        a.time_in,
        a.status,
        s.shift_start
      FROM attendance a
      JOIN schedules s ON a.employee_id = s.employee_id AND a.date = s.date
      WHERE a.time_in IS NOT NULL
      ORDER BY a.date DESC, a.employee_id
    `);

    console.log(`Found ${attendanceRecords.rows.length} attendance records to check`);

    let updatedCount = 0;

    for (const record of attendanceRecords.rows) {
      const { id, employee_id, date, time_in, shift_start, status } = record;

      // Parse the times
      const timeInDate = new Date(time_in);
      const shiftStartDate = new Date(`${date}T${shift_start}`);

      // Calculate grace period (5 minutes after shift start)
      const gracePeriodEnd = new Date(shiftStartDate.getTime() + (5 * 60 * 1000));

      // Determine correct status based on clock-in time
      let correctStatus = 'Present';
      if (timeInDate > gracePeriodEnd) {
        correctStatus = 'Late';
      }

      // Update if current status doesn't match correct status
      if (status !== correctStatus) {
        await client.query(
          'UPDATE attendance SET status = $1 WHERE id = $2',
          [correctStatus, id]
        );
        updatedCount++;
        console.log(`Updated record ${id} for employee ${employee_id} on ${date}: ${status} → ${correctStatus}`);
      }
    }

    console.log(`\n✅ Update complete! ${updatedCount} records updated`);

    // Show summary of current status distribution
    const statusSummary = await client.query(`
      SELECT status, COUNT(*) as count
      FROM attendance
      GROUP BY status
      ORDER BY status
    `);

    console.log('\n📊 Current attendance status distribution:');
    statusSummary.rows.forEach(row => {
      console.log(`  ${row.status}: ${row.count} records`);
    });

  } catch (error) {
    console.error('Error updating attendance status:', error);
  } finally {
    await client.end();
  }
}

updateAttendanceStatus();