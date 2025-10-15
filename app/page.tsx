import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Search, FileText, Zap, Lock, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "SecureScan - Advanced Web Vulnerability Scanner | Protect Your Website",
  description:
    "Professional web vulnerability scanner that detects SQL injection, XSS, security misconfigurations, and outdated dependencies. Secure your website with comprehensive security testing and real-time threat detection.",
  keywords: [
    "vulnerability scanner",
    "web security",
    "SQL injection detection",
    "XSS scanner",
    "security testing",
    "penetration testing",
    "website security",
    "OWASP",
    "security audit",
    "cyber security",
  ],
  authors: [{ name: "SecureScan" }],
  creator: "SecureScan",
  publisher: "SecureScan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://securescan.app",
    title: "SecureScan - Advanced Web Vulnerability Scanner",
    description:
      "Detect and fix security vulnerabilities in your web applications. Professional-grade scanning for SQL injection, XSS, and more.",
    siteName: "SecureScan",
    images: [
      {
        url: "/security-dashboard-vulnerability-scanner.jpg",
        width: 1200,
        height: 630,
        alt: "SecureScan Vulnerability Scanner Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SecureScan - Advanced Web Vulnerability Scanner",
    description: "Detect and fix security vulnerabilities in your web applications with professional-grade scanning.",
    images: ["/security-dashboard-vulnerability-scanner.jpg"],
    creator: "@securescan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://securescan.app",
  },
}

export default function HomePage() {
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
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Documentation
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact
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
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Protect Your Website from{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Security Threats
              </span>
            </h1>
            <p className="text-pretty mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Advanced vulnerability scanner that detects SQL injection, XSS, security misconfigurations, and outdated
              dependencies. Get comprehensive security reports in minutes.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/auth/sign-up">Start Free Scan</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Free tier available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="border-t border-border bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Comprehensive Security Testing
              </h2>
              <p className="text-pretty mt-4 text-lg text-muted-foreground">
                Detect vulnerabilities before attackers do with our advanced scanning technology
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <AlertTriangle className="h-10 w-10 text-red-600" />
                  <CardTitle className="mt-4">SQL Injection Detection</CardTitle>
                  <CardDescription>
                    Identify SQL injection vulnerabilities that could expose your database to unauthorized access
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-blue-600" />
                  <CardTitle className="mt-4">XSS Protection</CardTitle>
                  <CardDescription>
                    Detect cross-site scripting vulnerabilities that could compromise user data and sessions
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 text-green-600" />
                  <CardTitle className="mt-4">Security Headers</CardTitle>
                  <CardDescription>
                    Analyze HTTP security headers and identify missing or misconfigured security policies
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-purple-600" />
                  <CardTitle className="mt-4">Dependency Scanning</CardTitle>
                  <CardDescription>
                    Check for outdated libraries and packages with known security vulnerabilities
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Search className="h-10 w-10 text-orange-600" />
                  <CardTitle className="mt-4">Deep Analysis</CardTitle>
                  <CardDescription>
                    Comprehensive scanning of your entire web application including APIs and endpoints
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-yellow-600" />
                  <CardTitle className="mt-4">Real-time Reports</CardTitle>
                  <CardDescription>
                    Get instant security reports with actionable recommendations and remediation steps
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
              <p className="text-pretty mt-4 text-lg text-muted-foreground">
                Get comprehensive security insights in three simple steps
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mt-4 text-xl font-semibold">Enter Your URL</h3>
                <p className="mt-2 text-muted-foreground">
                  Simply provide the URL of the website or web application you want to scan for vulnerabilities
                </p>
              </div>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mt-4 text-xl font-semibold">Automated Scanning</h3>
                <p className="mt-2 text-muted-foreground">
                  Our advanced scanner analyzes your site for SQL injection, XSS, misconfigurations, and more
                </p>
              </div>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mt-4 text-xl font-semibold">Get Detailed Report</h3>
                <p className="mt-2 text-muted-foreground">
                  Receive a comprehensive report with severity ratings and step-by-step remediation guidance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-t border-border bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-4 text-4xl font-bold">10,000+</div>
                <div className="mt-2 text-sm text-muted-foreground">Scans Completed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-4 text-4xl font-bold">50,000+</div>
                <div className="mt-2 text-sm text-muted-foreground">Vulnerabilities Found</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-4 text-4xl font-bold">99.9%</div>
                <div className="mt-2 text-sm text-muted-foreground">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div className="mt-4 text-4xl font-bold">{"<"}2 min</div>
                <div className="mt-2 text-sm text-muted-foreground">Average Scan Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-12 text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Secure Your Website?
                </h2>
                <p className="text-pretty mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  Start scanning your website for vulnerabilities today. No credit card required.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/auth/sign-up">Start Free Scan</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/docs">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
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
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-muted-foreground hover:text-foreground">
                    Blog
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
