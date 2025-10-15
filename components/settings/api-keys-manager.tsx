"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Copy, Eye, EyeOff, Plus, Trash2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface ApiKey {
  id: string
  name: string
  key: string
  created_at: string
}

interface ApiKeysManagerProps {
  userId: string
}

export function ApiKeysManager({ userId }: ApiKeysManagerProps) {
  const { toast } = useToast()
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isCreating, setIsCreating] = useState(false)
  const [newKeyName, setNewKeyName] = useState("")
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set())

  useEffect(() => {
    loadApiKeys()
  }, [userId])

  const loadApiKeys = async () => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("api_keys")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })

      if (error) throw error
      setApiKeys(data || [])
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load API keys.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const createApiKey = async () => {
    if (!newKeyName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a name for the API key.",
        variant: "destructive",
      })
      return
    }

    setIsCreating(true)
    try {
      const supabase = createClient()
      const key = `sk_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`

      const { error } = await supabase.from("api_keys").insert({
        user_id: userId,
        name: newKeyName,
        key: key,
      })

      if (error) throw error

      toast({
        title: "API key created",
        description: "Your new API key has been created successfully.",
      })

      setNewKeyName("")
      loadApiKeys()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create API key.",
        variant: "destructive",
      })
    } finally {
      setIsCreating(false)
    }
  }

  const deleteApiKey = async (id: string) => {
    try {
      const supabase = createClient()
      const { error } = await supabase.from("api_keys").delete().eq("id", id)

      if (error) throw error

      toast({
        title: "API key deleted",
        description: "The API key has been deleted successfully.",
      })

      loadApiKeys()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete API key.",
        variant: "destructive",
      })
    }
  }

  const copyToClipboard = (key: string) => {
    navigator.clipboard.writeText(key)
    toast({
      title: "Copied",
      description: "API key copied to clipboard.",
    })
  }

  const toggleKeyVisibility = (id: string) => {
    setVisibleKeys((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const maskKey = (key: string) => {
    return `${key.substring(0, 8)}${"•".repeat(24)}`
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New API Key</CardTitle>
          <CardDescription>Generate a new API key to access the SecureScan API.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="key-name">Key Name</Label>
              <Input
                id="key-name"
                placeholder="Production API Key"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <Button onClick={createApiKey} disabled={isCreating}>
                <Plus className="mr-2 h-4 w-4" />
                Create Key
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your API Keys</CardTitle>
          <CardDescription>Manage your existing API keys. Keep them secure and never share them.</CardDescription>
        </CardHeader>
        <CardContent>
          {apiKeys.length === 0 ? (
            <p className="text-sm text-muted-foreground">No API keys yet. Create one to get started.</p>
          ) : (
            <div className="space-y-4">
              {apiKeys.map((apiKey) => (
                <div key={apiKey.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex-1">
                    <p className="font-medium">{apiKey.name}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <code className="text-sm text-muted-foreground">
                        {visibleKeys.has(apiKey.id) ? apiKey.key : maskKey(apiKey.key)}
                      </code>
                      <Button variant="ghost" size="sm" onClick={() => toggleKeyVisibility(apiKey.id)}>
                        {visibleKeys.has(apiKey.id) ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Created {new Date(apiKey.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(apiKey.key)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete API Key</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this API key? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => deleteApiKey(apiKey.id)}>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
