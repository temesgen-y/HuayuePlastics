# Huayue Plastics Industry Website

## Overview

This is a full-stack web application for Huayue Plastics Industry, built with Express.js backend and React frontend using Vite. The application is designed as a corporate website for a plastic packaging manufacturer with contact form functionality, admin dashboard, and user authentication.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom green, white, and black color palette
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Authentication**: Passport.js with local strategy and session-based auth
- **Password Security**: Node.js crypto module with scrypt hashing
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple

## Key Components

### Pages Structure
- **Public Pages**: Home, Products, About Us, Agency Policy, News, Contact Us
- **Protected Pages**: Admin Dashboard (requires authentication)
- **Auth Pages**: Admin login page

### Core Features
1. **Contact Form**: Collects customer inquiries with name, email, phone, and message
2. **Telegram Integration**: Automatically sends contact form submissions to Telegram
3. **Admin Dashboard**: Protected area for viewing contact submissions
4. **User Authentication**: Session-based login system for admin access
5. **Responsive Design**: Mobile-first approach with Tailwind CSS

### UI Components
- Modular component architecture using Shadcn/ui
- Reusable Layout component with SEO meta tags
- Navigation with dropdown menus
- Contact form with validation and loading states
- Toast notifications for user feedback

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form validation occurs client-side using Zod schema
3. Validated data sent to `/api/contact` endpoint
4. Backend saves contact to PostgreSQL database
5. Backend sends notification to Telegram bot
6. Success/error response returned to frontend
7. Toast notification shown to user

### Authentication Flow
1. Admin accesses `/admin` route
2. Protected route checks authentication status via `/api/user`
3. If not authenticated, redirects to `/admin/auth`
4. Login form submits credentials to `/api/login`
5. Passport.js validates credentials against database
6. Session created and stored in PostgreSQL
7. User redirected to admin dashboard

### Admin Dashboard
1. Authenticated admin accesses contact list via `/api/contacts`
2. Backend queries database for all contact submissions
3. Data displayed in admin interface with read/unread status
4. Admin can mark contacts as read

## External Dependencies

### Database
- **PostgreSQL**: Primary database using Neon serverless
- **Drizzle ORM**: Type-safe database queries and migrations
- **Connection Pooling**: @neondatabase/serverless with WebSocket support

### Third-party Services
- **Telegram Bot API**: For contact form notifications
- **Bot Token**: Configured via environment variable
- **Chat ID**: Target chat for notifications

### Authentication & Security
- **Passport.js**: Authentication middleware
- **bcrypt**: Password hashing (though currently using crypto.scrypt)
- **Session Management**: Secure session handling with PostgreSQL storage

### Development Tools
- **Replit Integration**: Vite plugins for Replit environment
- **TypeScript**: Full type safety across frontend and backend
- **Hot Module Replacement**: Vite HMR for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Migrations**: Drizzle handles schema changes
4. **Environment Variables**: Required for database URL, session secret, Telegram credentials

### Production Setup
- **Start Command**: `npm start` runs the production build
- **Database**: Requires PostgreSQL database URL
- **Session Secret**: Required for secure session management
- **Telegram Integration**: Optional but recommended for contact notifications

### Development Workflow
- **Dev Command**: `npm run dev` starts development server with HMR
- **Type Checking**: `npm run check` validates TypeScript
- **Database Push**: `npm run db:push` applies schema changes

The application is structured as a monorepo with shared TypeScript types between frontend and backend, ensuring type safety across the entire stack. The modular architecture allows for easy maintenance and feature additions while maintaining a clean separation of concerns.