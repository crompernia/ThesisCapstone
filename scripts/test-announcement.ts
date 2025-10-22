import { getHrPersonnel, getEmployees, createAnnouncement, getEmployeeDashboardData } from '../src/lib/data';

async function main() {
  try {
    const hrs = await getHrPersonnel();
    if (hrs.length === 0) {
      console.log('No HR users found.');
      return;
    }
    const hr = hrs[0];
    console.log('Using HR:', hr.name, hr.id || 'no-id');

    const employees = await getEmployees();
    if (employees.length === 0) {
      console.log('No employees found.');
      return;
    }
    const emp = employees[0];
    console.log('Using employee:', emp.name, emp.id || emp.employeeNumber || 'no-id');

    const title = `Integration Test Announcement ${new Date().toISOString()}`;
    const content = 'This is a test announcement created by an automated script.';

    await createAnnouncement(title, content, 'Published', hr.id);
    console.log('Announcement created as Published by HR', hr.name);

    const dashboard = await getEmployeeDashboardData(emp.id);
    console.log('Employee dashboard announcements:', dashboard.announcements);
  } catch (e) {
    console.error('Error running test announcement', e);
  }
}

main();
