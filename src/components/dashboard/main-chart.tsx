"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 4000, users: 2400 },
  { name: "Feb", revenue: 3000, users: 1398 },
  { name: "Mar", revenue: 2000, users: 9800 },
  { name: "Apr", revenue: 2780, users: 3908 },
  { name: "May", revenue: 1890, users: 4800 },
  { name: "Jun", revenue: 2390, users: 3800 },
  { name: "Jul", revenue: 3490, users: 4300 },
  { name: "Aug", revenue: 4490, users: 5300 },
  { name: "Sep", revenue: 5490, users: 6300 },
  { name: "Oct", revenue: 6490, users: 7300 },
  { name: "Nov", revenue: 7490, users: 8300 },
  { name: "Dec", revenue: 8490, users: 9300 },
];

export function MainChart() {
  return (
    <div className="lg:col-span-2 p-6 rounded-xl bg-card border border-border shadow-sm flex flex-col h-[400px]">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Revenue Overview</h3>
        <p className="text-sm text-sidebar-foreground">Monthly revenue breakdown for the current year</p>
      </div>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: "var(--color-sidebar-foreground)" }} 
              dy={10} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: "var(--color-sidebar-foreground)" }} 
              tickFormatter={(value) => `$${value}`} 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", borderRadius: "8px", color: "var(--color-foreground)" }}
              itemStyle={{ color: "var(--color-primary)" }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
