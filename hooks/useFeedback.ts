"use client";

import { useEffect, useState } from "react";
import type { FeedbackItem } from "@/types/feedback";

// Feedback hook placeholder for future API integration.
export function useFeedback() {
  const [items, setItems] = useState<FeedbackItem[]>([]);

  useEffect(() => {
    setItems([]);
  }, []);

  return { items, isLoading: false };
}

