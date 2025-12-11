import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Diego Oquendo Beltrán | Senior Fullstack Developer",
  description: "Senior Fullstack Developer specializing in React, Node.js, and TypeScript. Building scalable solutions with modern technologies. 7+ years of experience serving 20,000+ users daily.",
  keywords: ["Diego Oquendo", "Fullstack Developer", "React", "Node.js", "TypeScript", "Web Development", "Bogotá", "Colombia", "Senior Developer"],
  authors: [{ name: "Diego Oquendo Beltrán" }],
  openGraph: {
    title: "Diego Oquendo Beltrán | Senior Fullstack Developer",
    description: "Senior Fullstack Developer specializing in React, Node.js, and TypeScript",
    url: "https://diegooquendo.dev",
    siteName: "Diego Oquendo Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Oquendo Beltrán | Senior Fullstack Developer",
    description: "Senior Fullstack Developer specializing in React, Node.js, and TypeScript",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
