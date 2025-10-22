const { populateAttendanceRecords } = require('./src/lib/data');

async function main() {
    try {
        console.log('Starting attendance records population...');
        await populateAttendanceRecords();
        console.log('Attendance records population completed successfully.');
    } catch (error) {
        console.error('Error populating attendance records:', error);
        process.exit(1);
    }
}

main();