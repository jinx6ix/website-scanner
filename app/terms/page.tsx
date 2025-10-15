import type { Metadata } from "next"
import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service - SecureScan",
  description: "SecureScan terms of service. Read our terms and conditions for using the vulnerability scanner.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray mt-8 max-w-none dark:prose-invert">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using SecureScan, you agree to be bound by these Terms of Service. If you disagree with
              any part of these terms, you may not access the service.
            </p>

            <h2>Use License</h2>
            <p>
              SecureScan grants you a personal, non-transferable, non-exclusive license to use our vulnerability
              scanning service for legitimate security testing purposes.
            </p>

            <h3>You may:</h3>
            <ul>
              <li>Scan websites you own or have explicit permission to test</li>
              <li>Use scan results to improve your website security</li>
              <li>Share results within your organization</li>
            </ul>

            <h3>You may not:</h3>
            <ul>
              <li>Scan websites without proper authorization</li>
              <li>Use the service for malicious purposes</li>
              <li>Attempt to circumvent security measures</li>
              <li>Resell or redistribute our service</li>
              <li>Reverse engineer our scanning technology</li>
            </ul>

            <h2>User Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Ensuring you have permission to scan target websites</li>
              <li>Complying with all applicable laws and regulations</li>
            </ul>

            <h2>Service Availability</h2>
            <p>
              We strive to maintain high availability but do not guarantee uninterrupted access. We may modify, suspend,
              or discontinue the service at any time without notice.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              SecureScan is provided "as is" without warranties of any kind. We are not liable for any damages arising
              from your use of the service, including but not limited to direct, indirect, incidental, or consequential
              damages.
            </p>

            <h2>Disclaimer</h2>
            <p>
              Our vulnerability scanner is a tool to assist with security testing. It may not detect all
              vulnerabilities, and findings should be verified by security professionals. We are not responsible for any
              security breaches or damages to scanned websites.
            </p>

            <h2>Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account immediately, without prior notice, for conduct
              that violates these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes via
              email or through the service.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at legal@securescan.app or through our
              support channels.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
