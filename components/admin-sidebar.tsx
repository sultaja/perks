"use client"

import Link from "next/link"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export function AdminSidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav className="space-y-2">
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/admin">Dashboard</Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/admin/perks">Manage Perks</Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/admin/categories">Manage Categories</Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/admin/blog">Manage Blog Posts</Link>
        </Button>
        <Button asChild variant="ghost" className="w-full justify-start">
          <Link href="/admin/seo">SEO Settings</Link>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start mt-auto"
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </nav>
    </aside>
  )
}

