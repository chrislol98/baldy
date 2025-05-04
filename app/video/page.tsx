"use client"

import Link from "next/link"
import { Triangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { VideoPlayer } from "@/components/video-player"

export default function VideoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation - copied from home page for consistency */}
      <header className="border-b border-border sticky top-0 z-40 bg-background w-full">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
            <div className="flex items-center">
              <MobileNav />
              <Link href="/" className="flex items-center space-x-2">
                <Triangle className="h-6 w-6" />
                <span className="font-bold inline-block">
                  NEXT<span className="text-xs align-text-top">.js</span>
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Showcase
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Docs
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Blog
              </Link>
              <Link
                href="/video"
                className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
              >
                Video
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Templates <span className="text-xs align-text-top">↗</span>
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Enterprise <span className="text-xs align-text-top">↗</span>
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm">Learn</Button>
          </div>
        </div>
      </header>

      {/* Video Content */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center">
              <VideoPlayer />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Next.js. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 