import { notFound } from "next/navigation"
import { PerkGrid } from "@/components/perk-grid"

// This would typically come from a database
const categories = [
  { slug: "cloud-services", name: "Cloud Services", description: "Discover cloud services perks for your startup" },
  { slug: "marketing-tools", name: "Marketing Tools", description: "Explore marketing tool discounts for startups" },
  // Add more categories as needed
]

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug)
  if (!category) return {}

  return {
    title: `${category.name} - Startup Perks Directory`,
    description: category.description,
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug)

  if (!category) {
    notFound()
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>
      <PerkGrid category={category.slug} />
    </div>
  )
}

