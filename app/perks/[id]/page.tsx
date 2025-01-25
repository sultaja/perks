import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database
const perks = [
  {
    id: "1",
    title: "AWS Startup Credits",
    category: "Cloud Services",
    description: "$100,000 in AWS credits for eligible startups",
    logo: "/placeholder.svg?height=40&width=40",
    value: "$100,000",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
  },
  // Add more perks as needed
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const perk = perks.find((p) => p.id === params.id)
  if (!perk) return {}

  return {
    title: `${perk.title} - Startup Perks Directory`,
    description: perk.description,
  }
}

export default function PerkPage({ params }: { params: { id: string } }) {
  const perk = perks.find((p) => p.id === params.id)

  if (!perk) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <img src={perk.logo || "/placeholder.svg"} alt="" className="w-16 h-16 rounded-lg" />
            <div>
              <CardTitle className="text-2xl">{perk.title}</CardTitle>
              <Badge>{perk.category}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{perk.description}</p>
          <Badge variant="outline" className="mb-4">
            Value: {perk.value}
          </Badge>
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <p className="text-gray-600">{perk.details}</p>
        </CardContent>
      </Card>
    </div>
  )
}

