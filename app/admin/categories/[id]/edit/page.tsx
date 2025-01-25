"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// This would typically come from an API call
const fetchCategory = async (id: string) => {
  // Simulating API call
  return {
    id,
    name: "Cloud Services",
    slug: "cloud-services",
    description: "Discover cloud services perks for your startup",
  }
}

export default function EditCategoryPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [category, setCategory] = useState({
    name: "",
    slug: "",
    description: "",
  })

  useEffect(() => {
    fetchCategory(params.id).then(setCategory)
  }, [params.id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCategory((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically update the category in your backend
    console.log("Updating category:", category)
    router.push("/admin/categories")
  }

  const handleDelete = async () => {
    // Here you would typically delete the category in your backend
    console.log("Deleting category:", params.id)
    router.push("/admin/categories")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Category</h1>
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
        <div className="flex justify-between">
          <Button type="submit">Update Category</Button>
          <Button type="button" variant="destructive" onClick={handleDelete}>
            Delete Category
          </Button>
        </div>
      </form>
    </div>
  )
}

