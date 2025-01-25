import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export const metadata = {
  title: "Manage Blog Posts - Admin Dashboard",
}

const blogPosts = [
  { id: 1, title: "Top Startup Perks and Credits in 2024", date: "January 15, 2024" },
  { id: 2, title: "How to Maximize Your Startup Benefits", date: "January 10, 2024" },
  { id: 3, title: "Essential Tools Every Startup Needs", date: "January 5, 2024" },
]

export default function ManageBlogPosts() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Blog Posts</h1>
        <Button asChild>
          <Link href="/admin/blog/new">Add New Post</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.date}</TableCell>
              <TableCell>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/admin/blog/${post.id}/edit`}>Edit</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

