import { FileUpload } from "@/components/file-upload"
import { FileList } from "@/components/file-list"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">File Upload</h1>
      <FileUpload />
      <FileList />
    </div>
  )
}

