-- Migration: update employeeNumber EMP-21881 -> 10006
-- Run this once against your Postgres database.

BEGIN;

-- Ensure no existing 10006 conflict
DELETE FROM accounts WHERE employee_number = '10006';

-- Update the EMP-21881 record to 10006
UPDATE accounts
SET employee_number = '10006'
WHERE employee_number = 'EMP-21881';

COMMIT;
