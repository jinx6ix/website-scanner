import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ScansTable } from "@/components/scanner/scans-table"

export const metadata: Metadata = {
  title: "Scan History - SecureScan",
  description: "View your vulnerability scan history and results.",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function ScansPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect("/auth/login")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  const { data: scans } = await supabase
    .from("scans")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader user={user} profile={profile} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Scan History</h1>
            <p className="mt-2 text-muted-foreground">View all your vulnerability scans and their results.</p>
          </div>
          <ScansTable scans={scans || []} />
        </div>
      </main>
    </div>
  )
}
