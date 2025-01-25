"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// This would typically come from an API call
const fetchBlogPost = async (id: string) => {
  // Simulating API call
  return {
    id,
    title: "Top Startup Perks and Credits in 2024",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-01-15",
    readTime: "5 min read",
  }
}

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [post, setPost] = useState({
    title: "",
    content: "",
    image: "",
    date: "",
    readTime: "",
  })

  useEffect(() => {
    fetchBlogPost(params.id).then(setPost)
  }, [params.id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPost((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically update the blog post in your backend
    console.log("Updating blog post:", post)
    router.push("/admin/blog")
  }

  const handleDelete = async () => {
    // Here you would typically delete the blog post in your backend
    console.log("Deleting blog post:", params.id)
    router.push("/admin/blog")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" value={post.title} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea id="content" name="content" value={post.content} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input id="image" name="image" value={post.image} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="date" type="date" value={post.date} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="readTime">Read Time</Label>
          <Input id="readTime" name="readTime" value={post.readTime} onChange={handleChange} />
        </div>
        <div className="flex justify-between">
          <Button type="submit">Update Blog Post</Button>
          <Button type="button" variant="destructive" onClick={handleDelete}>
            Delete Blog Post
          </Button>
        </div>
      </form>
    </div>
  )
}

