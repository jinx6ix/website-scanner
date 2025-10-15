"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Search } from "lucide-react"

interface ScannerFormProps {
  userId: string
}

export function ScannerForm({ userId }: ScannerFormProps) {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Validate URL
      const urlObj = new URL(url)
      if (!urlObj.protocol.startsWith("http")) {
        throw new Error("URL must start with http:// or https://")
      }

      const response = await fetch("/api/scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, userId }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to start scan")
      }

      const data = await response.json()
      router.push(`/dashboard/scans/${data.scanId}`)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("An error occurred while starting the scan")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Start New Scan</CardTitle>
        <CardDescription>Enter the URL of the website you want to scan for vulnerabilities</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url">Website URL</Label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          {error && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive" role="alert">
              {error}
            </div>
          )}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Starting scan...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Start Scan
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
