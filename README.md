# Huayue Plastics Website

A modern website for Huayue Plastics with contact form functionality and admin panel.

## Features

- Contact form with Telegram notifications
- Admin authentication
- Contact management dashboard
- Responsive design

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```

3. **Set Environment Variables** in Vercel dashboard:
   - `SESSION_SECRET`: A secure random string for session encryption
   - `TELEGRAM_BOT_TOKEN`: Your Telegram bot token
   - `TELEGRAM_CHAT_ID`: Your Telegram chat ID for notifications

## Environment Variables

- `SESSION_SECRET`: Secret key for session encryption
- `TELEGRAM_BOT_TOKEN`: Telegram bot token for notifications
- `TELEGRAM_CHAT_ID`: Telegram chat ID for notifications
- `NODE_ENV`: Set to "production" for production deployment

## Admin Access

Default admin credentials:
- Username: `admin`
- Password: `admin123`

**Important**: Change these credentials in production!

## Project Structure

- `client/`: React frontend
- `server/`: Express.js backend
- `shared/`: Shared TypeScript types and schemas
- `dist/`: Built frontend files
- `attached_assets/`: Static assets

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Passport.js, TypeScript
- **Database**: In-memory storage (can be replaced with PostgreSQL)
- **Deployment**: Vercel 

## Vercel Deployment

To deploy this application to Vercel, you need to configure the following environment variables in your Vercel project settings:

### Required Environment Variables

- `SESSION_SECRET`: A secure random string for session encryption (required)
- `TELEGRAM_BOT_TOKEN`: Your Telegram bot token (optional, for contact form notifications)
- `TELEGRAM_CHAT_ID`: Your Telegram chat ID (optional, for contact form notifications)

### Vercel Configuration

The application is configured to work with Vercel's serverless functions. The `vercel.json` file routes all API requests to the server function.

**Note**: Sessions will not persist between function invocations in the current setup. For production use, consider implementing a proper session store (Redis, database-backed, etc.).

### Troubleshooting

If you encounter a "FUNCTION_INVOCATION_FAILED" error:

1. Check that all required environment variables are set in Vercel
2. Ensure the `SESSION_SECRET` is properly configured
3. Verify that the build process completes successfully 