import { getDb } from '../src/lib/db.js';
import * as schema from '../src/lib/schema.js';

const branchesToAdd = [
  { name: 'Quezon City - Culiat', coordinates: '14.6760,121.0437' },
  { name: 'Antipolo, Rizal - Sta. Cruz', coordinates: '14.5869,121.1753' },
  { name: 'San Jose Del Monte, Bulacan - Graceville', coordinates: '14.8139,121.0453' },
  { name: 'Pozzorrubio, Pangasinan', coordinates: '16.1108,120.5458' },
  { name: 'Camarin, Caloocan', coordinates: '14.6500,120.9833' },
  { name: 'Dagupan, Pangasinan', coordinates: '16.0433,120.3333' },
  { name: 'Naga, Cam Sur', coordinates: '13.6218,123.1944' },
  { name: 'North Campus', coordinates: '14.5995,120.9842' }, // Using HQ coordinates as placeholder
  { name: 'Novaliches', coordinates: '14.7227,121.0389' },
  { name: 'STI COLLEGE MUNOZ', coordinates: '14.7041,120.9794' },
  { name: 'Tacloban, Leyte', coordinates: '11.2444,125.0039' },
  { name: 'Teresa, Rizal', coordinates: '14.5667,121.2167' }
];

async function restoreBranches() {
  try {
    console.log('Restoring missing branches...');

    const db = await getDb();

    for (const branch of branchesToAdd) {
      await db.insert(schema.branches).values(branch).execute();
      console.log(`Added branch: ${branch.name}`);
    }

    console.log('All branches restored successfully!');
  } catch (error) {
    console.error('Error restoring branches:', error);
  } finally {
    process.exit(0);
  }
}

restoreBranches();