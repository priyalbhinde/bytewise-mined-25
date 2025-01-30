import { FinancialMetrics } from "@/components/financial-metrics"
import { RevenueChart } from "@/components/revenue-chart"
import { SalesChart } from "@/components/sales-chart"
import { RevenueDistribution } from "@/components/revenue-distribution"
import { RevenueMap } from "@/components/revenue-map"
import { RecentTransactions } from "@/components/recent-transactions"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Financial Dashboard</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Download Report
        </Button>
      </div>
      <FinancialMetrics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RevenueChart />
        <SalesChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RevenueDistribution />
        <RevenueMap />
      </div>
      <RecentTransactions />
    </div>
  )
}

