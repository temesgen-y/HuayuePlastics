#!/bin/bash

# Deploy to Vercel
echo "Deploying to Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Deploy
vercel --prod

echo "Deployment complete!"
echo ""
echo "IMPORTANT: Don't forget to set these environment variables in your Vercel project:"
echo "- SESSION_SECRET: A secure random string for session encryption"
echo "- TELEGRAM_BOT_TOKEN: Your Telegram bot token (optional)"
echo "- TELEGRAM_CHAT_ID: Your Telegram chat ID (optional)"
echo ""
echo "You can set them in the Vercel dashboard under Project Settings > Environment Variables" 