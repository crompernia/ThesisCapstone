#!/bin/bash

# Neon Database Seed Script
# ⚠️ WARNING: This script will populate your Neon database with sample data
# Only run this ONCE during initial setup!

set -e  # Exit on error

echo "🌱 Neon Database Seed Script"
echo "=============================="
echo ""
echo "⚠️  WARNING: This will add sample data to your Neon database!"
echo "Only run this script during initial setup."
echo ""

# Check if .env.production exists, if not try local .env
if [ ! -f .env.production ]; then
    echo "📥 No .env.production found. Checking for local .env..."

    if command -v vercel &> /dev/null; then
        echo "Pulling environment variables from Vercel..."
        vercel env pull .env.production
        echo "✅ Environment variables downloaded"
    elif [ -f .env ]; then
        echo "⚠️  Using local .env file"
        cp .env .env.production
    else
        echo "❌ Error: No environment file found"
        echo "Please create a .env file with your Neon DATABASE_URL"
        exit 1
    fi
    echo ""
fi

# Extract DATABASE_URL from .env.production
DATABASE_URL=$(grep "^DATABASE_URL=" .env.production | cut -d '=' -f2- | tr -d '"' | tr -d "'")

if [ -z "$DATABASE_URL" ]; then
    echo "❌ Error: DATABASE_URL not found in .env.production"
    echo ""
    echo "Please add your Neon connection string to .env.production:"
    echo "DATABASE_URL=postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require"
    exit 1
fi

# Check if it's a Neon connection string
if [[ $DATABASE_URL == *"neon.tech"* ]]; then
    echo "✅ Detected Neon database connection"
else
    echo "⚠️  Warning: This doesn't appear to be a Neon connection string"
    echo "Connection: ${DATABASE_URL:0:50}..."
fi

echo ""
echo "📊 Database Connection Info:"
echo "Provider: Neon"
echo "SSL: Required"
echo ""

# Strong confirmation required
read -p "⚠️  Type 'SEED NEON' to confirm (case-sensitive): " confirm

if [ "$confirm" != "SEED NEON" ]; then
    echo "❌ Seed cancelled - confirmation text did not match"
    exit 0
fi

echo ""
echo "🌱 Seeding Neon database with sample data..."
echo ""

# Run seed script with Neon database URL
if DATABASE_URL="$DATABASE_URL" npm run db:seed; then
    echo ""
    echo "✅ Database seeded successfully!"
    echo ""
else
    echo ""
    echo "❌ Seeding failed!"
    echo ""
    echo "If the database already has data, you can either:"
    echo "1. Keep the existing data (recommended for production)"
    echo "2. Clear the database and reseed (only for development/testing)"
    echo ""
    exit 1
fi
echo ""
echo "📝 Sample accounts created:"
echo "  Admin:    super@example.com / password"
echo "  HR:       olivia.chen.hr@example.com / password"
echo "  Employee: 10001 / password"
echo ""
echo "🔒 IMPORTANT: Change these passwords in production!"
echo ""
echo "Next steps:"
echo "1. Log in to your application with the admin account"
echo "2. Verify all tables in Neon Console: https://console.neon.tech"
echo "3. Change all default passwords immediately"
echo "4. Create real user accounts"
echo "5. Delete or disable sample accounts when ready"
echo ""
echo "💡 Tip: Use Neon's branching feature to create preview databases for testing!"
echo ""
