"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function NewCategoryPage() {
  const router = useRouter()
  const [category, setCategory] = useState({
    name: "",
    slug: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCategory((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically create the new category in your backend
    console.log("Creating new category:", category)
    router.push("/admin/categories")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Category</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={category.name} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input id="slug" name="slug" value={category.slug} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" value={category.description} onChange={handleChange} />
        </div>
        <Button type="submit">Create Category</Button>
      </form>
    </div>
  )
}

