import { getDepartmentsForBranch } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const branchName = searchParams.get("branch");

    if (!branchName) {
      return NextResponse.json(
        { error: "Branch name is required" },
        { status: 400 }
      );
    }

    const departments = await getDepartmentsForBranch(branchName);
    return NextResponse.json(departments);
  } catch (error) {
    console.error("Error fetching departments:", error);
    return NextResponse.json(
      { error: "Failed to fetch departments" },
      { status: 500 }
    );
  }
}