import Link from "next/link"
import { Upload, BarChart2, Settings } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-4">
      <nav className="space-y-4">
        <Link href="/" className="flex items-center space-x-2 text-white hover:text-gray-300">
          <Upload size={20} />
          <span>File Upload</span>
        </Link>
        <Link href="/dashboard" className="flex items-center space-x-2 text-white hover:text-gray-300">
          <BarChart2 size={20} />
          <span>Dashboard</span>
        </Link>
        <Link href="/settings" className="flex items-center space-x-2 text-white hover:text-gray-300">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  )
}

