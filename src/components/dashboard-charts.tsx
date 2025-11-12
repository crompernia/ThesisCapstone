/**
 * @fileoverview Dashboard chart components for employee statistics
 */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";

interface AttendanceStats {
  daysAttended: number;
  totalDaysAttended: number;
  lates: number;
  absences: number;
  totalHours: number;
  totalWorkingDays: number;
}

interface DashboardChartsProps {
  attendance: AttendanceStats;
  leaveBalance: number;
  overtimeHours: number;
}

const COLORS = {
  present: "#22c55e",
  late: "#f59e0b",
  absent: "#ef4444",
  leave: "#3b82f6",
  overtime: "#8b5cf6",
};

const chartConfig = {
  present: {
    label: "Present",
    color: COLORS.present,
  },
  late: {
    label: "Late",
    color: COLORS.late,
  },
  absent: {
    label: "Absent",
    color: COLORS.absent,
  },
  leave: {
    label: "Leave Balance",
    color: COLORS.leave,
  },
  overtime: {
    label: "Overtime Hours",
    color: COLORS.overtime,
  },
};

export function AttendanceChart({ attendance }: { attendance: AttendanceStats }) {
  const data = [
    {
      name: "Present",
      value: attendance.daysAttended,
      fill: COLORS.present,
    },
    {
      name: "Late",
      value: attendance.lates > 0 ? 1 : 0, // Show as count of late days, not minutes
      fill: COLORS.late,
    },
    {
      name: "Absent",
      value: attendance.absences,
      fill: COLORS.absent,
    },
  ].filter(item => item.value > 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px]">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
        <div className="grid grid-cols-3 gap-4 mt-4 text-center">
          <div>
            <p className="text-2xl font-bold text-green-600">{attendance.daysAttended}</p>
            <p className="text-sm text-muted-foreground">Present</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-600">{attendance.lates}</p>
            <p className="text-sm text-muted-foreground">Late (min)</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">{attendance.absences}</p>
            <p className="text-sm text-muted-foreground">Absent</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function LeaveAndOvertimeChart({ leaveBalance, overtimeHours }: { leaveBalance: number; overtimeHours: number }) {
  const data = [
    {
      name: "Leave Balance",
      value: leaveBalance,
      fill: COLORS.leave,
    },
    {
      name: "Overtime Hours",
      value: overtimeHours,
      fill: COLORS.overtime,
    },
  ];

  // Calculate max value for proper Y-axis scaling
  const maxValue = Math.max(leaveBalance, overtimeHours, 10); // Minimum 10 for better visualization

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave & Overtime</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px]">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              domain={[0, maxValue]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
            <ChartTooltip content={<ChartTooltipContent />} />
          </BarChart>
        </ChartContainer>
        <div className="grid grid-cols-2 gap-4 mt-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600">{leaveBalance}</p>
            <p className="text-sm text-muted-foreground">Leave Days</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">{overtimeHours}</p>
            <p className="text-sm text-muted-foreground">Overtime Hours</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardCharts({ attendance, leaveBalance, overtimeHours }: DashboardChartsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <AttendanceChart attendance={attendance} />
      <LeaveAndOvertimeChart leaveBalance={leaveBalance} overtimeHours={overtimeHours} />
    </div>
  );
}