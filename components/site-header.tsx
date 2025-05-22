import Link from "next/link"
import { Menu, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { DistrilunaLogo } from "@/components/distriluna-logo"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <DistrilunaLogo className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            DISTRI<span className="text-orange-500 dark:text-orange-400">LUNA</span>
          </span>
        </Link>
        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          <Link
            href="/categorias/equipos-electronicos"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:text-orange-500 dark:hover:text-orange-400"
          >
            Equipos Electrónicos
          </Link>
          <Link
            href="/categorias/herramientas-manuales"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:text-orange-500 dark:hover:text-orange-400"
          >
            Herramientas Manuales
          </Link>
          <Link
            href="/categorias/accesorios-consumibles"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:text-orange-500 dark:hover:text-orange-400"
          >
            Accesorios y Consumibles
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden w-full max-w-sm md:flex">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar productos..."
                className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[300px]"
              />
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
