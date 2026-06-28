# Architecture

This starter uses a layered structure:

- `app/` for routes, pages, and API handlers.
- `services/` for business logic.
- `repositories/` for Prisma data access.
- `lib/` for shared infrastructure helpers.
- `types/` and `validations/` for contracts and schemas.

The intended design is multi-tenant. Every core domain entity should be scoped by `workspaceId`.

