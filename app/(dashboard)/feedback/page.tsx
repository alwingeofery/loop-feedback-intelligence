import { FormField } from "@/components/forms";
import { UploadCard } from "@/components/upload";
import { Button, Card, CardContent, Input, SectionHeader, Select, Textarea } from "@/components/ui";

export default function FeedbackPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Feedback Operations"
        title="Add and import customer feedback"
        description="Capture single feedback entries, bulk upload CSV files, or simulate incoming channel activity for demos and testing."
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-slate-950">Add Feedback</h2>
            <form className="mt-6 space-y-5">
              <FormField label="Feedback content">
                <Textarea
                  rows={7}
                  placeholder="Paste the customer message, survey response, or support note here."
                />
              </FormField>
              <div className="grid gap-5 md:grid-cols-2">
                <FormField label="Channel">
                  <Select defaultValue="email">
                    <option value="email">Email</option>
                    <option value="chat">Chat</option>
                    <option value="survey">Survey</option>
                    <option value="api">API</option>
                  </Select>
                </FormField>
                <FormField label="Customer label">
                  <Input placeholder="Ava Stone - SMB customer" />
                </FormField>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button type="submit">Submit feedback</Button>
                <Button variant="secondary">Save draft</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <UploadCard />
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Simulated Channel Import
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Generate a sample batch of inbox messages to test classification,
                themes, and dashboard flows without backend wiring.
              </p>
              <Button className="mt-5">Import sample channel data</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
