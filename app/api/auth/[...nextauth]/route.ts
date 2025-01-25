import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { sql } from "@vercel/postgres"
import { VercelPostgresAdapter } from "@auth/vercel-postgres-adapter"

const handler = NextAuth({
  adapter: VercelPostgresAdapter(sql),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const allowedEmails = (process.env.ALLOWED_EMAILS || "").split(",")
      return allowedEmails.includes(user.email || "")
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
})

export { handler as GET, handler as POST }

