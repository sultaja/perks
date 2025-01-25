"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { updatePerk, deletePerk, getPerk } from "@/app/actions/perks"

export default function EditPerkPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [perk, setPerk] = useState({
    title: "",
    description: "",
    logo: "",
    value: "",
    details: "",
    howToRedeem: "",
    categoryId: 0,
    offers: [{ title: "", description: "", promoCode: "", value: "" }],
    steps: [{ orderNum: 1, title: "", description: "", image: "" }],
    faq: [{ question: "", answer: "" }],
  })

  useEffect(() => {
    const fetchPerk = async () => {
      const result = await getPerk(params.id)
      if (result.success) {
        setPerk(result.data)
      }
    }
    fetchPerk()
  }, [params.id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPerk((prev) => ({ ...prev, [name]: value }))
  }

  const handleOfferChange = (index: number, field: string, value: string) => {
    setPerk((prev) => ({
      ...prev,
      offers: prev.offers.map((offer, i) => (i === index ? { ...offer, [field]: value } : offer)),
    }))
  }

  const handleStepChange = (index: number, field: string, value: string) => {
    setPerk((prev) => ({
      ...prev,
      steps: prev.steps.map((step, i) => (i === index ? { ...step, [field]: value } : step)),
    }))
  }

  const handleFaqChange = (index: number, field: string, value: string) => {
    setPerk((prev) => ({
      ...prev,
      faq: prev.faq.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await updatePerk(Number(params.id), perk)
    if (result.success) {
      router.push("/admin/perks")
    }
  }

  const handleDelete = async () => {
    const result = await deletePerk(Number(params.id))
    if (result.success) {
      router.push("/admin/perks")
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Perk</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Basic Information</h2>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" value={perk.title} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" value={perk.description} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="logo">Logo URL</Label>
            <Input id="logo" name="logo" value={perk.logo} onChange={handleChange} />
          </div>
        </div>

        {/* Offers */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Offers</h2>
          {perk.offers.map((offer, index) => (
            <div key={index} className="space-y-2 p-4 border rounded-lg">
              <div>
                <Label>Offer Title</Label>
                <Input value={offer.title} onChange={(e) => handleOfferChange(index, "title", e.target.value)} />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  value={offer.description}
                  onChange={(e) => handleOfferChange(index, "description", e.target.value)}
                />
              </div>
              <div>
                <Label>Promo Code</Label>
                <Input
                  value={offer.promoCode}
                  onChange={(e) => handleOfferChange(index, "promoCode", e.target.value)}
                />
              </div>
              <div>
                <Label>Value</Label>
                <Input value={offer.value} onChange={(e) => handleOfferChange(index, "value", e.target.value)} />
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              setPerk((prev) => ({
                ...prev,
                offers: [...prev.offers, { title: "", description: "", promoCode: "", value: "" }],
              }))
            }
          >
            Add Offer
          </Button>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Steps</h2>
          {perk.steps.map((step, index) => (
            <div key={index} className="space-y-2 p-4 border rounded-lg">
              <div>
                <Label>Step Title</Label>
                <Input value={step.title} onChange={(e) => handleStepChange(index, "title", e.target.value)} />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  value={step.description}
                  onChange={(e) => handleStepChange(index, "description", e.target.value)}
                />
              </div>
              <div>
                <Label>Image URL</Label>
                <Input value={step.image} onChange={(e) => handleStepChange(index, "image", e.target.value)} />
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              setPerk((prev) => ({
                ...prev,
                steps: [...prev.steps, { orderNum: prev.steps.length + 1, title: "", description: "", image: "" }],
              }))
            }
          >
            Add Step
          </Button>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">FAQ</h2>
          {perk.faq.map((item, index) => (
            <div key={index} className="space-y-2 p-4 border rounded-lg">
              <div>
                <Label>Question</Label>
                <Input value={item.question} onChange={(e) => handleFaqChange(index, "question", e.target.value)} />
              </div>
              <div>
                <Label>Answer</Label>
                <Textarea value={item.answer} onChange={(e) => handleFaqChange(index, "answer", e.target.value)} />
              </div>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              setPerk((prev) => ({
                ...prev,
                faq: [...prev.faq, { question: "", answer: "" }],
              }))
            }
          >
            Add FAQ
          </Button>
        </div>

        <div className="flex justify-between">
          <Button type="submit">Update Perk</Button>
          <Button type="button" variant="destructive" onClick={handleDelete}>
            Delete Perk
          </Button>
        </div>
      </form>
    </div>
  )
}

