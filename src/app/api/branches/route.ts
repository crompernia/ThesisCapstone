import { getBranches } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const branches = await getBranches();
    return NextResponse.json(branches);
  } catch (error) {
    console.error("Error fetching branches:", error);
    return NextResponse.json(
      { error: "Failed to fetch branches" },
      { status: 500 }
    );
  }
}