import { NextResponse } from "next/server";

// Ask LOOP AI endpoint placeholder for retrieval-based Q&A.
export async function POST() {
  return NextResponse.json({
    answer: "Ask LOOP AI is not implemented yet.",
    citations: []
  });
}

