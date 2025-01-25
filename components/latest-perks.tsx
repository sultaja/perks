import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const latestPerks = [
  {
    title: "MongoDB Atlas",
    category: "Database",
    description: "$5,000 in credits for startups",
    logo: "/placeholder.svg?height=40&width=40",
    value: "$5,000",
  },
  {
    title: "Notion Team Plan",
    category: "Productivity",
    description: "Free Team plan for 1 year",
    logo: "/placeholder.svg?height=40&width=40",
    value: "1 Year Free",
  },
  {
    title: "Figma for Startups",
    category: "Design",
    description: "50% off Figma Professional for 1 year",
    logo: "/placeholder.svg?height=40&width=40",
    value: "50% Off",
  },
]

export function LatestPerks() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Latest Perks</h2>
          <Button variant="outline">Explore Categories</Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {latestPerks.map((perk) => (
            <Card key={perk.title} className="relative">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img src={perk.logo || "/placeholder.svg"} alt="" className="w-10 h-10 rounded-lg" />
                  <div>
                    <CardTitle className="text-lg">{perk.title}</CardTitle>
                    <Badge variant="secondary">{perk.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{perk.description}</p>
                <Badge variant="default" className="absolute top-4 right-4">
                  {perk.value}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

