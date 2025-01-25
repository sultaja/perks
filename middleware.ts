import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized({ req }) {
      const isAdminRoute = req.nextUrl.pathname.startsWith("/admin")
      const isLoginPage = req.nextUrl.pathname === "/admin/login"

      // Allow access to login page
      if (isLoginPage) return true

      // Protect all other admin routes
      if (isAdminRoute) {
        return !!req.auth
      }

      return true
    },
  },
})

export const config = {
  matcher: ["/admin/:path*"],
}

