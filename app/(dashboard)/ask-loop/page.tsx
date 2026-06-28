import { Button, Card, CardContent, Input, SectionHeader } from "@/components/ui";
import { askLoopExamples, askLoopSources } from "@/lib/mock-data";

export default function AskLoopPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Ask LOOP"
        title="Ask questions about your customer feedback"
        description="Use natural language to explore sentiment, trending themes, and emerging issues with source-backed answers."
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardContent className="space-y-5 p-6">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-900">
                What are the biggest drivers of negative feedback this week?
              </p>
            </div>
            <div className="rounded-3xl bg-blue-600 p-5 text-white">
              <p className="text-sm leading-6">
                Negative feedback is being driven primarily by onboarding
                friction and billing clarity. Onboarding friction rose 24%
                week over week after the new setup checklist, while billing
                confusion spiked after pricing copy changes on Thursday.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Example questions
              </p>
              <div className="flex flex-wrap gap-3">
                {askLoopExamples.map((question) => (
                  <div
                    key={question}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
                  >
                    {question}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                placeholder="Ask LOOP a question about your feedback..."
                className="sm:flex-1"
              />
              <Button>Ask</Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-950">Answer Card</h3>
              <p className="mt-2 text-sm text-slate-600">
                LOOP summarizes the top negative drivers, cites related feedback,
                and points to the themes that moved most sharply.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Source Feedback
              </h3>
              <div className="mt-5 space-y-4">
                {askLoopSources.map((source) => (
                  <div
                    key={source.customer}
                    className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700"
                  >
                    <p className="font-medium text-slate-900">{source.customer}</p>
                    <p className="mt-2">{source.quote}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
