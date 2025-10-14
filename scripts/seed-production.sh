#!/bin/bash

# Production Database Seed Script for Vercel Postgres
# ⚠️ WARNING: This script will populate your production database with sample data
# Only run this ONCE during initial setup!

set -e  # Exit on error

echo "🌱 Production Database Seed Script"
echo "===================================="
echo ""
echo "⚠️  WARNING: This will add sample data to your production database!"
echo "Only run this script during initial setup."
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Error: Vercel CLI is not installed"
    echo "Install it with: npm i -g vercel"
    exit 1
fi

# Check if .env.production exists, if not pull from Vercel
if [ ! -f .env.production ]; then
    echo "📥 Pulling environment variables from Vercel..."
    vercel env pull .env.production
    echo "✅ Environment variables downloaded"
    echo ""
fi

# Extract DATABASE_URL from .env.production
DATABASE_URL=$(grep "^POSTGRES_URL=" .env.production | cut -d '=' -f2- | tr -d '"' | tr -d "'")

if [ -z "$DATABASE_URL" ]; then
    echo "❌ Error: POSTGRES_URL not found in .env.production"
    echo "Make sure your Vercel Postgres database is connected to your project"
    exit 1
fi

echo "📊 Database Connection Info:"
echo "Using: POSTGRES_URL from Vercel"
echo ""

# Strong confirmation required
read -p "⚠️  Type 'SEED PRODUCTION' to confirm (case-sensitive): " confirm

if [ "$confirm" != "SEED PRODUCTION" ]; then
    echo "❌ Seed cancelled - confirmation text did not match"
    exit 0
fi

echo ""
echo "🌱 Seeding production database with sample data..."
echo ""

# Run seed script with production database URL
DATABASE_URL="$DATABASE_URL" npm run db:seed

echo ""
echo "✅ Database seeded successfully!"
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
echo "2. Change all default passwords immediately"
echo "3. Create real user accounts"
echo "4. Delete or disable sample accounts"
echo ""
