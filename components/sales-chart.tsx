"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { product: "Product A", sales: 400000 },
  { product: "Product B", sales: 300000 },
  { product: "Product C", sales: 500000 },
  { product: "Product D", sales: 200000 },
]

export function SalesChart() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Sales by Product</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="product" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip contentStyle={{ backgroundColor: "#1F2937", border: "none" }} itemStyle={{ color: "#E5E7EB" }} />
          <Bar dataKey="sales" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

