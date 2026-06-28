// AI service will call Claude for classification, summarization, and Q&A.
export async function classifyFeedback(_input: string) {
  return {
    label: "unclassified",
    confidence: 0
  };
}

