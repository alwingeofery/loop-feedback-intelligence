import type { Role } from "@/types/auth";

// Central RBAC policy helpers.
export function hasRole(userRole: Role, allowedRoles: Role[]) {
  return allowedRoles.includes(userRole);
}

