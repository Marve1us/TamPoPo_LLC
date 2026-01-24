# TamPoPo - Texas AI Solutions Website

## Overview

TamPoPo is a marketing website for TamPoPo LLC, a Texas-based company offering AI solutions for small businesses. The site showcases AI services including websites, chatbots, voice assistants, and CRM systems. It features a cyberpunk aesthetic with teal and silver colors, allowing visitors to schedule demos and contact the company.

The application is a full-stack TypeScript project with a React frontend and Express backend, designed for lead generation and service showcase.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS v4 with custom cyberpunk theme (dark mode default, teal primary color)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for page transitions and effects
- **Fonts**: Orbitron (display/headers) and Rajdhani (body text) for tech aesthetic

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **API Design**: RESTful endpoints under `/api` prefix
- **Validation**: Zod schemas shared between frontend and backend via drizzle-zod
- **Storage**: Currently uses in-memory storage (MemStorage class) with PostgreSQL schema ready for migration

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Tables**: `contact_submissions` and `demo_requests` for lead capture
- **Migration**: Uses `drizzle-kit push` for schema synchronization

### Build System
- **Frontend Build**: Vite with React plugin
- **Backend Build**: esbuild for production bundling
- **Development**: Concurrent Vite dev server with Express backend
- **Output**: Production builds to `dist/` directory

### Project Structure
```
client/           # React frontend application
  src/
    components/   # UI components (layout, ui from shadcn)
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utility functions and query client
server/           # Express backend
  routes.ts       # API route definitions
  storage.ts      # Data storage abstraction
  static.ts       # Static file serving for production
shared/           # Code shared between frontend and backend
  schema.ts       # Drizzle database schema and Zod types
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM**: Database toolkit with type-safe queries
- **connect-pg-simple**: Session storage for PostgreSQL (available but not yet implemented)

### UI Framework
- **Radix UI**: Headless component primitives for accessibility
- **shadcn/ui**: Pre-built component library based on Radix
- **Lucide React**: Icon library

### Build Tools
- **Vite**: Frontend development and build tool
- **esbuild**: Fast backend bundling for production
- **TypeScript**: Type checking across the entire codebase

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator