export const landingFeatures = [
  {
    title: "Feedback Ingestion",
    description:
      "Collect customer feedback from CSV uploads, inbox channels, and future integrations in one workspace."
  },
  {
    title: "AI Classification",
    description:
      "Label sentiment, surface themes, and organize feedback with Claude-assisted intelligence."
  },
  {
    title: "Ask LOOP",
    description:
      "Ask natural language questions and get evidence-backed answers from customer conversations."
  },
  {
    title: "Reports",
    description:
      "Generate Voice of Customer summaries with themes, quotes, trends, and recommended next steps."
  }
] as const;

export const dashboardStats = [
  { label: "Total Feedback", value: "2,418", delta: "+12% vs last month", tone: "blue" },
  { label: "Negative Feedback", value: "312", delta: "-8% this week", tone: "rose" },
  { label: "New This Week", value: "184", delta: "41 imported today", tone: "indigo" },
  { label: "Active Themes", value: "26", delta: "5 trending upward", tone: "green" }
] as const;

export const feedbackVolumeData = [
  { name: "Mon", value: 48 },
  { name: "Tue", value: 64 },
  { name: "Wed", value: 58 },
  { name: "Thu", value: 82 },
  { name: "Fri", value: 71 },
  { name: "Sat", value: 36 },
  { name: "Sun", value: 29 }
] as const;

export const sentimentData = [
  { name: "Positive", value: 54, color: "#2563eb" },
  { name: "Neutral", value: 28, color: "#818cf8" },
  { name: "Negative", value: 18, color: "#f43f5e" }
] as const;

export const topThemesData = [
  { name: "Support speed", count: 116 },
  { name: "Onboarding friction", count: 92 },
  { name: "Billing clarity", count: 81 },
  { name: "Feature requests", count: 65 },
  { name: "Dashboard UX", count: 52 }
] as const;

export const inboxRows = [
  {
    customer: "Ava Stone",
    channel: "Email",
    theme: "Onboarding friction",
    sentiment: "Negative",
    status: "NEW",
    excerpt: "The setup flow asked for too many steps before I could import feedback."
  },
  {
    customer: "Leo Reed",
    channel: "Chat",
    theme: "Support speed",
    sentiment: "Positive",
    status: "REVIEWED",
    excerpt: "Support solved the issue quickly and shared the right article."
  },
  {
    customer: "Mia Patel",
    channel: "Survey",
    theme: "Reports",
    sentiment: "Neutral",
    status: "ACTIONED",
    excerpt: "Weekly VOC summaries would be more useful with automated email delivery."
  },
  {
    customer: "Noah Kim",
    channel: "App Store",
    theme: "Billing clarity",
    sentiment: "Negative",
    status: "NEW",
    excerpt: "Pricing for team seats was confusing during upgrade."
  }
] as const;

export const themeCards = [
  { name: "Support speed", count: 116, sentiment: "82% positive" },
  { name: "Onboarding friction", count: 92, sentiment: "61% negative" },
  { name: "Billing clarity", count: 81, sentiment: "43% negative" },
  { name: "Feature requests", count: 65, sentiment: "Mostly neutral" }
] as const;

export const trendCards = [
  { label: "Fastest growing theme", value: "Onboarding friction", detail: "+24% week over week" },
  { label: "Largest spike", value: "Billing clarity", detail: "Spike detected on Thursday" },
  { label: "Positive momentum", value: "Support speed", detail: "+11 sentiment points" }
] as const;

export const themeGrowth = [
  { name: "Onboarding friction", growth: "+24%", spike: true },
  { name: "Billing clarity", growth: "+18%", spike: true },
  { name: "Reports", growth: "+10%", spike: false },
  { name: "Ask LOOP quality", growth: "+7%", spike: false }
] as const;

export const askLoopExamples = [
  "What are the biggest drivers of negative feedback this week?",
  "Which themes are improving after the onboarding redesign?",
  "Summarize customer sentiment around billing clarity."
] as const;

export const askLoopSources = [
  {
    customer: "Ava Stone",
    quote: "The setup flow asked for too many steps before I could import feedback."
  },
  {
    customer: "Noah Kim",
    quote: "Pricing for team seats was confusing during upgrade."
  },
  {
    customer: "Leo Reed",
    quote: "Support solved the issue quickly and shared the right article."
  }
] as const;

export const reportCards = [
  {
    title: "Weekly Voice of Customer",
    date: "Jun 24, 2026",
    status: "Ready",
    summary: "Support sentiment improved while onboarding friction continues to rise."
  },
  {
    title: "June Executive Summary",
    date: "Jun 20, 2026",
    status: "Draft",
    summary: "Billing clarity and dashboard UX themes need operational follow-up."
  }
] as const;

export const members = [
  { name: "Ariana Rao", email: "ariana@northstarlabs.ai", role: "ADMIN" },
  { name: "Daniel Wu", email: "daniel@northstarlabs.ai", role: "ANALYST" },
  { name: "Jamie Flores", email: "jamie@northstarlabs.ai", role: "VIEWER" }
] as const;

