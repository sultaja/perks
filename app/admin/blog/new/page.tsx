"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function NewBlogPostPage() {
  const router = useRouter()
  const [post, setPost] = useState({
    title: "",
    content: "",
    image: "",
    date: "",
    readTime: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPost((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically create the new blog post in your backend
    console.log("Creating new blog post:", post)
    router.push("/admin/blog")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Blog Post</h1>
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
        <Button type="submit">Create Blog Post</Button>
      </form>
    </div>
  )
}

