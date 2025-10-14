/**
 * @fileoverview Script to update existing account passwords to hashed versions
 * Run this script to migrate plain text passwords to bcrypt hashed passwords
 */
import { getDb } from './db.js';
import { accounts } from './schema.js';
import { hashPassword } from './auth.js';
import { eq } from 'drizzle-orm';

async function updatePasswords() {
  console.log('Starting password update...');

  try {
    const db = await getDb();

    // Fetch all accounts
    console.log('Fetching all accounts...');
    const allAccounts = await db.select().from(accounts);
    console.log(`Found ${allAccounts.length} accounts to update`);

    // Hash the password
    console.log('Hashing password "password"...');
    const hashedPassword = await hashPassword('password');

    // Update each account
    console.log('Updating accounts with hashed passwords...');
    let updated = 0;

    for (const account of allAccounts) {
      // Check if password is already hashed (bcrypt hashes start with $2a$, $2b$, or $2y$)
      if (account.password.startsWith('$2')) {
        console.log(`  ✓ ${account.email} - already hashed, skipping`);
        continue;
      }

      // Update the account with hashed password
      await db
        .update(accounts)
        .set({ password: hashedPassword })
        .where(eq(accounts.id, account.id));

      console.log(`  ✓ ${account.email} - updated`);
      updated++;
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`✅ Password update completed!`);
    console.log(`   Total accounts: ${allAccounts.length}`);
    console.log(`   Updated: ${updated}`);
    console.log(`   Skipped (already hashed): ${allAccounts.length - updated}`);
    console.log(`${'='.repeat(60)}`);
    console.log('🔐 All passwords are now: "password" (hashed)');
    console.log(`${'='.repeat(60)}\n`);

  } catch (error) {
    console.error('Error updating passwords:', error);
    throw error;
  }
}

// Run update if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  updatePasswords()
    .then(() => {
      console.log('\nPassword update script finished.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Password update script failed:', err);
      process.exit(1);
    });
}

export default updatePasswords;
