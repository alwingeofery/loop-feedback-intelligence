import Anthropic from "@anthropic-ai/sdk";

// Shared Claude SDK client for future AI workflows.
export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "placeholder-key"
});

export function getClaudeModel(): string {
  return process.env.CLAUDE_MODEL || "claude-3-5-sonnet-latest";
}

