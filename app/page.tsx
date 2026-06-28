import Link from "next/link";
import { ArrowRight, BrainCircuit, ChartColumnBig, FileText, Inbox } from "lucide-react";
import { Badge, Card, CardContent, buttonStyles } from "@/components/ui";
import { landingFeatures } from "@/lib/mock-data";

const featureIcons = [Inbox, BrainCircuit, ChartColumnBig, FileText];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.2),_transparent_30%),linear-gradient(to_bottom,_#f8fbff,_#eef4ff)]">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex flex-col gap-4 rounded-[30px] border border-slate-200/80 bg-white/80 px-6 py-4 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-semibold text-white">
              L
            </div>
            <div>
              <p className="font-semibold text-slate-950">LOOP</p>
              <p className="text-sm text-slate-500">
                AI Customer Feedback Intelligence Platform
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className={buttonStyles({ variant: "secondary" })}
            >
              Get Started
            </Link>
            <Link href="/dashboard" className={buttonStyles({})}>
              View Dashboard
            </Link>
          </div>
        </header>

        <section className="grid gap-8 px-1 py-16 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
          <div>
            <Badge variant="blue">Built for multi-tenant insight teams</Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              LOOP
            </h1>
            <p className="mt-4 text-2xl font-medium text-slate-700">
              AI Customer Feedback Intelligence Platform
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
              Bring customer feedback into one place, classify it with AI,
              detect trends across workspaces, ask natural language questions,
              and publish Voice of Customer reports your team can act on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/signup" className={buttonStyles({ className: "gap-2" })}>
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dashboard"
                className={buttonStyles({ variant: "secondary" })}
              >
                View Dashboard
              </Link>
            </div>
          </div>

          <Card className="overflow-hidden border-slate-200/90 bg-slate-950">
            <CardContent className="p-0">
              <div className="border-b border-white/10 px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                  LOOP Workspace
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Northstar Labs
                </h2>
              </div>
              <div className="grid gap-4 p-6">
                {[
                  ["2,418", "Feedback records"],
                  ["26", "Active themes"],
                  ["54%", "Positive sentiment"],
                  ["3", "Pending VOC reports"]
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <span className="text-3xl font-semibold text-white">{value}</span>
                    <span className="text-sm text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="pb-12">
          <div className="mb-8">
            <Badge variant="indigo">Platform capabilities</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              From raw feedback to confident product decisions
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {landingFeatures.map((feature, index) => {
              const Icon = featureIcons[index];

              return (
                <Card key={feature.title} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
