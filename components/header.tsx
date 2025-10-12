"use client"

import { Code, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky px-6 top-0 z-50 w-full bg-white border-b-2 border-black">
      <div className="container max-w-3xl mx-auto flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code className="h-6 w-6" />
          <span className="font-bold"></span>
          {/* <span className="font-bold">Rahman Muhaemin</span> */}
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden sm:flex items-center space-x-4 text-sm">
            <Link href="#about" className="transition hover:text-foreground/80">
              About
            </Link>
            <Link href="#experience" className="transition hover:text-foreground/80">
              Experience
            </Link>
            <Link href="#education" className="transition hover:text-foreground/80">
              Education
            </Link>
            <Link href="#projects" className="transition hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#skills" className="transition hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#contact" className="transition hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          
          <Button variant="ghost" size="icon" className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-background border-t border-border/50">
            <Link href="#about" className="transition hover:text-foreground/80">
              About
            </Link>
            <Link href="#experience" className="transition hover:text-foreground/80">
              Experience
            </Link>
            <Link href="#education" className="transition hover:text-foreground/80">
              Education
            </Link>
            <Link href="#projects" className="transition hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#skills" className="transition hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#contact" className="transition hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

