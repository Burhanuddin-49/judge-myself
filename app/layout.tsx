import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Judge Myself - Anonymous Self-Discovery Platform | Get Real Feedback",
  description:
    "Describe yourself anonymously and get honest feedback from the community. Discover how others perceive you with tags like Honest, Kind, Smart, or Toxic. Join thousands sharing their authentic selves.",
  keywords: [
    "anonymous feedback",
    "self discovery",
    "personality test",
    "honest opinions",
    "social judgment",
    "self awareness",
    "community feedback",
    "personality insights",
    "anonymous platform",
    "social experiment",
    "judge me",
    "personality quiz",
    "self reflection",
    "honest feedback",
    "social psychology",
  ],
  authors: [{ name: "Judge Myself Team" }],
  creator: "Judge Myself",
  publisher: "Judge Myself",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://judge-myself.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Judge Myself - Get Anonymous Honest Feedback About Yourself",
    description:
      "Share who you really are and discover how others see you. Anonymous, honest, and eye-opening. Join the community of self-discovery.",
    url: "https://judge-myself.vercel.app",
    siteName: "Judge Myself",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Judge Myself - Anonymous Self-Discovery Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Judge Myself - Anonymous Self-Discovery Platform",
    description:
      "Describe yourself anonymously and get honest feedback from the community. Discover how others really see you.",
    images: ["/og-image.jpg"],
    creator: "@judgemyself",
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8B5CF6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Judge Myself",
              description: "Anonymous self-discovery platform where users get honest feedback about their personality",
              url: "https://judge-myself.vercel.app",
              applicationCategory: "SocialNetworkingApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Judge Myself Team",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
