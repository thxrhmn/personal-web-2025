import "./globals.css"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { Space_Mono } from "next/font/google"
import type React from "react"

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] })

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
      <body className={`${spaceMono.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}