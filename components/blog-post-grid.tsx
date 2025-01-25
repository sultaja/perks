import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Top Startup Perks and Credits in 2024",
    excerpt:
      "Discover the most valuable perks and credits available for startups in 2024. From cloud services to marketing tools.",
    image: "/placeholder.svg?height=200&width=400",
    date: "January 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Maximize Your Startup Benefits",
    excerpt: "Learn how to make the most of your startup perks and save thousands of dollars in operational costs.",
    image: "/placeholder.svg?height=200&width=400",
    date: "January 10, 2024",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Essential Tools Every Startup Needs",
    excerpt:
      "A comprehensive guide to the must-have tools and services for modern startups, including available discounts.",
    image: "/placeholder.svg?height=200&width=400",
    date: "January 5, 2024",
    readTime: "6 min read",
  },
  // Add more blog posts here
]

export function BlogPostGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <Link href={`/blog/${post.id}`}>
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
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}

