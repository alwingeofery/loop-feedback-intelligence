import { DashboardCharts } from "@/components/charts";
import { StatCard } from "@/components/dashboard";
import { Badge, Card, CardContent, SectionHeader } from "@/components/ui";
import {
  dashboardStats,
  feedbackVolumeData,
  sentimentData,
  topThemesData
} from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Workspace Overview"
        title="Welcome back to LOOP"
        description="Track feedback volume, sentiment shifts, and the themes shaping the customer experience across your workspace."
        action={<Badge variant="blue">Northstar Labs</Badge>}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <DashboardCharts
        volumeData={[...feedbackVolumeData]}
        sentimentData={[...sentimentData]}
        themeData={[...topThemesData]}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-950">
              Operational Snapshot
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              41 new records landed today, 12 of them flagged for negative
              sentiment review, and 3 themes crossed the alert threshold.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-950">
              AI Classification Queue
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              LOOP is ready to classify 128 unreviewed items and draft this
              week&apos;s Voice of Customer summary.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
