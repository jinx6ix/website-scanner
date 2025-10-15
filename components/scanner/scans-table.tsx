"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Scan } from "@/lib/types"
import { formatDistanceToNow } from "date-fns"
import { ExternalLink, AlertCircle, CheckCircle2, Clock, Download, Search } from "lucide-react"
import Link from "next/link"

interface ScansTableProps {
  scans: Scan[]
}

export function ScansTable({ scans }: ScansTableProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [severityFilter, setSeverityFilter] = useState<string>("all")

  const filteredScans = scans.filter((scan) => {
    const matchesSearch = scan.target_url.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || scan.scan_status === statusFilter
    const matchesSeverity =
      severityFilter === "all" ||
      (severityFilter === "critical" && scan.critical_count > 0) ||
      (severityFilter === "high" && scan.high_count > 0) ||
      (severityFilter === "medium" && scan.medium_count > 0) ||
      (severityFilter === "low" && scan.low_count > 0)

    return matchesSearch && matchesStatus && matchesSeverity
  })

  const exportToCSV = () => {
    const headers = ["URL", "Status", "Date", "Total Vulnerabilities", "Critical", "High", "Medium", "Low"]
    const rows = filteredScans.map((scan) => [
      scan.target_url,
      scan.scan_status,
      new Date(scan.created_at).toLocaleDateString(),
      scan.total_vulnerabilities,
      scan.critical_count,
      scan.high_count,
      scan.medium_count,
      scan.low_count,
    ])

    const csvContent = [headers, ...rows].map((row) => row.join(",")).join("\n")
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `vulnerability-scans-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (scans.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="h-12 w-12 text-muted-foreground" />
          <p className="mt-4 text-lg font-medium">No scans yet</p>
          <p className="mt-2 text-sm text-muted-foreground">Start your first vulnerability scan to see results here.</p>
          <Button asChild className="mt-6">
            <Link href="/dashboard">Start New Scan</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>All Scans</CardTitle>
            <CardDescription>Complete history of your vulnerability scans</CardDescription>
          </div>
          <Button onClick={exportToCSV} variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by URL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="running">Running</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Select value={severityFilter} onValueChange={setSeverityFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Severity</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        {filteredScans.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <AlertCircle className="h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-lg font-medium">No scans match your filters</p>
            <p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <>
            <p className="mb-4 text-sm text-muted-foreground">
              Showing {filteredScans.length} of {scans.length} scans
            </p>
            <div className="space-y-4">
              {filteredScans.map((scan) => (
                <div key={scan.id} className="flex items-center justify-between rounded-lg border border-border p-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      {scan.scan_status === "completed" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : scan.scan_status === "failed" ? (
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      ) : (
                        <Clock className="h-5 w-5 text-yellow-600" />
                      )}
                      <div>
                        <p className="font-medium">{new URL(scan.target_url).hostname}</p>
                        <p className="text-sm text-muted-foreground">{scan.target_url}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{formatDistanceToNow(new Date(scan.created_at), { addSuffix: true })}</span>
                      {scan.scan_status === "completed" && (
                        <>
                          <span>•</span>
                          <span>{scan.total_vulnerabilities} vulnerabilities</span>
                          {scan.critical_count > 0 && (
                            <>
                              <span>•</span>
                              <span className="text-red-600">{scan.critical_count} critical</span>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={
                        scan.scan_status === "completed"
                          ? "default"
                          : scan.scan_status === "failed"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {scan.scan_status}
                    </Badge>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/dashboard/scans/${scan.id}`}>
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
