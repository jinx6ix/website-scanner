import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Target, Users, Zap, Lock, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About SecureScan - Professional Web Vulnerability Scanner",
  description:
    "Learn about SecureScan, our mission to make web security accessible to everyone, and how we help protect thousands of websites from security threats.",
  keywords: ["about securescan", "web security company", "vulnerability scanner", "security testing platform"],
  openGraph: {
    title: "About SecureScan - Making Web Security Accessible",
    description: "Professional vulnerability scanning platform trusted by developers and security teams worldwide.",
    type: "website",
  },
  alternates: {
    canonical: "https://securescan.app/about",
  },
}

export default function AboutPage() {
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
            <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Documentation
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground">
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
        <section className="border-b border-border bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About SecureScan</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We're on a mission to make professional-grade web security accessible to everyone, from individual
                developers to enterprise teams.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <Target className="h-12 w-12 text-primary" />
                  <h2 className="mt-4 text-3xl font-bold tracking-tight">Our Mission</h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Security shouldn't be complicated or expensive. We believe every website deserves enterprise-grade
                    security testing, regardless of size or budget.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    SecureScan was built to democratize web security by providing powerful vulnerability scanning tools
                    that are easy to use, affordable, and deliver actionable results in minutes.
                  </p>
                </div>
                <div>
                  <Users className="h-12 w-12 text-primary" />
                  <h2 className="mt-4 text-3xl font-bold tracking-tight">Who We Serve</h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    From solo developers to Fortune 500 companies, we help teams of all sizes protect their web
                    applications.
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Independent developers and freelancers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Startups and small businesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>DevOps and security teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Enterprise organizations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-t border-border bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-3xl font-bold tracking-tight">Our Values</h2>
              <p className="mt-4 text-center text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>

              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Lock className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Security First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We practice what we preach. Our platform is built with security at its core, protecting your data
                      and scan results.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Zap className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Speed & Efficiency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Get comprehensive security insights in minutes, not hours. We optimize for speed without
                      sacrificing accuracy.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">User-Centric</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We design for developers and security professionals, making complex security testing simple and
                      accessible.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <TrendingUp className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Continuous Improvement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We constantly update our detection capabilities to stay ahead of emerging threats and
                      vulnerabilities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Shield className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Transparency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Clear reporting with detailed explanations and remediation steps. No confusing jargon or hidden
                      details.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Target className="h-10 w-10 text-primary" />
                    <CardTitle className="mt-4">Accuracy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Minimize false positives with intelligent detection algorithms that focus on real, exploitable
                      vulnerabilities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight">Our Technology</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Built on modern infrastructure for reliability and performance
              </p>

              <div className="mt-8 space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold">Advanced Detection Engine</h3>
                    <p className="mt-2 text-muted-foreground">
                      Our scanning engine uses multiple detection techniques including pattern matching, behavioral
                      analysis, and heuristic detection to identify vulnerabilities with high accuracy.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold">Cloud-Native Architecture</h3>
                    <p className="mt-2 text-muted-foreground">
                      Built on scalable cloud infrastructure that can handle thousands of concurrent scans while
                      maintaining fast response times and high availability.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold">Continuous Updates</h3>
                    <p className="mt-2 text-muted-foreground">
                      Our vulnerability database is constantly updated with the latest security threats, CVEs, and
                      attack patterns to ensure comprehensive coverage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Join Thousands of Users</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start protecting your web applications with SecureScan today.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/auth/sign-up">Get Started Free</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/docs">View Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
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
