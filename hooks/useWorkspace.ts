"use client";

import { useEffect, useState } from "react";
import type { WorkspaceItem } from "@/types/workspace";

// Workspace hook placeholder for tenant-aware UI state.
export function useWorkspace() {
  const [workspace, setWorkspace] = useState<WorkspaceItem | null>(null);

  useEffect(() => {
    setWorkspace(null);
  }, []);

  return { workspace, isLoading: false };
}

