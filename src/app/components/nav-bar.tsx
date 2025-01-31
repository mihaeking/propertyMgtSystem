"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

export function NavBar() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white border-b">
      <div className="flex items-center ">
        <Link href="/" className="">
          <span className="text-xl font-bold text-blue-600">
            Digitized Real Estate
          </span>
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/login" className="text-xl font-medium hover:text-blue-600">
          Manage Rentals
        </Link>
        <Link href="/" className="text-xl font-medium hover:text-blue-600">
          Advertise
        </Link>
        <Link
          href="/dashboard/tenant"
          className="text-xl font-medium hover:text-blue-600"
        >
          Rent
        </Link>
        <Link
          href="/dashboard/tenant/rent"
          className="text-xl font-medium hover:text-blue-600"
        >
          Help
        </Link>
        <Link href="/login">
          <Button variant="ghost" className="text-2xl font-medium bg-blue-300">
            Sign In
          </Button>
        </Link>
        {/* <button type="button" onClick={() => router.push("/login")}>
          Dashboard
        </button> */}
      </div>
    </nav>
  );
}
