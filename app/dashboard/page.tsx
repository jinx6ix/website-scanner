import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { ScannerForm } from "@/components/scanner/scanner-form"
import { RecentScans } from "@/components/scanner/recent-scans"

export const metadata: Metadata = {
  title: "Dashboard - SecureScan",
  description: "Scan your websites for security vulnerabilities and view your scan history.",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader user={user} profile={profile} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Vulnerability Scanner</h1>
            <p className="mt-2 text-muted-foreground">
              Enter a URL to scan for security vulnerabilities including SQL injection, XSS, and more.
            </p>
          </div>
          <div className="mb-8">
            <DashboardStats userId={user.id} />
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ScannerForm userId={user.id} />
            </div>
            <div>
              <RecentScans userId={user.id} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
