import { getCurrentUserId } from "@/lib/auth";
import { getAttendanceData } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userId = await getCurrentUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { summary, records } = await getAttendanceData(userId);
    return NextResponse.json({ summary, records });
  } catch (error) {
    console.error("Error fetching HR attendance:", error);
    return NextResponse.json(
      { error: "Failed to fetch attendance data" },
      { status: 500 }
    );
  }
}