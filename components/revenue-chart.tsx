"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { quarter: "Q1", revenue: 1000000 },
  { quarter: "Q2", revenue: 1200000 },
  { quarter: "Q3", revenue: 1100000 },
  { quarter: "Q4", revenue: 1300000 },
]

export function RevenueChart() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Revenue Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="quarter" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip contentStyle={{ backgroundColor: "#1F2937", border: "none" }} itemStyle={{ color: "#E5E7EB" }} />
          <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

