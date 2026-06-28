"use client";

import { useEffect, useState } from "react";
import type { DashboardSummary } from "@/types/dashboard";

// Dashboard hook placeholder for workspace analytics.
export function useDashboard() {
  const [summary, setSummary] = useState<DashboardSummary>({
    totalFeedback: 0,
    averageSentiment: 0,
    topThemes: []
  });

  useEffect(() => {
    setSummary({
      totalFeedback: 0,
      averageSentiment: 0,
      topThemes: []
    });
  }, []);

  return { summary, isLoading: false };
}

