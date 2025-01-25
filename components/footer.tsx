import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Startup Perks Directory</h3>
            <p className="text-gray-400">Discover the best perks and discounts for your startup.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0">
                  Cloud Services
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0">
                  Marketing Tools
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0">
                  Development
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0">
                  Design Tools
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0">
                  About Us
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0">
                  Contact
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0">
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-gray-400 hover:text-white p-0">
                  Terms of Service
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates about new perks and discounts.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Startup Perks Directory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

