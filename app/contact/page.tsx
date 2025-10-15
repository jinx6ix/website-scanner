import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Mail, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Us - SecureScan | Get in Touch",
  description:
    "Have questions about SecureScan? Contact our team for support, sales inquiries, or partnership opportunities.",
  openGraph: {
    title: "Contact Us - SecureScan",
    description: "Get in touch with our security experts",
    type: "website",
  },
}

export default function ContactPage() {
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
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Docs
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-foreground/80">
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
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
              <p className="mt-6 text-pretty text-lg text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">For general inquiries</p>
                    <a href="mailto:support@securescan.com" className="mt-2 block text-sm font-medium">
                      support@securescan.com
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Sales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">For enterprise inquiries</p>
                    <a href="mailto:sales@securescan.com" className="mt-2 block text-sm font-medium">
                      sales@securescan.com
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9am-5pm EST</p>
                    <a href="tel:+1234567890" className="mt-2 block text-sm font-medium">
                      +1 (234) 567-890
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
