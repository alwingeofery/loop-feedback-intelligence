import { Button, Card, CardContent, SectionHeader } from "@/components/ui";
import { themeCards } from "@/lib/mock-data";

export default function ThemesPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Theme Intelligence"
        title="Track what customers keep talking about"
        description="Theme cards help teams understand frequency, sentiment, and the feedback clusters that need product or support action."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {themeCards.map((theme) => (
          <Card key={theme.name}>
            <CardContent className="p-6">
              <p className="text-sm font-medium text-blue-600">{theme.count} mentions</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950">
                {theme.name}
              </h2>
              <p className="mt-3 text-sm text-slate-600">{theme.sentiment}</p>
              <Button variant="secondary" className="mt-6 w-full">
                View feedback
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
