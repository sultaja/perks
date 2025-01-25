import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const perks = [
  {
    id: 1,
    title: "AWS Startup Credits",
    category: "Cloud Services",
    description: "$100,000 in AWS credits for eligible startups",
    logo: "/placeholder.svg?height=40&width=40",
    value: "$100,000",
  },
  {
    id: 2,
    title: "Stripe Atlas",
    category: "Legal",
    description: "Quick and easy business incorporation and banking setup",
    logo: "/placeholder.svg?height=40&width=40",
    value: "Free incorporation",
  },
  {
    id: 3,
    title: "HubSpot for Startups",
    category: "Marketing",
    description: "90% off HubSpot software in your first year",
    logo: "/placeholder.svg?height=40&width=40",
    value: "90% off",
  },
  // Add more perks here
]

export function PerkGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {perks.map((perk) => (
        <Card key={perk.id} className="relative">
          <Link href={`/perks/${perk.id}`}>
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
          </Link>
        </Card>
      ))}
    </div>
  )
}

