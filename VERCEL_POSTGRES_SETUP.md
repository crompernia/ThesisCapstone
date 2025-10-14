# Vercel Postgres Setup Guide

This guide will help you set up Vercel Postgres as your production database for the HR Management System.

## Prerequisites

- A Vercel account ([sign up at vercel.com](https://vercel.com))
- Your project deployed to Vercel (or ready to deploy)
- Vercel CLI installed: `npm i -g vercel`

## Step 1: Create a Vercel Postgres Database

### Option A: Via Vercel Dashboard (Recommended)

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to the **Storage** tab
3. Click **Create Database**
4. Select **Postgres**
5. Choose a database name (e.g., `hr-management-db`)
6. Select a region close to your deployment region
7. Click **Create**

### Option B: Via Vercel CLI

```bash
vercel postgres create hr-management-db
```

## Step 2: Connect Database to Your Project

### Via Vercel Dashboard

1. Go to your project settings
2. Navigate to **Storage** tab
3. Click **Connect Store**
4. Select your Postgres database
5. Click **Connect**

This will automatically add the required environment variables to your project:
- `POSTGRES_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NO_SSL`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

## Step 3: Update Environment Variables

You need to use the correct connection string for Drizzle ORM.

### In Vercel Dashboard

1. Go to **Settings** → **Environment Variables**
2. Add/Update the following variables:

```env
# Use the POSTGRES_URL for Drizzle ORM
DATABASE_URL=${POSTGRES_URL}

# NextAuth Configuration
NEXTAUTH_SECRET=<your-secret-from-openssl-rand-base64-32>
NEXTAUTH_URL=https://your-app.vercel.app

# Google AI API Key
GOOGLE_API_KEY=<your-google-api-key>
```

**Important:** Make sure to set these for all environments (Production, Preview, Development)

## Step 4: Local Development with Vercel Postgres (Optional)

If you want to use Vercel Postgres for local development:

### Pull Environment Variables

```bash
vercel env pull .env.local
```

This creates a `.env.local` file with your Vercel Postgres credentials.

### Or Manually Add to .env.local

```bash
# Get your connection string from Vercel Dashboard
DATABASE_URL="postgres://default:xxx@xxx-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require"
```

**Note:** For local development, it's recommended to keep using Docker Compose to avoid conflicts.

## Step 5: Run Database Migrations

After deploying your app with the database connected:

### Option A: Via Vercel CLI (Local)

```bash
# Pull environment variables
vercel env pull .env.production

# Run migrations using production credentials
DATABASE_URL="$(grep DATABASE_URL .env.production | cut -d '=' -f2-)" npm run db:push
```

### Option B: Via Build Command

Update your [package.json](package.json) to run migrations during build:

```json
{
  "scripts": {
    "build": "npm run db:push && next build",
    "vercel-build": "npm run db:push && next build"
  }
}
```

**Warning:** This runs migrations on every deploy. Use with caution in production.

### Option C: Manual Migration (Recommended)

1. Clone your repo locally
2. Pull production environment variables:
   ```bash
   vercel env pull .env.production
   ```
3. Run migrations with production credentials:
   ```bash
   DATABASE_URL="$(grep DATABASE_URL .env.production | cut -d '=' -f2-)" npm run db:push
   ```

## Step 6: Seed Production Database (Initial Setup Only)

**Warning:** Only do this once for initial setup!

```bash
# Pull production environment variables
vercel env pull .env.production

# Run seed script with production credentials
DATABASE_URL="$(grep DATABASE_URL .env.production | cut -d '=' -f2-)" npm run db:seed
```

## Vercel Postgres Connection Details

Vercel Postgres provides multiple connection strings:

| Variable | Use Case |
|----------|----------|
| `POSTGRES_URL` | **Use this for Drizzle ORM** - Connection pooling enabled |
| `POSTGRES_URL_NON_POOLING` | Direct connection (use for migrations if pooling causes issues) |
| `POSTGRES_PRISMA_URL` | Optimized for Prisma (not needed for Drizzle) |
| `POSTGRES_URL_NO_SSL` | Without SSL (not recommended for production) |

## Important Notes

### Connection Pooling

Vercel Postgres uses connection pooling by default. This is ideal for serverless functions but might cause issues with certain migration tools.

If you encounter issues with `db:push`, try using the non-pooling URL:

```bash
DATABASE_URL="$POSTGRES_URL_NON_POOLING" npm run db:push
```

### SSL Requirements

Vercel Postgres **requires** SSL connections. Make sure your connection string includes `?sslmode=require`.

### Database Limits

Check your plan limits:
- **Hobby Plan:** 256 MB storage, 60 hours compute/month
- **Pro Plan:** 512 MB storage, unlimited compute

[View current pricing](https://vercel.com/docs/storage/vercel-postgres/usage-and-pricing)

## Monitoring Your Database

### Via Vercel Dashboard

1. Go to **Storage** → Your Postgres Database
2. View metrics:
   - Storage usage
   - Compute time
   - Connection count
   - Query performance

### Via SQL Editor

Execute queries directly in the Vercel dashboard:
1. Go to **Storage** → Your Database → **Data**
2. Use the SQL editor to run queries

### Example Queries

```sql
-- Check all tables
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public';

-- Count users
SELECT COUNT(*) FROM users;

-- Check database size
SELECT pg_size_pretty(pg_database_size(current_database()));
```

## Troubleshooting

### Connection Timeout

If you get connection timeouts:
1. Check your region settings (database and deployment should be in same region)
2. Verify SSL is enabled in connection string
3. Try using `POSTGRES_URL_NON_POOLING` for migrations

### Migration Failures

If migrations fail:
```bash
# Use non-pooling connection
DATABASE_URL="$POSTGRES_URL_NON_POOLING" npm run db:push

# Or use Drizzle Kit's push command with verbose logging
npx drizzle-kit push --verbose
```

### "Too Many Connections" Error

This happens when connection pool is exhausted:
1. Check for connection leaks in your code
2. Ensure you're using `POSTGRES_URL` (with pooling) for application code
3. Close connections properly in API routes

### Access Denied

Make sure:
1. Environment variables are set correctly in Vercel
2. You're using the correct credentials from Vercel
3. SSL mode is enabled in the connection string

## Production Deployment Checklist

- [ ] Vercel Postgres database created
- [ ] Database connected to Vercel project
- [ ] `DATABASE_URL` environment variable set
- [ ] `NEXTAUTH_SECRET` environment variable set (generate with `openssl rand -base64 32`)
- [ ] `NEXTAUTH_URL` set to your production domain
- [ ] `GOOGLE_API_KEY` environment variable set
- [ ] Database schema pushed (`npm run db:push`)
- [ ] Database seeded with initial data (`npm run db:seed`)
- [ ] Test login with admin credentials
- [ ] Verify all features work in production

## Useful Commands

```bash
# Pull all environment variables from Vercel
vercel env pull

# Link local project to Vercel project
vercel link

# Run local dev with Vercel environment
vercel dev

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# Open Vercel dashboard
vercel dashboard
```

## Next Steps

After setting up Vercel Postgres:

1. **Test your deployment** - Verify all features work with production database
2. **Set up backups** - Configure automatic backups in Vercel dashboard
3. **Monitor performance** - Keep an eye on database metrics
4. **Optimize queries** - Use indexes for frequently queried fields
5. **Set up alerts** - Configure notifications for storage/compute limits

## Additional Resources

- [Vercel Postgres Documentation](https://vercel.com/docs/storage/vercel-postgres)
- [Drizzle ORM with Vercel Postgres](https://orm.drizzle.team/docs/get-started-postgresql#vercel-postgres)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
