"use client"

import Link from "next/link"
import { Triangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
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
            <div className="hidden sm:flex relative">
              <Input type="search" placeholder="Search documentation..." className="w-[200px] lg:w-[280px] bg-muted" />
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
                ⌘K
              </kbd>
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-1">
              <Triangle className="h-3.5 w-3.5" />
              <span>Deploy</span>
            </Button>
            <Button size="sm">Learn</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The React Framework for the Web
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="px-8">Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>Quick Start</CardTitle>
                  </CardHeader>
                  <CardContent className="font-mono text-sm">
                    <div className="space-y-4">
                      <div className="rounded-md bg-muted p-4">
                        <pre className="leading-loose">
                          <code>npx create-next-app@latest my-app</code>
                        </pre>
                      </div>
                      <div className="rounded-md bg-muted p-4">
                        <pre className="leading-loose">
                          <code>cd my-app</code>
                        </pre>
                      </div>
                      <div className="rounded-md bg-muted p-4">
                        <pre className="leading-loose">
                          <code>npm run dev</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Next.js by Vercel is the full-stack React framework for the web.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center justify-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Triangle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Performance</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get the best performance with automatic optimizations.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Triangle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Type Safety</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Build with confidence using TypeScript by default.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Triangle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Developer Experience</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enjoy better developer experience with helpful tools.
                </p>
              </div>
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
          <div className="flex items-center gap-4 md:gap-2 md:px-0">
            <Button variant="ghost" size="sm">
              Terms
            </Button>
            <Button variant="ghost" size="sm">
              Privacy
            </Button>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
