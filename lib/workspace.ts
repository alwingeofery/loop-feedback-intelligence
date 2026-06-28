// Tenant-aware helpers should enforce workspace scoping consistently.
export function assertWorkspaceScope(workspaceId: string) {
  return {
    workspaceId
  };
}

