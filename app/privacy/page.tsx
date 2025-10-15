import type { Metadata } from "next"
import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy - SecureScan",
  description: "SecureScan privacy policy. Learn how we collect, use, and protect your data.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SecureScan</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray mt-8 max-w-none dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              SecureScan ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our vulnerability scanning
              service.
            </p>

            <h2>Information We Collect</h2>
            <h3>Account Information</h3>
            <p>When you create an account, we collect:</p>
            <ul>
              <li>Email address</li>
              <li>Full name</li>
              <li>Password (encrypted)</li>
              <li>Company name (optional)</li>
            </ul>

            <h3>Scan Data</h3>
            <p>When you perform vulnerability scans, we collect:</p>
            <ul>
              <li>Target URLs you scan</li>
              <li>Scan results and vulnerability findings</li>
              <li>Scan timestamps and metadata</li>
            </ul>

            <h3>Usage Information</h3>
            <p>We automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Usage patterns and preferences</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain our vulnerability scanning service</li>
              <li>Process and store your scan results</li>
              <li>Send you service-related notifications</li>
              <li>Improve our detection capabilities and user experience</li>
              <li>Prevent fraud and ensure platform security</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data, including encryption at rest and in
              transit, secure authentication, and regular security audits. However, no method of transmission over the
              internet is 100% secure.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your account information and scan results for as long as your account is active. You can delete
              your account and associated data at any time from your account settings.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@securescan.app or through
              our support channels.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
