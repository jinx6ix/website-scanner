export interface Scan {
  id: string
  user_id: string
  target_url: string
  scan_status: "pending" | "running" | "completed" | "failed"
  started_at: string
  completed_at?: string
  total_vulnerabilities: number
  critical_count: number
  high_count: number
  medium_count: number
  low_count: number
  created_at: string
}

export interface Vulnerability {
  id: string
  scan_id: string
  vulnerability_type: string
  severity: "critical" | "high" | "medium" | "low"
  title: string
  description: string
  affected_url?: string
  recommendation: string
  cve_id?: string
  created_at: string
}

export interface Profile {
  id: string
  email?: string
  full_name?: string
  company?: string
  bio?: string
  email_notifications?: boolean
  scan_complete_notifications?: boolean
  vulnerability_alerts?: boolean
  weekly_summary?: boolean
  created_at: string
  updated_at: string
}
