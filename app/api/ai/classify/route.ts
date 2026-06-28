import { NextResponse } from "next/server";

// Claude AI classification endpoint placeholder.
export async function POST() {
  return NextResponse.json({
    label: "unclassified",
    confidence: 0,
    themes: []
  });
}

