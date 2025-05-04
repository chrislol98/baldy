"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-bold">NEXT.js</span>
          </Link>
        </div>
        <div className="flex flex-col space-y-3 px-7 pt-10">
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Showcase
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Docs
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Templates
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Enterprise
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
} 