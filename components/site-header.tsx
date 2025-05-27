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
      <div className="container flex h-16 items-center justify-between gap-4 px-4 sm:px-6">

        {/* Menú móvil: visible solo en pantallas chicas */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 whitespace-nowrap">
          <DistrilunaLogo className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            DISTRI<span className="text-orange-500 dark:text-orange-400">LUNA</span>
          </span>
        </Link>

        {/* Nav visible solo en pantallas grandes */}
        <nav className="hidden md:flex gap-6 items-center overflow-x-auto scrollbar-thin max-w-[60%]">
          <NavLink href="/categorias/materiales-construccion" text="Materiales de Construcción" />
          <NavLink href="/categorias/herramientas-mano" text="Herramientas de Mano" />
          <NavLink href="/categorias/cerraderia" text="Cerrajería" />
          <NavLink href="/categorias/electrica" text="Eléctrica" />
          <NavLink href="/categorias/pinturas-accesorios" text="Pinturas y Accesorios" />
          <NavLink href="/categorias/herramientas-electricas" text="Herramientas Eléctricas" />
        </nav>

        {/* Buscador + ThemeToggle (responsive) */}
        <div className="flex items-center gap-2 w-full max-w-[300px]">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar productos..."
              className="w-full rounded-lg bg-muted pl-8 py-2 text-sm"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:text-orange-500 dark:hover:text-orange-400 whitespace-nowrap"
    >
      {text}
    </Link>
  )
}
