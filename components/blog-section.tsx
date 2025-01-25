import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Top Startup Perks and Credits in 2024",
    excerpt:
      "Discover the most valuable perks and credits available for startups in 2024. From cloud services to marketing tools.",
    image: "/placeholder.svg?height=200&width=400",
    date: "January 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "How to Maximize Your Startup Benefits",
    excerpt: "Learn how to make the most of your startup perks and save thousands of dollars in operational costs.",
    image: "/placeholder.svg?height=200&width=400",
    date: "January 10, 2024",
    readTime: "4 min read",
  },
  {
    title: "Essential Tools Every Startup Needs",
    excerpt:
      "A comprehensive guide to the must-have tools and services for modern startups, including available discounts.",
    image: "/placeholder.svg?height=200&width=400",
    date: "January 5, 2024",
    readTime: "6 min read",
  },
]

export function BlogSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Latest From Our Blog</h2>
          <Button variant="outline">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.title} className="overflow-hidden">
              <div className="aspect-video relative">
                <img src={post.image || "/placeholder.svg"} alt="" className="object-cover w-full h-full" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                <Button variant="link" className="mt-4 px-0">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

