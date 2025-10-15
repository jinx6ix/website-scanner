"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, AlertTriangle, CheckCircle, Clock } from "lucide-react"

interface DashboardStatsProps {
  userId: string
}

export function DashboardStats({ userId }: DashboardStatsProps) {
  const [stats, setStats] = useState({
    totalScans: 0,
    criticalVulnerabilities: 0,
    recentScans: 0,
    averageScanTime: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [userId])

  const loadStats = async () => {
    try {
      const supabase = createClient()

      // Get total scans
      const { count: totalScans } = await supabase
        .from("scans")
        .select("*", { count: "exact", head: true })
        .eq("user_id", userId)

      // Get user's scan IDs first
      const { data: userScans } = await supabase.from("scans").select("id").eq("user_id", userId)

      const scanIds = userScans?.map((scan) => scan.id) || []

      // Get critical vulnerabilities for user's scans
      let criticalVulnerabilities = 0
      if (scanIds.length > 0) {
        const { count } = await supabase
          .from("vulnerabilities")
          .select("*", { count: "exact", head: true })
          .eq("severity", "critical")
          .in("scan_id", scanIds)

        criticalVulnerabilities = count || 0
      }

      // Get recent scans (last 7 days)
      const sevenDaysAgo = new Date()
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
      const { count: recentScans } = await supabase
        .from("scans")
        .select("*", { count: "exact", head: true })
        .eq("user_id", userId)
        .gte("created_at", sevenDaysAgo.toISOString())

      setStats({
        totalScans: totalScans || 0,
        criticalVulnerabilities,
        recentScans: recentScans || 0,
        averageScanTime: 12, // Mock data
      })
    } catch (error) {
      console.error("Failed to load stats:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Loading...</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-8 w-20 animate-pulse rounded bg-muted" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalScans}</div>
          <p className="text-xs text-muted-foreground">All time</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Critical Issues</CardTitle>
          <AlertTriangle className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.criticalVulnerabilities}</div>
          <p className="text-xs text-muted-foreground">Requires immediate attention</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Recent Scans</CardTitle>
          <CheckCircle className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.recentScans}</div>
          <p className="text-xs text-muted-foreground">Last 7 days</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Scan Time</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.averageScanTime}s</div>
          <p className="text-xs text-muted-foreground">Per scan</p>
        </CardContent>
      </Card>
    </div>
  )
}
