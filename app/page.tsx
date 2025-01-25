import { HeroSection } from "@/components/hero-section"
import { FeaturedPerks } from "@/components/featured-perks"
import { LatestPerks } from "@/components/latest-perks"
import { PopularCategories } from "@/components/popular-categories"
import { BlogSection } from "@/components/blog-section"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedPerks />
      <LatestPerks />
      <PopularCategories />
      <BlogSection />
      <FaqSection />
    </main>
  )
}

