#!/bin/bash

# Neon Database Migration Script
# This script safely runs database migrations on your Neon PostgreSQL database

set -e  # Exit on error

echo "🚀 Neon Database Migration Script"
echo "==================================="
echo ""

# Check if .env.production exists, if not pull from Vercel
if [ ! -f .env.production ]; then
    echo "📥 Pulling environment variables from Vercel..."

    # Check if vercel CLI is installed
    if command -v vercel &> /dev/null; then
        vercel env pull .env.production
        echo "✅ Environment variables downloaded"
    else
        echo "⚠️  Vercel CLI not found. Using local .env file instead."
        if [ ! -f .env ]; then
            echo "❌ Error: No .env file found"
            echo "Please create a .env file with your Neon DATABASE_URL"
            exit 1
        fi
        cp .env .env.production
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

# Ask for confirmation
read -p "⚠️  Are you sure you want to run migrations on this database? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "❌ Migration cancelled"
    exit 0
fi

echo ""
echo "🔄 Running database migrations..."
echo ""

# Run migration with Neon database URL
# Using db:push for schema synchronization
DATABASE_URL="$DATABASE_URL" npm run db:push

echo ""
echo "✅ Migration completed successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Verify the migration in Neon Console: https://console.neon.tech"
echo "2. Check your tables using: npm run db:studio"
echo "3. Test your production application"
echo "4. If this is initial setup, run the seed script: ./scripts/seed-neon.sh"
echo ""
