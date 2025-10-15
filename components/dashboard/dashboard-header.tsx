import Link from "next/link"
import { Shield } from "lucide-react"
import { UserNav } from "@/components/auth/user-nav"
import type { User } from "@supabase/supabase-js"
import type { Profile } from "@/lib/types"

interface DashboardHeaderProps {
  user: User
  profile: Profile | null
}

export function DashboardHeader({ user, profile }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">SecureScan</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/dashboard" className="text-sm font-medium text-foreground hover:text-foreground/80">
            Scanner
          </Link>
          <Link href="/dashboard/scans" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Scan History
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Pricing
          </Link>
          <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Documentation
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>
        <UserNav email={user.email} fullName={profile?.full_name} />
      </div>
    </header>
  )
}
