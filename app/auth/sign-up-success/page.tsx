import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Check Your Email - SecureScan",
  description: "Please check your email to confirm your SecureScan account.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SecureScan</span>
          </Link>
        </div>
      </header>
      <div className="flex flex-1 items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4 text-2xl">Check Your Email</CardTitle>
              <CardDescription>We've sent you a confirmation link</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-sm text-muted-foreground">
                Please check your email and click the confirmation link to activate your account. Once confirmed, you
                can sign in and start scanning.
              </p>
              <Button asChild className="w-full">
                <Link href="/auth/login">Go to Sign In</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
