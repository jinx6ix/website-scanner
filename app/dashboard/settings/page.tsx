import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ApiKeysManager } from "@/components/settings/api-keys-manager"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { SecuritySettings } from "@/components/settings/security-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Settings - SecureScan",
  description: "Manage your account settings, API keys, and preferences.",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function SettingsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="mt-2 text-muted-foreground">
              Manage your account settings, API keys, and security preferences.
            </p>
          </div>
          <Tabs defaultValue="api-keys" className="space-y-6">
            <TabsList>
              <TabsTrigger value="api-keys">API Keys</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="api-keys" className="space-y-6">
              <ApiKeysManager userId={user.id} />
            </TabsContent>
            <TabsContent value="notifications" className="space-y-6">
              <NotificationSettings userId={user.id} profile={profile} />
            </TabsContent>
            <TabsContent value="security" className="space-y-6">
              <SecuritySettings user={user} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
