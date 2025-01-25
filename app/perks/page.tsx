import { PerkGrid } from "@/components/perk-grid"

export const metadata = {
  title: "All Perks - Startup Perks Directory",
  description: "Explore all available perks and discounts for startups",
}

export default function PerksPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">All Perks</h1>
      <PerkGrid />
    </div>
  )
}

