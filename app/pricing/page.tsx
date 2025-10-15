import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Pricing - SecureScan | Affordable Security Scanning Plans",
  description:
    "Choose the perfect security scanning plan for your needs. From free tier to enterprise solutions with advanced features.",
  openGraph: {
    title: "Pricing - SecureScan",
    description: "Affordable security scanning plans for every team size",
    type: "website",
  },
}

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out SecureScan",
    features: [
      "5 scans per month",
      "Basic vulnerability detection",
      "Email notifications",
      "7-day scan history",
      "Community support",
    ],
    cta: "Get Started",
    href: "/auth/sign-up",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professional developers and small teams",
    features: [
      "100 scans per month",
      "Advanced vulnerability detection",
      "Priority email notifications",
      "90-day scan history",
      "API access",
      "Export reports (PDF/CSV)",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "/auth/sign-up",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited scans",
      "Custom vulnerability rules",
      "Real-time notifications",
      "Unlimited scan history",
      "Full API access",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SecureScan</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-foreground hover:text-foreground/80">
              Pricing
            </Link>
            <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Docs
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">
                Choose the plan that fits your needs. All plans include our core security scanning features.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {plans.map((plan) => (
                <Card key={plan.name} className={plan.popular ? "border-primary shadow-lg" : ""}>
                  {plan.popular && (
                    <div className="bg-primary px-3 py-1 text-center text-sm font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                      <Link href={plan.href}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
