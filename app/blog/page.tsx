import { BlogPostGrid } from "@/components/blog-post-grid"

export const metadata = {
  title: "Blog - Startup Perks Directory",
  description: "Read the latest articles about startup perks, discounts, and growth strategies",
}

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <BlogPostGrid />
    </div>
  )
}

