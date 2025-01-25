import { notFound } from "next/navigation"
import { getPerk } from "@/app/actions/perks"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data: perk } = await getPerk(params.slug)
  if (!perk) return {}

  return {
    title: `${perk.title} - Startup Perks Directory`,
    description: perk.description,
  }
}

export default async function PerkPage({ params }: { params: { slug: string } }) {
  const { data: perk } = await getPerk(params.slug)

  if (!perk) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <img src={perk.logo || "/placeholder.svg"} alt="" className="w-16 h-16 rounded-lg" />
          <div>
            <h1 className="text-3xl font-bold">{perk.title}</h1>
            <Badge>{perk.category_name}</Badge>
          </div>
        </div>
        <p className="text-lg text-gray-600">{perk.description}</p>
      </div>

      {/* Offers Section */}
      <div className="grid gap-6 mb-12">
        {perk.offers.map((offer) => (
          <Card key={offer.id}>
            <CardHeader>
              <CardTitle>{offer.title}</CardTitle>
              <Badge variant="outline" className="w-fit">
                {offer.value}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              {offer.promo_code && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="font-mono text-lg">{offer.promo_code}</p>
                </div>
              )}
              <Button size="lg" className="w-full sm:w-auto">
                Redeem Offer
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How to Redeem Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How to Redeem</h2>
        <div className="prose max-w-none">
          <p>{perk.how_to_redeem}</p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Step-by-step Guide</h2>
        <div className="grid gap-8">
          {perk.steps.map((step) => (
            <div key={step.id} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                {step.order_num}
              </div>
              <div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                {step.image && (
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="rounded-lg border" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          {perk.faq.map((item, index) => (
            <AccordionItem key={item.id} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}

