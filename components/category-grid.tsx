import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Cloud Services", count: 47, icon: "☁️" },
  { name: "Marketing Tools", count: 24, icon: "📈" },
  { name: "Development", count: 19, icon: "💻" },
  { name: "Design Tools", count: 15, icon: "🎨" },
  { name: "Productivity", count: 31, icon: "⏱️" },
  { name: "Finance", count: 12, icon: "💰" },
  { name: "HR & Recruiting", count: 8, icon: "👥" },
  { name: "Legal", count: 6, icon: "⚖️" },
]

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Button
          key={category.name}
          variant="outline"
          asChild
          className="h-auto py-4 flex flex-col items-center justify-center text-center"
        >
          <Link href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
            <span className="text-3xl mb-2">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
            <span className="text-sm text-gray-500 mt-1">{category.count} perks</span>
          </Link>
        </Button>
      ))}
    </div>
  )
}

