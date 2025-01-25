import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the Startup Perks Directory?",
    answer:
      "The Startup Perks Directory is a curated collection of discounts, credits, and free trials specifically designed for startups. We help founders discover and access valuable resources to grow their business while managing costs effectively.",
  },
  {
    question: "How do I claim these perks?",
    answer:
      "Most perks can be claimed directly through our platform after verifying your startup status. Some perks may require you to visit the provider's website and verify your eligibility through their process. We provide detailed instructions for each perk.",
  },
  {
    question: "Are these perks really free?",
    answer:
      "While many perks are completely free, some may require a paid subscription after the trial period ends. We clearly mark the terms and conditions for each perk, including any future commitments or requirements.",
  },
  {
    question: "How do you verify startup eligibility?",
    answer:
      "We work with various startup ecosystems and accelerators to verify eligibility. Typically, you'll need to provide proof of incorporation, funding status, or association with recognized startup programs.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

