import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { performVulnerabilityScan } from "@/lib/scanner/vulnerability-scanner"
import { waitUntil } from "@vercel/functions" // Import waitUntil

export async function POST(request: Request) {
  try {
    const { url, userId } = await request.json()

    if (!url || !userId) {
      return NextResponse.json({ error: "URL and userId are required" }, { status: 400 })
    }

    // Validate URL
    try {
      new URL(url)
    } catch {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 })
    }

    const supabase = await createClient()

    // Verify user is authenticated
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user || user.id !== userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Create scan record
    const { data: scan, error: scanError } = await supabase
      .from("scans")
      .insert({
        user_id: userId,
        target_url: url,
        scan_status: "running",
      })
      .select()
      .single()

    if (scanError) {
      console.error("[v0] Error creating scan:", scanError)
      return NextResponse.json({ error: "Failed to create scan" }, { status: 500 })
    }

    // Perform scan asynchronously with waitUntil
    waitUntil(performVulnerabilityScan(scan.id, url).catch((error) => {
      console.error("[v0] Scan error:", error)
    }))

    return NextResponse.json({ scanId: scan.id, status: "running" })
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}