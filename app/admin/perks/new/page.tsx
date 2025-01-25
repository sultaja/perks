"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function NewPerkPage() {
  const router = useRouter()
  const [perk, setPerk] = useState({
    title: "",
    category: "",
    description: "",
    logo: "",
    value: "",
    details: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPerk((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically create the new perk in your backend
    console.log("Creating new perk:", perk)
    router.push("/admin/perks")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Perk</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" value={perk.title} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input id="category" name="category" value={perk.category} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" value={perk.description} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="logo">Logo URL</Label>
          <Input id="logo" name="logo" value={perk.logo} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="value">Value</Label>
          <Input id="value" name="value" value={perk.value} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="details">Details</Label>
          <Textarea id="details" name="details" value={perk.details} onChange={handleChange} />
        </div>
        <Button type="submit">Create Perk</Button>
      </form>
    </div>
  )
}

