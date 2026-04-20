# VSRMS (Visitor/Staff Remote Management System) Guidelines

## Build and Development Commands
- `pnpm dev`: Starts the Next.js development server.
- `pnpm build`: Builds the production bundle.
- `pnpm lint`: Runs Biome check for linting and formatting.
- `pnpm format`: Runs Biome format to fix style issues.
- `pnpm pnpm-approve-builds`: Approves build scripts for dependencies.

## Technical Architecture
- **Framework**: Next.js 15+ (App Router).
- **Styling**: Tailwind CSS 4 + Vanilla CSS Design Tokens (see `src/app/globals.css`).
- **Database**: MongoDB via Mongoose (see `src/lib/db.ts`).
- **Models**:
  - `Enquiry`: Patient/Transport request management.
  - `User`: Roles for Admin, Tracker, Partner, and Patient.
- **Components**:
  - `src/components/layout`: Core wrappers (Navbar, Footer, AdminSidebar).
  - `src/components/ui`: Reusable primitive components.

## Development Standards
- **Naming**: Use PascalCase for components, camelCase for variables/functions.
- **Server Actions**: Prefer Server Actions for form submissions.
- **Client Components**: Use `'use client'` at the top of files that require interactivity or hooks.
- **State Management**: Use React hooks and Context for simple state, URL params for navigation-driven state.

## Core Modules
1. **Public Website**: Landing page, Care services, Enquiry forms.
2. **Admin Portal**: Enquiry management, Dashboard analytics.
3. **API Foundation**: Next.js API routes for unified data handling.
