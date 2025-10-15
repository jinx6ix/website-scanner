import type { Metadata } from "next"
import { redirect, notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ScanResults } from "@/components/scanner/scan-results"

export const metadata: Metadata = {
  title: "Scan Results - SecureScan",
  description: "View detailed vulnerability scan results.",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function ScanDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  const { data: scan } = await supabase.from("scans").select("*").eq("id", id).eq("user_id", user.id).single()

  if (!scan) {
    notFound()
  }

  const { data: vulnerabilities } = await supabase
    .from("vulnerabilities")
    .select("*")
    .eq("scan_id", id)
    .order("severity", { ascending: true })

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader user={user} profile={profile} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <ScanResults scan={scan} vulnerabilities={vulnerabilities || []} />
        </div>
      </main>
    </div>
  )
}
