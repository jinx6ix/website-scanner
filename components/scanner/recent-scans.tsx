import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { ExternalLink } from "lucide-react"

interface RecentScansProps {
  userId: string
}

export async function RecentScans({ userId }: RecentScansProps) {
  const supabase = await createClient()

  const { data: scans } = await supabase
    .from("scans")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(5)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Scans</CardTitle>
        <CardDescription>Your latest vulnerability scans</CardDescription>
      </CardHeader>
      <CardContent>
        {!scans || scans.length === 0 ? (
          <p className="text-sm text-muted-foreground">No scans yet. Start your first scan!</p>
        ) : (
          <div className="space-y-4">
            {scans.map((scan) => (
              <Link
                key={scan.id}
                href={`/dashboard/scans/${scan.id}`}
                className="block rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{new URL(scan.target_url).hostname}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(scan.created_at), { addSuffix: true })}
                    </p>
                  </div>
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
                </div>
                {scan.scan_status === "completed" && (
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{scan.total_vulnerabilities} vulnerabilities found</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
