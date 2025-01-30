"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, File } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FileUpload() {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const processFiles = () => {
    // TODO: Implement file processing logic
    console.log("Processing files:", files)
  }

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive ? "border-blue-500 bg-blue-50 bg-opacity-10" : "border-gray-600"
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2">Drag & drop files here, or click to select files</p>
        <p className="text-sm text-gray-500">Supported formats: PDF, Excel, CSV</p>
      </div>
      {files.length > 0 && (
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <File className="text-blue-500" />
            <span>{files.length} file(s) selected</span>
          </div>
          <Button onClick={processFiles}>Process Files</Button>
        </div>
      )}
    </div>
  )
}

