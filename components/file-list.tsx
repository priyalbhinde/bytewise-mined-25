"use client"

import { useState } from "react"
import { File, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type UploadedFile = {
  id: string
  name: string
  size: number
  uploadDate: Date
}

export function FileList() {
  const [files, setFiles] = useState<UploadedFile[]>([
    { id: "1", name: "Q1_Financial_Report.pdf", size: 1024 * 1024 * 2.5, uploadDate: new Date() },
    { id: "2", name: "Annual_Budget.xlsx", size: 1024 * 512, uploadDate: new Date() },
  ])

  const deleteFile = (id: string) => {
    setFiles(files.filter((file) => file.id !== id))
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Uploaded Files</h2>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">File Name</th>
              <th className="px-4 py-2 text-left">Size</th>
              <th className="px-4 py-2 text-left">Upload Date</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id} className="border-t border-gray-700">
                <td className="px-4 py-2 flex items-center space-x-2">
                  <File className="text-blue-500" size={20} />
                  <span>{file.name}</span>
                </td>
                <td className="px-4 py-2">{(file.size / 1024 / 1024).toFixed(2)} MB</td>
                <td className="px-4 py-2">{file.uploadDate.toLocaleDateString()}</td>
                <td className="px-4 py-2">
                  <Button variant="ghost" size="sm" onClick={() => deleteFile(file.id)}>
                    <Trash2 size={16} className="text-red-500" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

