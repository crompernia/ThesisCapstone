# Neon Database Setup Guide

This guide will help you set up Neon as your production PostgreSQL database. Neon is a serverless PostgreSQL platform that's fully compatible with Drizzle ORM and perfect for production deployments.

## Why Neon?

- **Serverless PostgreSQL** - Scale to zero when not in use
- **Branching** - Create database branches like Git branches
- **Auto-scaling** - Automatically scales based on load
- **Cost-effective** - Free tier available, pay only for what you use
- **Full PostgreSQL compatibility** - Works perfectly with Drizzle ORM
- **Connection pooling** - Built-in connection pooling for serverless
- **Low latency** - Edge-optimized connections

## Prerequisites

- A Neon account ([sign up at neon.tech](https://neon.tech))
- Your project ready to deploy

## Step 1: Create a Neon Account and Project

### Via Neon Dashboard

1. Go to [neon.tech](https://neon.tech) and sign up (free tier available)
2. Click **Create Project**
3. Configure your project:
   - **Project Name**: `hr-management-system` (or your preferred name)
   - **Region**: Choose closest to your users (e.g., US East, EU West)
   - **PostgreSQL Version**: 16 (recommended)
4. Click **Create Project**

After creation, you'll see your connection strings immediately.

## Step 2: Get Your Connection Strings

Neon provides multiple connection strings for different use cases:

### Connection String Types

```env
# Pooled Connection (Recommended for Serverless/Vercel)
DATABASE_URL="postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require"

# Direct Connection (For migrations and schema changes)
DIRECT_DATABASE_URL="postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require&connect_timeout=10"
```

### Where to Find Them

1. In your Neon dashboard, go to your project
2. Click **Dashboard** tab
3. Find the **Connection Details** section
4. Copy both:
   - **Pooled connection** (for application use)
   - **Direct connection** (for migrations)

## Step 3: Configure Environment Variables

### For Local Development

Update your `.env` file:

```env
# Neon Database (Pooled Connection)
DATABASE_URL="postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require"

# Direct connection for migrations (optional but recommended)
DIRECT_DATABASE_URL="postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require&connect_timeout=10"

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:9002

# Google AI (Genkit)
GOOGLE_API_KEY=your_google_api_key_here
```

### For Vercel Deployment

1. Go to your Vercel project
2. Navigate to **Settings** → **Environment Variables**
3. Add the following for all environments (Production, Preview, Development):

```env
DATABASE_URL=postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require
NEXTAUTH_SECRET=<your-secret-from-openssl-rand-base64-32>
NEXTAUTH_URL=https://your-app.vercel.app
GOOGLE_API_KEY=<your-google-api-key>
```

## Step 4: Update Drizzle Configuration (Optional)

Your existing Drizzle configuration already works with Neon! But you can optimize it:

Update [drizzle.config.js](drizzle.config.js):

```javascript
import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  schema: './src/lib/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    // Use DIRECT_DATABASE_URL for migrations if available, otherwise DATABASE_URL
    url: process.env.DIRECT_DATABASE_URL || process.env.DATABASE_URL,
  },
});
```

## Step 5: Run Database Migrations

### Using the Migration Script

```bash
# Pull environment variables (if using Vercel)
vercel env pull .env.production

# Run migrations using our helper script
./scripts/migrate-neon.sh
```

### Manual Migration

```bash
# Make sure you're using the connection string
npm run db:push

# Or use drizzle-kit directly
npx drizzle-kit push
```

## Step 6: Seed the Database (First Time Only)

```bash
# Using the seed script
./scripts/seed-neon.sh

# Or manually
npm run db:seed
```

## Neon-Specific Features

### Database Branching

Neon allows you to create database branches for testing:

```bash
# Create a new branch via Neon CLI
neonctl branches create --name preview-feature

# Get connection string for the branch
neonctl connection-string --branch preview-feature
```

Use branches for:
- Preview deployments on Vercel
- Testing migrations
- Feature development

### Connection Pooling

Neon provides built-in connection pooling optimized for serverless:

- **Pooled connection**: Uses PgBouncer for connection pooling
- **Direct connection**: Direct database connection (use for migrations)

Your application should use the **pooled connection** (`DATABASE_URL`), while migrations should use the **direct connection**.

### Auto-scaling

Neon automatically scales compute resources:
- Scales up during high traffic
- Scales down to zero during inactivity (on free tier)
- No configuration needed!

## Step 7: Verify Database Connection

Test your connection locally:

```bash
# Test database connection
npm run db:studio

# This will open Drizzle Studio at http://localhost:4983
# You should see your Neon database tables
```

## Monitoring Your Database

### Via Neon Dashboard

1. Go to your project in [Neon Console](https://console.neon.tech)
2. View metrics:
   - **Storage**: Current database size
   - **Compute**: CPU and memory usage
   - **Connections**: Active connections
   - **Queries**: Query performance

### Query Console

Execute SQL queries directly:
1. Go to **SQL Editor** in Neon dashboard
2. Run queries to verify data:

```sql
-- Check tables
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public';

-- Count users
SELECT COUNT(*) FROM users;

-- Check database size
SELECT pg_size_pretty(pg_database_size(current_database()));
```

## Neon vs Vercel Postgres

| Feature | Neon | Vercel Postgres |
|---------|------|-----------------|
| **Free Tier** | 512 MB storage, 0.5 GB data transfer | 256 MB storage, 60 hrs compute |
| **Branching** | ✅ Yes | ❌ No |
| **Auto-scaling** | ✅ Yes | Limited |
| **Scale to Zero** | ✅ Yes (Free tier) | ❌ No |
| **Connection Pooling** | ✅ Built-in (PgBouncer) | ✅ Built-in |
| **Regional Availability** | Multiple regions | Vercel regions only |
| **Pricing** | Pay as you go | Tiered pricing |
| **Integration** | Works with any platform | Optimized for Vercel |

## Drizzle ORM Compatibility

Neon is **100% compatible** with Drizzle ORM! Everything you're already using works:

✅ `drizzle-orm` - Full support
✅ `drizzle-kit` - Migrations, push, pull, studio
✅ Connection pooling - Optimized for serverless
✅ Transactions - Full ACID compliance
✅ All PostgreSQL features - Full PostgreSQL 16 support

### Your Existing Code Works As-Is!

Your current Drizzle setup in [src/lib/db.ts](src/lib/db.ts) works perfectly with Neon:

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

// This works with Neon!
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Neon requires SSL
});

export const db = drizzle(pool);
```

## Troubleshooting

### Connection Timeout

If you get connection timeouts:
```env
# Add connection timeout
DATABASE_URL="postgresql://...?sslmode=require&connect_timeout=10"
```

### SSL Errors

Neon requires SSL. Make sure your connection string includes:
```
?sslmode=require
```

Or update your database connection:
```typescript
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
```

### Migration Failures

Use direct connection for migrations:
```bash
DIRECT_DATABASE_URL="..." npm run db:push
```

### "Too Many Connections" Error

Switch to pooled connection string (not direct) in your application code.

## Production Deployment Checklist

- [ ] Neon project created
- [ ] Database connection strings obtained (pooled + direct)
- [ ] `DATABASE_URL` environment variable set in Vercel
- [ ] `NEXTAUTH_SECRET` environment variable set (generate with `openssl rand -base64 32`)
- [ ] `NEXTAUTH_URL` set to your production domain
- [ ] `GOOGLE_API_KEY` environment variable set
- [ ] Database schema migrated (`npm run db:push`)
- [ ] Database seeded with initial data (`npm run db:seed`)
- [ ] Test login with admin credentials
- [ ] Verify all features work in production
- [ ] Monitor database metrics in Neon dashboard

## Useful Commands

```bash
# View database in GUI
npm run db:studio

# Push schema changes
npm run db:push

# Generate migrations
npm run db:generate

# Seed database
npm run db:seed

# Deploy to Vercel
vercel --prod
```

## Cost Optimization Tips

### Free Tier Limits
- **Storage**: 512 MB
- **Compute**: 191.9 compute hours/month
- **Data Transfer**: 5 GB/month

### Stay Within Free Tier
1. Enable **Auto-suspend** (scales to zero when inactive)
2. Set **Scale to Zero Delay** to 5 minutes
3. Use **Branching** for preview deployments instead of separate projects
4. Monitor usage in Neon dashboard

### When to Upgrade
Upgrade to Pro ($19/month) when you need:
- More storage (>512 MB)
- More compute hours
- Database branching for all projects
- Point-in-time recovery
- Higher performance

## Next Steps

After setting up Neon:

1. **Deploy to Vercel** - Your app will now use Neon as the database
2. **Set up Branching** - Create preview branches for staging
3. **Monitor Performance** - Use Neon dashboard for insights
4. **Configure Backups** - Neon auto-backs up, but verify settings
5. **Optimize Queries** - Use Neon's query performance insights

## Additional Resources

- [Neon Documentation](https://neon.tech/docs)
- [Drizzle ORM with Neon](https://orm.drizzle.team/docs/get-started-postgresql#neon)
- [Neon + Vercel Guide](https://neon.tech/docs/guides/vercel)
- [Neon Branching Guide](https://neon.tech/docs/guides/branching)
- [Neon Pricing](https://neon.tech/pricing)

## Support

- Neon Discord: [discord.gg/neon](https://discord.gg/neon)
- Neon GitHub: [github.com/neondatabase/neon](https://github.com/neondatabase/neon)
