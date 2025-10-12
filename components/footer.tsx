import { Code } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background-alt border-t-2 border-black flex justify-center py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="https://github.com/thxrhmn"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              me
            </Link>
            . The source code is available on{" "}
            <Link
              href="https://github.com/thxrhmn/portfolio"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

