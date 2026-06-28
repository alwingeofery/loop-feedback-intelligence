export interface DashboardMetric {
  label: string;
  value: number;
}

export interface DashboardSummary {
  totalFeedback: number;
  averageSentiment: number;
  topThemes: string[];
}

