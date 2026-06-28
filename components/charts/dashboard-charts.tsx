"use client";

import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Card, CardContent } from "@/components/ui";

interface VolumeDatum {
  name: string;
  value: number;
}

interface SentimentDatum {
  name: string;
  value: number;
  color: string;
}

interface ThemeDatum {
  name: string;
  count: number;
}

interface DashboardChartsProps {
  volumeData: VolumeDatum[];
  sentimentData: SentimentDatum[];
  themeData: ThemeDatum[];
}

export function DashboardCharts({
  volumeData,
  sentimentData,
  themeData
}: DashboardChartsProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      <Card className="xl:col-span-2">
        <CardContent className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-950">
              Feedback Volume
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Weekly volume across feedback channels.
            </p>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeData}>
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-950">
              Sentiment Breakdown
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Positive, neutral, and negative distribution.
            </p>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentData}
                  dataKey="value"
                  innerRadius={58}
                  outerRadius={88}
                  paddingAngle={4}
                >
                  {sentimentData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid gap-2">
            {sentimentData.map((entry) => (
              <div key={entry.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-slate-600">{entry.name}</span>
                </div>
                <span className="font-medium text-slate-900">{entry.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="xl:col-span-3">
        <CardContent className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-950">Top Themes</h3>
            <p className="mt-1 text-sm text-slate-500">
              Most frequent themes detected in the current workspace.
            </p>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={themeData} margin={{ left: 24 }}>
                <XAxis type="number" stroke="#64748b" fontSize={12} />
                <YAxis
                  type="category"
                  dataKey="name"
                  stroke="#64748b"
                  fontSize={12}
                  width={140}
                />
                <Tooltip />
                <Bar dataKey="count" fill="#4f46e5" radius={[0, 10, 10, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

