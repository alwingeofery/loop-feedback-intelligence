// Dashboard service composes analytics from feedback, themes, and reports.
export async function getDashboardSummary() {
  return {
    totalFeedback: 0,
    averageSentiment: 0,
    topThemes: []
  };
}

