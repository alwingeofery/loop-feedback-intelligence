# LOOP AI Customer Feedback Intelligence Platform

Production-ready starter structure for a multi-tenant AI customer feedback platform built with Next.js 14 App Router, TypeScript, Tailwind CSS, PostgreSQL, Prisma, Auth.js, Claude AI, Zod, Recharts, and Vercel-ready conventions.

## Included in this scaffold

- App Router pages for auth and dashboard areas
- API route placeholders for feedback, AI, reports, workspace, and health
- Prisma schema and seed setup
- RBAC-ready types and validation schemas
- Multi-tenant workspace-aware folder organization
- Placeholder hooks, services, repositories, and utilities
- Sample CSV and theme seed data

## Suggested next implementation steps

1. Install dependencies and start the app.
2. Configure PostgreSQL and Prisma migrations.
3. Replace placeholder Auth.js logic with real authentication.
4. Implement workspace-aware CRUD and dashboard queries.
5. Add Claude classification and retrieval workflows.

## Folder overview

```text
app/            Routes, pages, layouts, API handlers
components/     UI building blocks and feature components
lib/            Shared infrastructure helpers
prisma/         Database schema and seed logic
services/       Business logic layer
repositories/   Data access layer
types/          TypeScript contracts
validations/    Zod schemas
providers/      Client providers
hooks/          Client hooks
data/           Sample input data
docs/           Architecture notes
scripts/        CLI helpers
```

## Environment

Copy `.env.example` to `.env.local` and fill in your values before integrating the real services.
