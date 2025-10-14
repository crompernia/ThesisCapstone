# Login Credentials

All accounts use the default password: **`password`**

---

## Employee Login

Employees login using their **Employee Number** (not email or UUID).

| Employee # | Name             | Email                       | Position                  | Branch           |
|------------|------------------|-----------------------------|---------------------------|------------------|
| 10001      | Maria Rodriguez  | maria.rodriguez@example.com | Senior Software Engineer  | Headquarters     |
| 10002      | David Lee        | david.lee@example.com       | Project Manager           | Headquarters     |
| 10003      | James White      | james.white@example.com     | UX Designer               | Downtown Office  |
| 10004      | Emily Carter     | emily.carter@example.com    | QA Tester                 | Remote           |
| 10005      | Sarah Williams   | sarah.williams@example.com  | Software Engineer         | Headquarters     |

**Example Employee Login:**
- Employee ID: `10001`
- Password: `password`

---

## HR Login

HR staff login using their **email address**.

| Email                      | Name        |
|----------------------------|-------------|
| olivia.chen.hr@example.com | Olivia Chen |

**Example HR Login:**
- Email: `olivia.chen.hr@example.com`
- Password: `password`

---

## Admin Login

Admins login using their **email address**.

| Email                | Name        |
|----------------------|-------------|
| super@example.com    | Super Admin |

**Example Admin Login:**
- Email: `super@example.com`
- Password: `password`

---

## Changes Made

1. **Added `employeeNumber` field** to the database schema
2. **Updated authentication** to use employee numbers for employee login
3. **Assigned employee numbers** to all existing employees (10001-10005)
4. **Updated seed file** to include employee numbers for future database resets

## Notes

- Employee numbers are **unique** and indexed for fast lookups
- Employee numbers follow the format: `1000X` (starting from 10001)
- HR and Admin accounts do not have employee numbers (they use email for login)
