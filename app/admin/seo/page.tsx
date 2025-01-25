"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function SeoSettings() {
  const [seoSettings, setSeoSettings] = useState({
    siteTitle: "Startup Perks Directory",
    siteDescription: "Discover the best perks and discounts for your startup",
    ogImage: "/og-image.jpg",
    twitterHandle: "@startupperks",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSeoSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the SEO settings to your backend
    console.log("Saving SEO settings:", seoSettings)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">SEO Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="siteTitle">Site Title</Label>
          <Input id="siteTitle" name="siteTitle" value={seoSettings.siteTitle} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="siteDescription">Site Description</Label>
          <Textarea
            id="siteDescription"
            name="siteDescription"
            value={seoSettings.siteDescription}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="ogImage">OG Image URL</Label>
          <Input id="ogImage" name="ogImage" value={seoSettings.ogImage} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="twitterHandle">Twitter Handle</Label>
          <Input id="twitterHandle" name="twitterHandle" value={seoSettings.twitterHandle} onChange={handleChange} />
        </div>
        <Button type="submit">Save SEO Settings</Button>
      </form>
    </div>
  )
}

