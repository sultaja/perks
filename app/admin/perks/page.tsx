import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export const metadata = {
  title: "Manage Perks - Admin Dashboard",
}

const perks = [
  { id: 1, title: "AWS Startup Credits", category: "Cloud Services", value: "$100,000" },
  { id: 2, title: "Stripe Atlas", category: "Legal", value: "Free incorporation" },
  { id: 3, title: "HubSpot for Startups", category: "Marketing", value: "90% off" },
]

export default function ManagePerks() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Perks</h1>
        <Button asChild>
          <Link href="/admin/perks/new">Add New Perk</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {perks.map((perk) => (
            <TableRow key={perk.id}>
              <TableCell>{perk.title}</TableCell>
              <TableCell>{perk.category}</TableCell>
              <TableCell>{perk.value}</TableCell>
              <TableCell>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/admin/perks/${perk.id}/edit`}>Edit</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

