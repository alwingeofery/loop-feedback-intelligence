// Analytics helpers normalize dashboard metrics and trend summaries.
export function summarizeFeedbackVolume(totalFeedback = 0) {
  return {
    totalFeedback,
    summaryLabel: totalFeedback > 0 ? "Active dataset" : "No feedback yet"
  };
}

