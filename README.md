# HR Management System

A comprehensive Human Resources Management System built with Next.js 15, featuring employee management, attendance tracking, leave management, payroll processing, and AI-powered analytics.

## Features

### Employee Portal
- **Dashboard** - Overview of personal information, attendance, and leave balance
- **Attendance Tracking** - View and manage attendance records
- **Leave Management** - Submit and track leave requests
- **Schedule Viewing** - Access work schedules
- **Payslip Access** - View and download payslips

### HR Portal
- **Employee Data Management** - Complete CRUD operations for employee records
- **Leave Approvals** - Review and process leave requests
- **Attendance Monitoring** - Track employee attendance across branches
- **Scheduling** - Create and manage employee work schedules
- **Payslip Generation** - Generate and distribute employee payslips
- **Announcements** - Post company-wide announcements

### Admin Portal
- **Dashboard** - System-wide analytics and insights
- **Branch Management** - Manage company branches
- **Position Management** - Define and manage job positions
- **Branch Allocation** - Assign employees to branches
- **Approval Workflows** - Review and approve system changes
- **Reports** - Generate comprehensive HR reports with AI-powered insights

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL with Drizzle ORM
- **Authentication:** NextAuth.js v4
- **UI Components:** Radix UI + Tailwind CSS
- **AI:** Google Genkit for AI-powered analytics
- **PDF Generation:** jsPDF for payslip and report exports
- **Charts:** Recharts for data visualization
- **Forms:** React Hook Form + Zod validation

## Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database
- Google API Key (for AI features)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ThesisCapstone
```

### 2. Install Dependencies

```bash
npm install
# or
bun install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Update the [.env](.env) file with your configuration:

```env
# Database Configuration
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/thesis_db

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:9002

# Google AI (Genkit)
GOOGLE_API_KEY=your_google_api_key_here
```

Generate a secure `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

### 4. Set Up the Database

Start PostgreSQL with Docker Compose (recommended):

```bash
docker-compose up -d
```

Run database migrations:

```bash
npm run db:push
```

Seed the database with sample data:

```bash
npm run db:seed
```

### 5. Run the Development Server

```bash
npm run dev
# or
bun dev
```

The application will be available at [http://localhost:9002](http://localhost:9002)

## Login Credentials

See [LOGIN_CREDENTIALS.md](LOGIN_CREDENTIALS.md) for all test accounts.

**Quick Access:**
- **Admin:** `super@example.com` / `password`
- **HR:** `olivia.chen.hr@example.com` / `password`
- **Employee:** `10001` / `password`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 9002 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run db:generate` | Generate database migrations |
| `npm run db:migrate` | Run database migrations |
| `npm run db:push` | Push schema changes to database |
| `npm run db:studio` | Open Drizzle Studio (database GUI) |
| `npm run db:seed` | Seed database with sample data |
| `npm run genkit:dev` | Start Genkit development server |

## Project Structure

```
ThesisCapstone/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── admin/             # Admin portal pages
│   │   ├── hr/                # HR portal pages
│   │   ├── dashboard/         # Employee portal pages
│   │   └── api/               # API routes
│   ├── components/            # React components
│   │   └── ui/               # Reusable UI components
│   ├── lib/                   # Utility libraries
│   │   ├── db.ts             # Database connection
│   │   ├── schema.ts         # Database schema
│   │   ├── auth.ts           # Authentication config
│   │   └── data.ts           # Data access layer
│   ├── ai/                    # AI/Genkit configuration
│   ├── hooks/                 # Custom React hooks
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
├── drizzle.config.js         # Drizzle ORM configuration
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── docker-compose.yml        # Docker services configuration
```

## Database Schema

The system uses the following main tables:
- `users` - All system users (employees, HR, admins)
- `branches` - Company branch locations
- `positions` - Job positions
- `attendance` - Employee attendance records
- `leave_requests` - Leave applications and approvals
- `schedules` - Work schedules
- `payslips` - Employee payroll records
- `announcements` - Company announcements

## Deployment

### Deploy to Vercel with Vercel Postgres

This project is configured to use **Vercel Postgres** as the production database.

#### Quick Deployment Steps

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy to Vercel:**
```bash
vercel
```

3. **Set up Vercel Postgres:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard) → **Storage**
   - Click **Create Database** → **Postgres**
   - Name your database (e.g., `hr-management-db`)
   - Click **Create**
   - Connect the database to your project

4. **Configure Environment Variables:**

   Vercel automatically adds `POSTGRES_URL` when you connect the database. Add these additional variables in **Settings** → **Environment Variables**:

   ```env
   DATABASE_URL=${POSTGRES_URL}
   NEXTAUTH_SECRET=<generate-with-openssl-rand-base64-32>
   NEXTAUTH_URL=https://your-app.vercel.app
   GOOGLE_API_KEY=<your-google-api-key>
   ```

5. **Run Database Migrations:**
```bash
# Pull production environment variables
vercel env pull .env.production

# Run migrations (using our helper script)
./scripts/migrate-production.sh
```

6. **Seed the Database (First Time Only):**
```bash
./scripts/seed-production.sh
```

7. **Deploy to Production:**
```bash
vercel --prod
```

#### Detailed Setup Guide

For detailed instructions on setting up Vercel Postgres, see [VERCEL_POSTGRES_SETUP.md](VERCEL_POSTGRES_SETUP.md)

#### Alternative Database Providers

While this project is optimized for Vercel Postgres, you can also use:
- **Neon** - Serverless PostgreSQL
- **Supabase** - Open-source Firebase alternative
- **Railway** - Full-stack deployment platform

Simply update the `DATABASE_URL` environment variable with your chosen provider's connection string.

## Features in Detail

### Authentication & Authorization
- Role-based access control (Admin, HR, Employee)
- Secure password hashing with bcrypt
- Session management with NextAuth.js
- Protected routes with middleware

### AI-Powered Analytics
- Automated report generation using Google Genkit
- Intelligent insights from HR data
- Natural language report summaries

### Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interfaces

### Data Export
- PDF generation for payslips
- Report exports with charts and tables
- Print-optimized layouts

## Development

### Database Management

Access Drizzle Studio for visual database management:
```bash
npm run db:studio
```

### Type Safety

Run type checking:
```bash
npm run typecheck
```

### Code Quality

Run linting:
```bash
npm run lint
```

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running: `docker-compose ps`
- Check `DATABASE_URL` in [.env](.env)
- Verify database exists: `docker-compose exec db psql -U postgres -l`

### Authentication Issues
- Ensure `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your development URL
- Clear browser cookies and try again

### Build Errors
- Run `npm run typecheck` to identify TypeScript errors
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## License

This project is part of a thesis/capstone project.

## Support

For issues and questions, please open an issue in the repository.
