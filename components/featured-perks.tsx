import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredPerks = [
  {
    title: "AWS Startup Credits",
    category: "Cloud Services",
    description: "$100,000 in AWS credits for eligible startups",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "Stripe Atlas",
    category: "Legal",
    description: "Quick and easy business incorporation and banking setup",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "HubSpot for Startups",
    category: "Marketing",
    description: "90% off HubSpot software in your first year",
    logo: "/placeholder.svg?height=40&width=40",
  },
]

export function FeaturedPerks() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Featured Perks</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredPerks.map((perk) => (
            <Card key={perk.title}>
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
                <p className="text-gray-600">{perk.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

