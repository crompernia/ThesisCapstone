import { getEmployees, publishSchedule, getSchedule } from '../src/lib/data';

async function main() {
  try {
    const employees = await getEmployees();
    if (employees.length === 0) {
      console.log('No employees found.');
      return;
    }

    const emp = employees[0];
    console.log('Using employee:', emp.name, emp.id || emp.employeeNumber || 'no-id');

    // Compute current week's Monday
    const today = new Date();
    const day = today.getDay();
    const diffToMonday = (day + 6) % 7;
    const monday = new Date(today);
    monday.setDate(today.getDate() - diffToMonday);
    const iso = (d: Date) => d.toISOString().slice(0,10);

    // Build a simple shift array Mon-Fri
    const shifts = ['09:00 - 17:00', '09:00 - 17:00', '09:00 - 17:00', '09:00 - 17:00', '09:00 - 17:00'];

    const weekStart = iso(monday);

    console.log('Publishing schedule for week starting', weekStart);
    const res = await publishSchedule([{ employeeId: emp.id, shifts }], weekStart);
    console.log('publishSchedule result:', res);

    const schedule = await getSchedule(emp.id);
    console.log('Fetched schedule for employee:', schedule);
  } catch (e) {
    console.error('Error in test publish', e);
  }
}

main();
