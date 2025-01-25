import { CategoryGrid } from "@/components/category-grid"

export const metadata = {
  title: "Categories - Startup Perks Directory",
  description: "Browse all categories of startup perks and discounts",
}

export default function CategoriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Browse Categories</h1>
      <CategoryGrid />
    </div>
  )
}

