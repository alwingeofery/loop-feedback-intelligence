import { NextResponse } from "next/server";

// Report listing and creation endpoint placeholder.
export async function GET() {
  return NextResponse.json({ items: [] });
}

export async function POST() {
  return NextResponse.json({ message: "Report creation placeholder." }, { status: 201 });
}

