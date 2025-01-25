import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Cloud Services",
    count: 47,
    icon: "☁️",
  },
  {
    name: "Marketing Tools",
    count: 24,
    icon: "📈",
  },
  {
    name: "Development",
    count: 19,
    icon: "💻",
  },
  {
    name: "Design Tools",
    count: 15,
    icon: "🎨",
  },
]

export function PopularCategories() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Button key={category.name} variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <span className="text-2xl">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
              <span className="text-sm text-gray-500">{category.count} perks</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

