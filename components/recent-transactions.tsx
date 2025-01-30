import { ArrowUpRight, ArrowDownRight } from "lucide-react"

const transactions = [
  { id: 1, description: "Product A Sale", amount: 5000, type: "income" },
  { id: 2, description: "Office Supplies", amount: 250, type: "expense" },
  { id: 3, description: "Product B Sale", amount: 3000, type: "income" },
  { id: 4, description: "Marketing Expenses", amount: 1000, type: "expense" },
  { id: 5, description: "Product C Sale", amount: 7500, type: "income" },
]

export function RecentTransactions() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-2">Description</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-t border-gray-700">
                <td className="py-2">{transaction.description}</td>
                <td className="py-2">${transaction.amount.toLocaleString()}</td>
                <td className="py-2">
                  <span
                    className={`flex items-center ${transaction.type === "income" ? "text-green-500" : "text-red-500"}`}
                  >
                    {transaction.type === "income" ? (
                      <ArrowUpRight size={16} className="mr-1" />
                    ) : (
                      <ArrowDownRight size={16} className="mr-1" />
                    )}
                    {transaction.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

