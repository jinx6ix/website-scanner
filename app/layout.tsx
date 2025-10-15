import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://securescan.app"),
  title: {
    default: "SecureScan - Advanced Web Vulnerability Scanner",
    template: "%s | SecureScan",
  },
  description:
    "Professional web vulnerability scanner that detects SQL injection, XSS, security misconfigurations, and outdated dependencies. Secure your website with comprehensive security testing.",
  keywords: [
    "vulnerability scanner",
    "web security",
    "SQL injection",
    "XSS scanner",
    "security testing",
    "penetration testing",
    "OWASP",
    "cyber security",
  ],
  authors: [{ name: "SecureScan" }],
  creator: "SecureScan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://securescan.app",
    siteName: "SecureScan",
    title: "SecureScan - Advanced Web Vulnerability Scanner",
    description: "Detect and fix security vulnerabilities in your web applications with professional-grade scanning.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@securescan",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://securescan.app" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
