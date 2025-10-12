import "./globals.css"
import Footer from "@/components/footer"
import Header from "@/components/header"
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
    <html lang="en">
      <body className={`${spaceMono.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
