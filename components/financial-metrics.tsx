import { ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react"

const metrics = [
  { name: "Revenue", value: "$1,234,567", change: 8.2, positive: true },
  { name: "Operating Profit", value: "$345,678", change: 5.1, positive: true },
  { name: "Net Profit", value: "$234,567", change: -2.3, positive: false },
]

export function FinancialMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric) => (
        <div key={metric.name} className="bg-gray-800 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{metric.name}</h3>
            <DollarSign className="text-green-500" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">{metric.value}</p>
          <div className={`flex items-center mt-2 ${metric.positive ? "text-green-500" : "text-red-500"}`}>
            {metric.positive ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
            <span className="ml-1">{Math.abs(metric.change)}%</span>
          </div>
        </div>
      ))}
    </div>
  )
}

