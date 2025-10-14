#!/bin/bash

# Production Database Migration Script for Vercel Postgres
# This script safely runs database migrations on your Vercel Postgres production database

set -e  # Exit on error

echo "🚀 Production Database Migration Script"
echo "========================================"
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

# Ask for confirmation
read -p "⚠️  Are you sure you want to run migrations on PRODUCTION database? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "❌ Migration cancelled"
    exit 0
fi

echo ""
echo "🔄 Running database migrations..."
echo ""

# Run migration with production database URL
DATABASE_URL="$DATABASE_URL" npm run db:push

echo ""
echo "✅ Migration completed successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Verify the migration in Vercel Dashboard -> Storage -> Your Database"
echo "2. Test your production application"
echo "3. If this is initial setup, run the seed script: ./scripts/seed-production.sh"
echo ""
