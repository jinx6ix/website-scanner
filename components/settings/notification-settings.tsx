"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"
import type { Profile } from "@/lib/types"

interface NotificationSettingsProps {
  userId: string
  profile: Profile | null
}

export function NotificationSettings({ userId, profile }: NotificationSettingsProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [settings, setSettings] = useState({
    email_notifications: profile?.email_notifications ?? true,
    scan_complete_notifications: profile?.scan_complete_notifications ?? true,
    vulnerability_alerts: profile?.vulnerability_alerts ?? true,
    weekly_summary: profile?.weekly_summary ?? false,
  })

  const handleSave = async () => {
    setIsLoading(true)
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from("profiles")
        .update({
          email_notifications: settings.email_notifications,
          scan_complete_notifications: settings.scan_complete_notifications,
          vulnerability_alerts: settings.vulnerability_alerts,
          weekly_summary: settings.weekly_summary,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId)

      if (error) throw error

      toast({
        title: "Settings saved",
        description: "Your notification preferences have been updated.",
      })

      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Manage how you receive notifications about your scans.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive email notifications for important events</p>
          </div>
          <Switch
            id="email-notifications"
            checked={settings.email_notifications}
            onCheckedChange={(checked) => setSettings({ ...settings, email_notifications: checked })}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="scan-complete">Scan Complete Notifications</Label>
            <p className="text-sm text-muted-foreground">Get notified when a scan finishes</p>
          </div>
          <Switch
            id="scan-complete"
            checked={settings.scan_complete_notifications}
            onCheckedChange={(checked) => setSettings({ ...settings, scan_complete_notifications: checked })}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="vulnerability-alerts">Vulnerability Alerts</Label>
            <p className="text-sm text-muted-foreground">Receive alerts for critical vulnerabilities</p>
          </div>
          <Switch
            id="vulnerability-alerts"
            checked={settings.vulnerability_alerts}
            onCheckedChange={(checked) => setSettings({ ...settings, vulnerability_alerts: checked })}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="weekly-summary">Weekly Summary</Label>
            <p className="text-sm text-muted-foreground">Get a weekly summary of your scans</p>
          </div>
          <Switch
            id="weekly-summary"
            checked={settings.weekly_summary}
            onCheckedChange={(checked) => setSettings({ ...settings, weekly_summary: checked })}
          />
        </div>
        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Preferences"}
        </Button>
      </CardContent>
    </Card>
  )
}
