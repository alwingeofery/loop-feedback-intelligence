import { DataTable } from "@/components/tables";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Input,
  SectionHeader,
  Select
} from "@/components/ui";
import { inboxRows } from "@/lib/mock-data";

const statusVariant = {
  NEW: "blue",
  REVIEWED: "amber",
  ACTIONED: "green"
} as const;

export default function InboxPage() {
  const rows = inboxRows.map((row) => [
    <div key={`${row.customer}-customer`}>
      <p className="font-medium text-slate-900">{row.customer}</p>
      <p className="mt-1 text-xs text-slate-500">{row.excerpt}</p>
    </div>,
    row.channel,
    row.theme,
    row.sentiment,
    <Badge
      key={`${row.customer}-status`}
      variant={statusVariant[row.status]}
      className="w-fit"
    >
      {row.status}
    </Badge>
  ]);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Feedback Inbox"
        title="Review incoming customer feedback"
        description="Search, filter, and triage raw customer feedback before turning it into themes, reports, and action items."
      />

      <Card>
        <CardContent className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-5">
          <Input placeholder="Search customer, quote, or keyword" className="xl:col-span-2" />
          <Select defaultValue="all">
            <option value="all">All channels</option>
            <option>Email</option>
            <option>Chat</option>
            <option>Survey</option>
            <option>App Store</option>
          </Select>
          <Select defaultValue="all">
            <option value="all">All sentiment</option>
            <option>Positive</option>
            <option>Neutral</option>
            <option>Negative</option>
          </Select>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            <Select defaultValue="all">
              <option value="all">All status</option>
              <option>NEW</option>
              <option>REVIEWED</option>
              <option>ACTIONED</option>
            </Select>
            <Select defaultValue="all">
              <option value="all">All themes</option>
              <option>Support speed</option>
              <option>Onboarding friction</option>
              <option>Billing clarity</option>
            </Select>
          </div>
        </CardContent>
      </Card>

      <DataTable
        columns={[
          { key: "customer", label: "Customer Feedback" },
          { key: "channel", label: "Channel" },
          { key: "theme", label: "Theme" },
          { key: "sentiment", label: "Sentiment" },
          { key: "status", label: "Status" }
        ]}
        rows={rows}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">Showing 1-4 of 42 feedback records</p>
        <div className="flex gap-3">
          <Button variant="secondary">Previous</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
}
