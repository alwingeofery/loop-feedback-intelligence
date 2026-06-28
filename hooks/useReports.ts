"use client";

import { useEffect, useState } from "react";
import type { ReportItem } from "@/types/report";

// Reports hook placeholder for Voice of Customer reporting workflows.
export function useReports() {
  const [items, setItems] = useState<ReportItem[]>([]);

  useEffect(() => {
    setItems([]);
  }, []);

  return { items, isLoading: false };
}

