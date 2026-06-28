import { NextResponse } from "next/server";

// Workspace settings and tenant metadata endpoint placeholder.
export async function GET() {
  return NextResponse.json({
    id: "workspace-demo",
    name: "Demo Workspace"
  });
}

export async function PATCH() {
  return NextResponse.json({ message: "Workspace update placeholder." });
}

