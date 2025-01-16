import Link from "next/link"
import { Button } from "@/app/components/ui/button"

export function NavBar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white border-b">
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-xl font-medium hover:text-blue-600">Rent</Link>
      
      <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
        <span className="text-xl font-bold text-blue-600">Digitized Real Estate</span>
      </Link>
</div>
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-xl font-medium hover:text-blue-600">Manage Rentals</Link>
        <Link href="/" className="text-xl font-medium hover:text-blue-600">Advertise</Link>
        <Link href="/" className="text-xl font-medium hover:text-blue-600">Help</Link>
        <Button variant="ghost" className="text-2xl font-medium">Sign In</Button>
      </div>
    </nav>
  )
}

