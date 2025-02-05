import "./globals.css"

import Footer from "@/components/footer"
import { Geist_Mono } from "next/font/google"
import Header from "@/components/header"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"

const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Rahman Muhaemin - Fullstack Developer",
  description: "Portfolio of Rahman Muhaemin, a passionate fullstack developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

