import type { Metadata } from "next"
import { SignUpForm } from "@/components/auth/sign-up-form"
import Link from "next/link"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Sign Up - SecureScan",
  description: "Create a SecureScan account to start scanning your websites for security vulnerabilities.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function SignUpPage() {
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
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}
