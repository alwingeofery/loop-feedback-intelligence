import { ReportPreview } from "@/components/reports";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Input,
  SectionHeader
} from "@/components/ui";
import { reportCards } from "@/lib/mock-data";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Voice of Customer"
        title="Generate and review customer insight reports"
        description="Create polished VOC summaries with theme movement, sentiment shifts, customer quotes, and recommended product actions."
        action={<Button>Generate Voice of Customer Report</Button>}
      />

      <Card>
        <CardContent className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <p className="mb-2 text-sm font-medium text-slate-700">Start date</p>
            <Input type="date" defaultValue="2026-06-01" />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-slate-700">End date</p>
            <Input type="date" defaultValue="2026-06-28" />
          </div>
          <div className="flex items-end">
            <Button fullWidth>Refresh preview</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          {reportCards.map((report) => (
            <Card key={report.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-950">
                      {report.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">{report.date}</p>
                  </div>
                  <Badge variant={report.status === "Ready" ? "green" : "amber"}>
                    {report.status}
                  </Badge>
                </div>
                <p className="mt-4 text-sm text-slate-600">{report.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <ReportPreview
          topThemes={["Support speed", "Onboarding friction", "Billing clarity"]}
          sentimentChanges={[
            "Positive sentiment increased 11 points for support speed.",
            "Onboarding friction became the top negative theme this week."
          ]}
          customerQuotes={[
            "The support team resolved my issue in under ten minutes.",
            "I had to repeat steps in onboarding before import finally worked."
          ]}
          recommendedActions={[
            "Simplify the onboarding checklist for first-time users.",
            "Clarify team seat pricing in upgrade and billing surfaces.",
            "Turn support workflow wins into onboarding guidance."
          ]}
        />
      </div>
    </div>
  );
}
