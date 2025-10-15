"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Scan, Vulnerability } from "@/lib/types"
import { format } from "date-fns"
import {
  AlertCircle,
  AlertTriangle,
  Info,
  Shield,
  Clock,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Download,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

interface ScanResultsProps {
  scan: Scan
  vulnerabilities: Vulnerability[]
}

export function ScanResults({ scan, vulnerabilities }: ScanResultsProps) {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertCircle className="h-5 w-5 text-red-600" />
      case "high":
        return <AlertTriangle className="h-5 w-5 text-orange-600" />
      case "medium":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />
      case "low":
        return <Info className="h-5 w-5 text-blue-600" />
      default:
        return <Info className="h-5 w-5" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "destructive"
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      case "low":
        return "outline"
      default:
        return "outline"
    }
  }

  const criticalVulns = vulnerabilities.filter((v) => v.severity === "critical")
  const highVulns = vulnerabilities.filter((v) => v.severity === "high")
  const mediumVulns = vulnerabilities.filter((v) => v.severity === "medium")
  const lowVulns = vulnerabilities.filter((v) => v.severity === "low")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/scans">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">Scan Results</h1>
          </div>
          <p className="text-muted-foreground">{scan.target_url}</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge
            variant={
              scan.scan_status === "completed" ? "default" : scan.scan_status === "failed" ? "destructive" : "secondary"
            }
          >
            {scan.scan_status}
          </Badge>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vulnerabilities</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{scan.total_vulnerabilities}</div>
            <p className="text-xs text-muted-foreground">Found in this scan</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{scan.critical_count}</div>
            <p className="text-xs text-muted-foreground">Immediate action required</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{scan.high_count}</div>
            <p className="text-xs text-muted-foreground">Should be addressed soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medium & Low</CardTitle>
            <Info className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{scan.medium_count + scan.low_count}</div>
            <p className="text-xs text-muted-foreground">Monitor and plan fixes</p>
          </CardContent>
        </Card>
      </div>

      {/* Scan Info */}
      <Card>
        <CardHeader>
          <CardTitle>Scan Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Started</p>
            <p className="text-sm">{format(new Date(scan.started_at), "PPpp")}</p>
          </div>
          {scan.completed_at && (
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Completed</p>
              <p className="text-sm">{format(new Date(scan.completed_at), "PPpp")}</p>
            </div>
          )}
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Duration</p>
            <p className="text-sm">
              {scan.completed_at
                ? `${Math.round((new Date(scan.completed_at).getTime() - new Date(scan.started_at).getTime()) / 1000)}s`
                : "In progress..."}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Status</p>
            <div className="flex items-center gap-2">
              {scan.scan_status === "completed" ? (
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              ) : scan.scan_status === "failed" ? (
                <XCircle className="h-4 w-4 text-red-600" />
              ) : (
                <Clock className="h-4 w-4 text-yellow-600" />
              )}
              <span className="text-sm capitalize">{scan.scan_status}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vulnerabilities */}
      {scan.scan_status === "completed" && vulnerabilities.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Vulnerabilities</CardTitle>
            <CardDescription>Detailed findings from the security scan</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All ({vulnerabilities.length})</TabsTrigger>
                <TabsTrigger value="critical">Critical ({criticalVulns.length})</TabsTrigger>
                <TabsTrigger value="high">High ({highVulns.length})</TabsTrigger>
                <TabsTrigger value="medium">Medium ({mediumVulns.length})</TabsTrigger>
                <TabsTrigger value="low">Low ({lowVulns.length})</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                {vulnerabilities.map((vuln) => (
                  <VulnerabilityCard key={vuln.id} vulnerability={vuln} />
                ))}
              </TabsContent>
              <TabsContent value="critical" className="space-y-4">
                {criticalVulns.length > 0 ? (
                  criticalVulns.map((vuln) => <VulnerabilityCard key={vuln.id} vulnerability={vuln} />)
                ) : (
                  <p className="py-8 text-center text-sm text-muted-foreground">No critical vulnerabilities found</p>
                )}
              </TabsContent>
              <TabsContent value="high" className="space-y-4">
                {highVulns.length > 0 ? (
                  highVulns.map((vuln) => <VulnerabilityCard key={vuln.id} vulnerability={vuln} />)
                ) : (
                  <p className="py-8 text-center text-sm text-muted-foreground">
                    No high severity vulnerabilities found
                  </p>
                )}
              </TabsContent>
              <TabsContent value="medium" className="space-y-4">
                {mediumVulns.length > 0 ? (
                  mediumVulns.map((vuln) => <VulnerabilityCard key={vuln.id} vulnerability={vuln} />)
                ) : (
                  <p className="py-8 text-center text-sm text-muted-foreground">
                    No medium severity vulnerabilities found
                  </p>
                )}
              </TabsContent>
              <TabsContent value="low" className="space-y-4">
                {lowVulns.length > 0 ? (
                  lowVulns.map((vuln) => <VulnerabilityCard key={vuln.id} vulnerability={vuln} />)
                ) : (
                  <p className="py-8 text-center text-sm text-muted-foreground">
                    No low severity vulnerabilities found
                  </p>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {scan.scan_status === "completed" && vulnerabilities.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
            <p className="mt-4 text-lg font-medium">No vulnerabilities found!</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Your website passed all security checks. Keep monitoring regularly.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function VulnerabilityCard({ vulnerability }: { vulnerability: Vulnerability }) {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertCircle className="h-5 w-5 text-red-600" />
      case "high":
        return <AlertTriangle className="h-5 w-5 text-orange-600" />
      case "medium":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />
      case "low":
        return <Info className="h-5 w-5 text-blue-600" />
      default:
        return <Info className="h-5 w-5" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "destructive"
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      case "low":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <div className="rounded-lg border border-border p-4 space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          {getSeverityIcon(vulnerability.severity)}
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{vulnerability.title}</h3>
              <Badge variant={getSeverityColor(vulnerability.severity)}>{vulnerability.severity}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{vulnerability.description}</p>
          </div>
        </div>
      </div>
      {vulnerability.affected_url && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ExternalLink className="h-3 w-3" />
          <span className="truncate">{vulnerability.affected_url}</span>
        </div>
      )}
      <div className="rounded-md bg-muted p-3 space-y-1">
        <p className="text-sm font-medium">Recommendation</p>
        <p className="text-sm text-muted-foreground">{vulnerability.recommendation}</p>
      </div>
      {vulnerability.cve_id && (
        <div className="text-xs text-muted-foreground">
          CVE ID: <span className="font-mono">{vulnerability.cve_id}</span>
        </div>
      )}
    </div>
  )
}
