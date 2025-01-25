import { notFound } from "next/navigation"
import { CalendarIcon, Clock } from "lucide-react"

// This would typically come from a database
const blogPosts = [
  {
    id: "1",
    title: "Top Startup Perks and Credits in 2024",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
    image: "/placeholder.svg?height=400&width=800",
    date: "January 15, 2024",
    readTime: "5 min read",
  },
  // Add more blog posts as needed
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) return {}

  return {
    title: `${post.title} - Startup Perks Directory Blog`,
    description: post.content.substring(0, 160),
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          {post.date}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {post.readTime}
        </div>
      </div>
      <img src={post.image || "/placeholder.svg"} alt="" className="w-full h-64 object-cover rounded-lg mb-6" />
      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>
    </div>
  )
}

