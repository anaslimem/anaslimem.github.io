import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Anas Limem",
  description: "Personal portfolio website for Anas Limem",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/anas.jpg', sizes: 'any', type: 'image/jpeg' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/svg+xml' }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}