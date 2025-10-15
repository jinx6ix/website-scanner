import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Book, Code, Lock, AlertTriangle, FileText, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Documentation - SecureScan Vulnerability Scanner Guide",
  description:
    "Complete documentation for SecureScan vulnerability scanner. Learn how to scan websites for SQL injection, XSS, security misconfigurations, and interpret security reports.",
  keywords: [
    "vulnerability scanner documentation",
    "security testing guide",
    "SQL injection detection",
    "XSS prevention",
    "web security tutorial",
    "OWASP guide",
  ],
  openGraph: {
    title: "SecureScan Documentation - Complete Security Testing Guide",
    description: "Learn how to use SecureScan to detect and fix security vulnerabilities in your web applications.",
    type: "website",
  },
  alternates: {
    canonical: "https://securescan.app/docs",
  },
}

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SecureScan</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="/docs" className="text-sm font-medium text-foreground">
              Documentation
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Book className="mx-auto h-12 w-12 text-primary" />
              <h1 className="mt-4 text-4xl font-bold tracking-tight">Documentation</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about using SecureScan to protect your web applications
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight">Quick Start Guide</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get started with SecureScan in minutes and begin scanning your websites for vulnerabilities.
              </p>

              <div className="mt-8 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        1
                      </div>
                      <CardTitle>Create an Account</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Sign up for a free SecureScan account. No credit card required. You'll receive a confirmation
                      email to verify your account.
                    </p>
                    <Button asChild className="mt-4">
                      <Link href="/auth/sign-up">Create Account</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        2
                      </div>
                      <CardTitle>Enter Your Website URL</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      From your dashboard, enter the URL of the website you want to scan. Make sure the URL is
                      accessible and starts with http:// or https://.
                    </p>
                    <div className="mt-4 rounded-md bg-muted p-4">
                      <code className="text-sm">https://example.com</code>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        3
                      </div>
                      <CardTitle>Review Your Results</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Once the scan completes, you'll see a detailed report with all vulnerabilities found, organized by
                      severity. Each vulnerability includes a description and remediation steps.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Vulnerability Types */}
        <section className="border-t border-border bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight">Vulnerability Types</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                SecureScan detects a wide range of security vulnerabilities in your web applications.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                    <CardTitle className="mt-4">SQL Injection</CardTitle>
                    <CardDescription>Critical database security vulnerability</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Detects SQL injection vulnerabilities that could allow attackers to access, modify, or delete
                      database information. We test for common SQL injection patterns and error-based detection.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Code className="h-8 w-8 text-orange-600" />
                    <CardTitle className="mt-4">Cross-Site Scripting (XSS)</CardTitle>
                    <CardDescription>Client-side code injection attacks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Identifies XSS vulnerabilities where malicious scripts could be injected into web pages. We test
                      for reflected, stored, and DOM-based XSS vulnerabilities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Lock className="h-8 w-8 text-blue-600" />
                    <CardTitle className="mt-4">Security Headers</CardTitle>
                    <CardDescription>HTTP security configuration issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Checks for missing or misconfigured security headers like HSTS, CSP, X-Frame-Options, and
                      X-Content-Type-Options that protect against various attacks.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-green-600" />
                    <CardTitle className="mt-4">SSL/TLS Configuration</CardTitle>
                    <CardDescription>Encryption and certificate issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Verifies that your website uses HTTPS and has proper SSL/TLS configuration. Detects insecure HTTP
                      connections and certificate problems.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-purple-600" />
                    <CardTitle className="mt-4">Cookie Security</CardTitle>
                    <CardDescription>Session management vulnerabilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Analyzes cookie configuration for missing Secure, HttpOnly, and SameSite flags that could lead to
                      session hijacking or CSRF attacks.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Search className="h-8 w-8 text-yellow-600" />
                    <CardTitle className="mt-4">More Coming Soon</CardTitle>
                    <CardDescription>Expanding detection capabilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We're constantly adding new vulnerability detection capabilities including CSRF, authentication
                      issues, and dependency scanning.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight">Understanding Your Results</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Learn how to interpret scan results and prioritize security fixes.
              </p>

              <div className="mt-8 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Severity Levels</CardTitle>
                    <CardDescription>How we classify vulnerabilities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="font-semibold text-red-600">Critical</p>
                        <p className="text-sm text-muted-foreground">
                          Immediate action required. These vulnerabilities can be easily exploited and cause severe
                          damage.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-semibold text-orange-600">High</p>
                        <p className="text-sm text-muted-foreground">
                          Should be addressed soon. These vulnerabilities pose significant security risks.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="font-semibold text-yellow-600">Medium</p>
                        <p className="text-sm text-muted-foreground">
                          Plan to fix. These vulnerabilities should be addressed in your next security update.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-blue-600">Low</p>
                        <p className="text-sm text-muted-foreground">
                          Monitor and consider fixing. These are minor security improvements.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground">Common questions about SecureScan</p>

              <Accordion type="single" collapsible className="mt-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does a scan take?</AccordionTrigger>
                  <AccordionContent>
                    Most scans complete in under 2 minutes. The exact time depends on the size and complexity of your
                    website. You'll receive real-time updates as the scan progresses.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is SecureScan safe to use on production websites?</AccordionTrigger>
                  <AccordionContent>
                    Yes, SecureScan uses non-invasive testing methods that won't harm your website or data. We only
                    perform read-only operations and don't attempt to exploit vulnerabilities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What should I do if vulnerabilities are found?</AccordionTrigger>
                  <AccordionContent>
                    Each vulnerability in your report includes detailed remediation steps. Start with critical and high
                    severity issues first. If you need help, consult with your development team or a security
                    professional.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How often should I scan my website?</AccordionTrigger>
                  <AccordionContent>
                    We recommend scanning after every major update or at least monthly. Regular scanning helps you catch
                    new vulnerabilities early and maintain strong security posture.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I scan websites I don't own?</AccordionTrigger>
                  <AccordionContent>
                    You should only scan websites you own or have explicit permission to test. Unauthorized security
                    testing may be illegal in some jurisdictions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Ready to Secure Your Website?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start scanning your website for vulnerabilities today with SecureScan.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/auth/sign-up">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-bold">SecureScan</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Professional web vulnerability scanner for modern applications
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Product</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} SecureScan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
